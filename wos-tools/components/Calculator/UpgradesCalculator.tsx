//Main Calculator Component

"use client";

import { useState, useEffect } from "react";
import type { BuildingData, ResourceCost } from "../../data/types";
import { allBuildings } from "../../data/allBuildings";
import ResourceInput from "./ResourceInput";
import LevelSelector from "./LevelSelector";
import { useCalculate } from "./useCalculate";
import StepsDisplay from "./StepsDisplay";

interface Props {
    building: BuildingData;
}

export default function UpgradesCalculator({ building }: Props) {
    const maxLevel = building.upgrades[building.upgrades.length - 1].level;

    const [currentLevel, setCurrentLevel] = useState(1);
    const [targetLevel, setTargetLevel] = useState(1);
    const [buildingLevels, setBuildingLevels] = useState<Record<string, number>>(() => {
        // Initial state: all optional buildings default to main building's current level
        const initial: Record<string, number> = {};
        Object.values(allBuildings).forEach((b) => {
            initial[b.name] = 1; // will be updated once currentLevel changes
        });
        return initial;
    });

    const [ownedResources, setOwnedResources] = useState<ResourceCost>({});

    // Update optional levels when main building currentLevel changes
    useEffect(() => {
        setBuildingLevels((prev) => {
            const updated: Record<string, number> = {};
            Object.values(allBuildings).forEach((b) => {
                // keep manual overrides if higher than currentLevel
                updated[b.name] = Math.max(prev[b.name] ?? 0, currentLevel);
            });
            return updated;
        });
    }, [currentLevel]);

    const { result, calculate, buildingMap } = useCalculate(building);

    const handleLevelChange = (name: string, lvl: number) => {
        setBuildingLevels((prev) => ({ ...prev, [name]: lvl }));
    };

    const handleCalculate = () => {
        calculate(currentLevel, targetLevel, ownedResources, buildingLevels);
    };

    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-md max-w-3xl mx-auto mt-6 text-white">
            <h2 className="text-2xl font-bold mb-4">{building.name} Upgrade Calculator</h2>

            {/* Current & Target Level */}
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

            {/* Prerequisite adjustments */}
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

            {/* Owned Resources */}
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

            {/* Steps & Totals */}
            {result && <StepsDisplay result={result} buildingMap={buildingMap} />}
        </div>
    );
}

