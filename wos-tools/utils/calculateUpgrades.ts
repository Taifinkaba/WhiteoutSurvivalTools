import type { BuildingData, ResourceCost } from "../data/types";
import { allBuildings } from "../data/allBuildings";

// Map display names to keys in allBuildings
export const buildingNameMap: Record<string, keyof typeof allBuildings> = {
    "Coal Mine": "coalMine",
    "Command Centre": "commandCenter",
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
    "Hero Hall": "commandCenter" // example mapping
};

export function calculateUpgradeResources(
    building: BuildingData,
    currentLevel: number,
    targetLevel: number,
    owned: ResourceCost,
    buildingMap: Map<string, { from: number; to: number }> = new Map()
): ResourceCost {
    const accumulated: ResourceCost = {};

    const existing = buildingMap.get(building.name);
    if (!existing) {
        buildingMap.set(building.name, { from: currentLevel, to: targetLevel });
    } else if (targetLevel > existing.to) {
        buildingMap.set(building.name, { from: existing.from, to: targetLevel });
    }

    for (let lvl = currentLevel + 1; lvl <= targetLevel; lvl++) {
        const upgrade = building.upgrades.find((u) => u.level === lvl);
        if (!upgrade) continue;

        // Add direct cost
        for (const [res, amt] of Object.entries(upgrade.cost)) {
            const k = res as keyof ResourceCost;
            accumulated[k] = (accumulated[k] || 0) + amt;
        }

        // Handle prerequisites recursively
        if (upgrade.prereqs) {
            for (const [prereqName, prereqLvl] of Object.entries(upgrade.prereqs)) {
                const prereqKey = buildingNameMap[prereqName];
                if (!prereqKey) continue;

                const prereqBuilding = allBuildings[prereqKey];
                if (!prereqBuilding) continue;

                const prereqCurrentLevel = buildingMap.get(prereqBuilding.name)?.to || 1;

                const prereqAccum = calculateUpgradeResources(
                    prereqBuilding,
                    prereqCurrentLevel,
                    prereqLvl,
                    {},
                    buildingMap
                );

                for (const [res, amt] of Object.entries(prereqAccum)) {
                    const k = res as keyof ResourceCost;
                    accumulated[k] = (accumulated[k] || 0) + amt;
                }
            }
        }
    }

    // Subtract owned resources
    const finalNeed: ResourceCost = {};
    for (const [res, amt] of Object.entries(accumulated)) {
        const k = res as keyof ResourceCost;
        finalNeed[k] = Math.max(0, amt - (owned[k] || 0));
    }

    return finalNeed;
}