import { useState } from "react";
import type { ResourceCost, CalcResult, BuildingData } from "@/data/types";
import { calculateUpgradeResources } from "@/utils/calculateUpgrades";

export function useCalculate(building: BuildingData) {
    const [result, setResult] = useState<CalcResult | null>(null);

    const calculate = (
        currentLevel: number,
        targetLevel: number,
        ownedResources: ResourceCost,
        buildingLevels: Record<string, number>
    ) => {
        const calcResult = calculateUpgradeResources(
            building,
            currentLevel,
            targetLevel,
            ownedResources,
            new Map(),        // internal buildingMap
            buildingLevels    // manual overrides
        );

        setResult(calcResult);
    };

    // Convert steps → building ranges for display (plain object)
    const buildingMap: Record<string, { from: number; to: number }> = {};
    if (result) {
        for (const step of result.steps) {
            if (!buildingMap[step.building]) {
                buildingMap[step.building] = { from: step.level - 1, to: step.level };
            } else {
                buildingMap[step.building].to = step.level;
            }
        }
    }

    return { result, calculate, buildingMap };
}
