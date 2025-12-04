"use client";

import { useState } from "react";
import type { ResourceCost, BuildingData, CalcResult } from "../data/types";
import { calculateUpgradeResources } from "../utils/calculateUpgrades";
import ResourceInput from "./ResourceInput";
import LevelSelector from "./LevelSelector";
import UpgradeResults from "./UpgradeResults";

interface Props {
    building: BuildingData;
}

export default function UpgradesCalculator({ building }: Props) {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [targetLevel, setTargetLevel] = useState(1);
    const [ownedResources, setOwnedResources] = useState<ResourceCost>({});
    const [result, setResult] = useState<CalcResult | null>(null);

    const handleCalculate = () => {
        const buildingMap = new Map<string, { from: number; to: number }>();

        // Pass the main building's current level as baseline for prerequisites
        const neededResources = calculateUpgradeResources(
            building,
            currentLevel,
            targetLevel,
            ownedResources,
            buildingMap,
            currentLevel
        );

        // Convert buildingMap to an array for display
        const buildingList = Array.from(buildingMap.entries()).map(([name, levels]) => ({
            name,
            from: levels.from,
            to: levels.to,
        }));

        setResult({ resources: neededResources, buildings: buildingList });
    };

    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-md max-w-3xl mx-auto mt-6 text-white">
            <h2 className="text-2xl font-bold mb-4">{building.name} Upgrade Calculator</h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <LevelSelector
                    building={building}
                    label="Current Level"
                    value={currentLevel}
                    onChange={(lvl) => {
                        setCurrentLevel(lvl);
                        if (lvl > targetLevel) setTargetLevel(lvl);
                    }}
                />
                <LevelSelector
                    building={building}
                    label="Target Level"
                    value={targetLevel}
                    minLevel={currentLevel}
                    onChange={setTargetLevel}
                />
            </div>

            <h3 className="text-xl font-semibold mb-2">Your Current Resources</h3>
            <ResourceInput
                resources={ownedResources}
                onChange={(res, val) =>
                    setOwnedResources((prev) => ({ ...prev, [res]: Number(val) || 0 }))
                }
            />

            <button
                onClick={handleCalculate}
                className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded font-semibold mb-4 w-full"
            >
                Calculate
            </button>

            {result && <UpgradeResults result={result} />}
        </div>
    );
}