"use client";

import { useState, useEffect } from "react";
import type { BuildingData, ResourceCost, CalcResult } from "../data/types";
import { allBuildings } from "../data/allBuildings";
import { calculateUpgradeResources } from "../utils/calculateUpgrades";
import ResourceInput from "./ResourceInput";
import LevelSelector from "./LevelSelector";
import StepsDisplay from "./StepsDisplay";

// Type for the upgrade ranges shown in buildingMap
interface UpgradeRange {
    from: number;
    to: number;
}

interface Props {
    building: BuildingData;
}

export default function UpgradesCalculator({ building }: Props) {
    const maxLevel = building.upgrades[building.upgrades.length - 1].level;

    const [currentLevel, setCurrentLevel] = useState(1);
    const [targetLevel, setTargetLevel] = useState(1);

    const [buildingLevels, setBuildingLevels] = useState<Record<string, number>>({});
    const [ownedResources, setOwnedResources] = useState<ResourceCost>({});
    const [result, setResult] = useState<CalcResult | null>(null);

    // Prefill optional buildings to match main building current level
    useEffect(() => {
        const updatedLevels: Record<string, number> = {};
        Object.values(allBuildings).forEach((b) => {
            updatedLevels[b.name] = Math.max(buildingLevels[b.name] ?? 0, currentLevel);
        });
        setBuildingLevels(updatedLevels);
    }, [currentLevel]);

    const handleLevelChange = (name: string, lvl: number) => {
        setBuildingLevels((prev) => ({ ...prev, [name]: lvl }));
    };

    const handleCalculate = () => {
        const calcResult = calculateUpgradeResources(
            building,
            currentLevel,
            targetLevel,
            ownedResources,
            new Map(),         // map is no longer used externally
            currentLevel,      // baseline
            buildingLevels     // manual overrides
        );

        setResult(calcResult);
    };

    // Create buildingMap for summary display
    const buildingMap: Record<string, UpgradeRange> = {};
    if (result) {
        for (const step of result.steps) {
            if (!buildingMap[step.building]) {
                buildingMap[step.building] = { from: step.level - 1, to: step.level };
            } else {
                buildingMap[step.building].to = step.level;
            }
        }
    }

    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-md max-w-3xl mx-auto mt-6 text-white">
            <h2 className="text-2xl font-bold mb-4">{building.name} Upgrade Calculator</h2>

            {/* Current + Target Level Inputs */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                <LevelSelector
                    building={building}
                    label="Current Level"
                    value={currentLevel}
                    onChange={(lvl) => {
                        setCurrentLevel(lvl);
                        if (lvl > targetLevel) setTargetLevel(lvl);
                    }}
                    minLevel={1}
                    maxLevel={maxLevel}
                />
                <LevelSelector
                    building={building}
                    label="Target Level"
                    value={targetLevel}
                    minLevel={currentLevel}
                    onChange={setTargetLevel}
                    maxLevel={maxLevel}
                />
            </div>

            {/* Optional Building Overrides */}
            <h3 className="text-xl font-semibold mb-2">Adjust Prerequisite Levels (optional)</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
                {Object.values(allBuildings).map((b) => (
                    <LevelSelector
                        key={b.name}
                        building={b}
                        label={b.name}
                        value={buildingLevels[b.name] ?? currentLevel}
                        minLevel={0}
                        maxLevel={b.upgrades[b.upgrades.length - 1].level}
                        onChange={(lvl) => handleLevelChange(b.name, lvl)}
                    />
                ))}
            </div>

            {/* Owned Resources Input */}
            <h3 className="text-xl font-semibold mb-2">Your Current Resources</h3>
            <ResourceInput
                resources={ownedResources}
                onChange={(res, val) =>
                    setOwnedResources((prev) => ({
                        ...prev,
                        [res]: Number(val) || 0,
                    }))
                }
            />

            <button
                onClick={handleCalculate}
                className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded font-semibold mb-4 w-full"
            >
                Calculate
            </button>

            {/* Modularized display */}
            {result && (
                <StepsDisplay result={result} buildingMap={buildingMap} />
            )}
        </div>
    );
}
