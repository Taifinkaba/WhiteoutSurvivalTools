import type { BuildingData, ResourceCost, UpgradeStep, CalcResult } from "../data/types";
import { allBuildings } from "../data/allBuildings";

// Map display names from prereqs to keys in allBuildings
export const buildingNameMap: Record<string, keyof typeof allBuildings> = {
    "Coal Mine": "coalMine",
    "Command Center": "commandCenter",
    "Embassy": "embassy",
    "Furnace": "furnace",
    "Hunter's Hut": "huntersHut",
    "Infantry Camp": "infantryCamp",
    "Infirmary": "infirmary",
    "Iron Mine": "ironMine",
    "Lancer Camp": "lancerCamp",
    "Marksman Camp": "marksmanCamp",
    "Research Center": "researchCenter",
    "Sawmill": "sawmill",
    "Shelter": "shelter",
};

/**
 * Calculates upgrade steps and total resources required for a building,
 * including prerequisites. The main building's current level acts as
 * a baseline for prerequisite calculations.
 */
export function calculateUpgradeResources(
    building: BuildingData,
    currentLevel: number,
    targetLevel: number,
    owned: ResourceCost,
    buildingMap: Map<string, { from: number; to: number }> = new Map(),
    mainBuildingLevel: number = currentLevel
): CalcResult {
    const steps: UpgradeStep[] = [];
    const totals: ResourceCost = {};

    // Update building map
    const existing = buildingMap.get(building.name);
    if (!existing) {
        buildingMap.set(building.name, { from: currentLevel, to: targetLevel });
    } else if (targetLevel > existing.to) {
        buildingMap.set(building.name, { from: existing.from, to: targetLevel });
    }

    for (let lvl = currentLevel + 1; lvl <= targetLevel; lvl++) {
        const upgrade = building.upgrades.find((u) => u.level === lvl);
        if (!upgrade) continue;

        // Add this step
        steps.push({
            building: building.name,
            level: lvl,
            cost: upgrade.cost,
            time: upgrade.time,
            power: upgrade.power,
        });

        // Add to totals
        for (const [res, amt] of Object.entries(upgrade.cost)) {
            const key = res as keyof ResourceCost;
            totals[key] = (totals[key] || 0) + amt;
        }

        // Handle prerequisites recursively
        if (upgrade.prereqs) {
            for (const [prereqName, prereqTargetLevel] of Object.entries(upgrade.prereqs)) {
                const prereqKey = buildingNameMap[prereqName];
                if (!prereqKey) continue;

                const prereqBuilding = allBuildings[prereqKey];
                if (!prereqBuilding) continue;

                // Start level for prerequisite is max(planned level, main building level)
                const plannedLevel = buildingMap.get(prereqBuilding.name)?.to ?? 0;
                const prereqCurrentLevel = Math.max(plannedLevel, mainBuildingLevel);

                const prereqResult = calculateUpgradeResources(
                    prereqBuilding,
                    prereqCurrentLevel,
                    prereqTargetLevel,
                    {},
                    buildingMap,
                    mainBuildingLevel
                );

                // Merge prerequisite steps and totals
                steps.push(...prereqResult.steps);
                for (const [res, amt] of Object.entries(prereqResult.totals)) {
                    const key = res as keyof ResourceCost;
                    totals[key] = (totals[key] || 0) + amt;
                }
            }
        }
    }

    // Subtract owned resources
    for (const [res, amt] of Object.entries(totals)) {
        const key = res as keyof ResourceCost;
        totals[key] = Math.max(0, amt - (owned[key] || 0));
    }

    return { steps, totals };
}
