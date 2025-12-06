// utils/calculateUpgrades.ts
import type { BuildingData, ResourceCost, UpgradeStep, CalcResult } from "../data/types";
import { allBuildings } from "../data/allBuildings";

/**
 * Resolve prereq display name -> key in allBuildings.
 */
function resolvePrereqKey(prereqName: string): keyof typeof allBuildings | undefined {
    for (const key in allBuildings) {
        if (allBuildings[key as keyof typeof allBuildings].name === prereqName) {
            return key as keyof typeof allBuildings;
        }
    }

    const normalize = (s: string) =>
        s.trim().replace(/\s+/g, " ").replace(/centre/gi, "center").toLowerCase();

    const normalized = normalize(prereqName);

    for (const key in allBuildings) {
        const bn = allBuildings[key as keyof typeof allBuildings].name;
        if (normalize(bn) === normalized) return key as keyof typeof allBuildings;
    }

    for (const key in allBuildings) {
        if (key.toLowerCase() === normalized) return key as keyof typeof allBuildings;
    }

    return undefined;
}

/**
 * Main function.
 */
export function calculateUpgradeResources(
    building: BuildingData,
    currentLevel: number,
    targetLevel: number,
    owned: ResourceCost,
    buildingMap: Map<string, { from: number; to: number }> = new Map(),
    manualLevels: Record<string, number> = {},
    currentLevels: Record<string, number> = {}
): CalcResult {
    const steps: UpgradeStep[] = [];
    const totals: ResourceCost = {};
    const added = new Set<string>(); // "BuildingName-level" to dedupe

    function addStep(bName: string, lvl: number, cost: ResourceCost, time: string | null, power: number) {
        const key = `${bName}-${lvl}`;
        if (added.has(key)) return;
        added.add(key);

        steps.push({ building: bName, level: lvl, cost, time, power });

        for (const [r, amt] of Object.entries(cost)) {
            const k = r as keyof ResourceCost;
            totals[k] = (totals[k] || 0) + amt;
        }

        // Update buildingMap
        const existing = buildingMap.get(bName);
        if (!existing) {
            buildingMap.set(bName, { from: lvl - 1, to: lvl });
        } else {
            if (lvl < existing.from) existing.from = lvl - 1;
            if (lvl > existing.to) existing.to = lvl;
        }
    }

    function processBuilding(b: BuildingData, from: number, to: number) {
        if (from >= to) return;

        for (let lvl = from + 1; lvl <= to; lvl++) {
            const upgrade = b.upgrades.find(u => u.level === lvl);
            if (!upgrade) continue;

            addStep(b.name, lvl, upgrade.cost, upgrade.time, upgrade.power);

            if (upgrade.prereqs) {
                for (const [prereqName, prereqTargetLevel] of Object.entries(upgrade.prereqs)) {
                    const prereqKey = resolvePrereqKey(prereqName);
                    if (!prereqKey) continue;

                    const prereqBuilding = allBuildings[prereqKey];
                    if (!prereqBuilding) continue;

                    // Determine starting level:
                    // precedence: manual override > currentLevels map > existing buildingMap 'to' > 0
                    const manual = manualLevels[prereqBuilding.name] ?? undefined;
                    const actualCurrent = currentLevels[prereqBuilding.name] ?? 0;
                    const planned = buildingMap.get(prereqBuilding.name)?.to ?? 0;
                    const prereqFrom = Math.max(manual ?? actualCurrent, planned, actualCurrent);

                    processBuilding(prereqBuilding, prereqFrom, prereqTargetLevel);

                    // Update buildingMap for prereq
                    const existing = buildingMap.get(prereqBuilding.name);
                    if (!existing) {
                        buildingMap.set(prereqBuilding.name, { from: prereqFrom, to: prereqTargetLevel });
                    } else if (prereqTargetLevel > existing.to) {
                        buildingMap.set(prereqBuilding.name, { from: existing.from, to: prereqTargetLevel });
                    }
                }
            }
        }
    }

    // Ensure main building range
    const rootExisting = buildingMap.get(building.name);
    if (!rootExisting) {
        buildingMap.set(building.name, { from: currentLevel, to: targetLevel });
    } else if (targetLevel > rootExisting.to) {
        buildingMap.set(building.name, { from: rootExisting.from, to: targetLevel });
    }

    processBuilding(building, currentLevel, targetLevel);

    // Subtract owned resources
    const finalTotals: ResourceCost = {};
    for (const [r, amt] of Object.entries(totals)) {
        const k = r as keyof ResourceCost;
        finalTotals[k] = Math.max(0, amt - (owned[k] || 0));
    }

    return { steps, totals: finalTotals };
}
