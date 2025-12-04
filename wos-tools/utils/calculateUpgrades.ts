import type { BuildingData, ResourceCost } from "../data/types";
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
 * Calculates resources required to upgrade a building including all prerequisites.
 * The mainBuildingLevel only affects the first layer of prerequisites.
 */
export function calculateUpgradeResources(
    building: BuildingData,
    currentLevel: number,
    targetLevel: number,
    owned: ResourceCost,
    buildingMap: Map<string, { from: number; to: number }> = new Map(),
    mainBuildingLevel?: number // optional, only set for main building
): ResourceCost {
    const accumulated: ResourceCost = {};

    // Update building map
    const existing = buildingMap.get(building.name);
    if (!existing) {
        buildingMap.set(building.name, { from: currentLevel, to: targetLevel });
    } else if (targetLevel > existing.to) {
        buildingMap.set(building.name, { from: existing.from, to: targetLevel });
    }

    // Loop through levels
    for (let lvl = currentLevel + 1; lvl <= targetLevel; lvl++) {
        const upgrade = building.upgrades.find((u) => u.level === lvl);
        if (!upgrade) continue;

        // Add direct cost
        for (const [res, amt] of Object.entries(upgrade.cost)) {
            const key = res as keyof ResourceCost;
            accumulated[key] = (accumulated[key] || 0) + amt;
        }

        // Handle prerequisites
        if (upgrade.prereqs) {
            for (const [prereqName, prereqTargetLevel] of Object.entries(upgrade.prereqs)) {
                const prereqKey = buildingNameMap[prereqName];
                if (!prereqKey) continue;

                const prereqBuilding = allBuildings[prereqKey];
                if (!prereqBuilding) continue;

                // Determine the starting level for the prereq
                const plannedLevel = buildingMap.get(prereqBuilding.name)?.to ?? 0;

                // Apply mainBuildingLevel only for the first layer (main building's direct prereqs)
                const prereqCurrentLevel = mainBuildingLevel !== undefined && building.name === allBuildings.furnace.name
                    ? Math.max(plannedLevel, mainBuildingLevel)
                    : Math.max(plannedLevel, 1);

                // Recursive call
                const prereqResources = calculateUpgradeResources(
                    prereqBuilding,
                    prereqCurrentLevel,
                    prereqTargetLevel,
                    {},
                    buildingMap
                );

                // Add resources
                for (const [res, amt] of Object.entries(prereqResources)) {
                    const key = res as keyof ResourceCost;
                    accumulated[key] = (accumulated[key] || 0) + amt;
                }
            }
        }
    }

    // Subtract owned resources
    const finalNeed: ResourceCost = {};
    for (const [res, amt] of Object.entries(accumulated)) {
        const key = res as keyof ResourceCost;
        finalNeed[key] = Math.max(0, amt - (owned[key] || 0));
    }

    return finalNeed;
}
