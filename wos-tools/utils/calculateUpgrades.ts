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
 * Calculates upgrade steps and total resources required to upgrade a building
 * including prerequisites. Deduplicates steps.
 */
export function calculateUpgradeResources(
    building: BuildingData,
    currentLevel: number,
    targetLevel: number,
    owned: ResourceCost,
    buildingMap: Map<string, { from: number; to: number }> = new Map(),
    mainBuildingLevel: number = currentLevel,
    manualLevels: Record<string, number> = {}
): CalcResult {
    const steps: UpgradeStep[] = [];
    const totals: ResourceCost = {};
    const addedSteps = new Set<string>(); // deduplicate steps

    function addStep(step: UpgradeStep) {
        const key = `${step.building}-${step.level}`;
        if (!addedSteps.has(key)) {
            steps.push(step);
            addedSteps.add(key);

            for (const [res, amt] of Object.entries(step.cost)) {
                const k = res as keyof ResourceCost;
                totals[k] = (totals[k] || 0) + amt;
            }
        }
    }

    function processBuilding(b: BuildingData, from: number, to: number) {
        for (let lvl = from + 1; lvl <= to; lvl++) {
            const upgrade = b.upgrades.find((u) => u.level === lvl);
            if (!upgrade) continue;

            // Add step
            addStep({
                building: b.name,
                level: lvl,
                cost: upgrade.cost,
                time: upgrade.time,
                power: upgrade.power,
            });

            // Handle prerequisites recursively
            if (upgrade.prereqs) {
                for (const [prereqName, prereqTargetLevel] of Object.entries(upgrade.prereqs)) {
                    const prereqKey = buildingNameMap[prereqName];
                    if (!prereqKey) continue;

                    const prereqBuilding = allBuildings[prereqKey];
                    if (!prereqBuilding) continue;

                    const plannedLevel = buildingMap.get(prereqBuilding.name)?.to ?? 0;
                    const manualLevel = manualLevels[prereqBuilding.name] ?? 0;

                    // Start from manual level if set, otherwise last planned
                    const prereqCurrentLevel = Math.max(plannedLevel, manualLevel);

                    processBuilding(prereqBuilding, prereqCurrentLevel, prereqTargetLevel);

                    // Update building map
                    const existing = buildingMap.get(prereqBuilding.name);
                    if (!existing) {
                        buildingMap.set(prereqBuilding.name, { from: prereqCurrentLevel, to: prereqTargetLevel });
                    } else if (prereqTargetLevel > existing.to) {
                        buildingMap.set(prereqBuilding.name, { from: existing.from, to: prereqTargetLevel });
                    }
                }
            }
        }
    }

    processBuilding(building, currentLevel, targetLevel);

    // Subtract owned resources
    for (const [res, amt] of Object.entries(totals)) {
        const key = res as keyof ResourceCost;
        totals[key] = Math.max(0, amt - (owned[key] || 0));
    }

    return { steps, totals };
}