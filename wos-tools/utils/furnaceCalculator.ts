import type { BuildingData, ResourceCost } from "../data/types";

/**
 * Adds two ResourceCost objects together.
 */
function addResources(a: ResourceCost, b: ResourceCost): ResourceCost {
    const result: ResourceCost = { ...a };
    for (const key in b) {
        result[key as keyof ResourceCost] = (result[key as keyof ResourceCost] || 0) + (b[key as keyof ResourceCost] || 0);
    }
    return result;
}

/**
 * Subtracts one ResourceCost from another (used for player's existing resources)
 */
function subtractResources(total: ResourceCost, owned: ResourceCost): ResourceCost {
    const result: ResourceCost = {};
    for (const key in total) {
        result[key as keyof ResourceCost] = Math.max((total[key as keyof ResourceCost] || 0) - (owned[key as keyof ResourceCost] || 0), 0);
    }
    return result;
}

/**
 * Calculates total resources needed to upgrade a building from currentLevel to targetLevel
 */
export function calculateUpgradeResources(
    building: BuildingData,
    currentLevel: number,
    targetLevel: number,
    playerResources: ResourceCost = {}
): ResourceCost {
    if (currentLevel >= targetLevel) return {};

    const total: ResourceCost = {};

    for (let lvl = currentLevel; lvl < targetLevel; lvl++) {
        const upgrade = building.upgrades.find(u => u.level === lvl + 1);
        if (!upgrade) continue;

        // Add cost of this level
        addResources(total, upgrade.cost);
        Object.assign(total, addResources(total, upgrade.cost));
    }

    // Subtract player's existing resources
    const needed = subtractResources(total, playerResources);

    return needed;
}