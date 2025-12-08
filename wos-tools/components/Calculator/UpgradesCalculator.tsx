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
        const initial: Record<string, number> = {};
        Object.values(allBuildings).forEach((b) => {
            initial[b.name] = 1;
        });
        return initial;
    });

    const [ownedResources, setOwnedResources] = useState<ResourceCost>({});

    useEffect(() => {
        setBuildingLevels((prev) => {
            const updated: Record<string, number> = {};
            Object.values(allBuildings).forEach((b) => {
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
        <section
            aria-labelledby={`calculator-${building.name.replace(/\s+/g, "-").toLowerCase()}`}
            className="bg-gray-800 p-6 rounded-xl shadow-md max-w-3xl mx-auto mt-6 text-white"
        >
            <h2
                id={`calculator-${building.name.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-2xl font-bold mb-4"
            >
                {building.name} Upgrade Calculator
            </h2>

            {/* Current & Target Level */}
            <fieldset className="grid grid-cols-2 gap-4 mb-4">
                <legend className="sr-only">Select current and target building levels</legend>
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
            </fieldset>

            {/* Prerequisite adjustments */}
            <section aria-labelledby="prereq-heading" className="mb-4">
                <h3 id="prereq-heading" className="text-xl font-semibold mb-2">
                    Adjust Prerequisite Levels (optional)
                </h3>
                <div className="grid grid-cols-2 gap-4">
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
            </section>

            {/* Owned Resources */}
            <section aria-labelledby="resources-heading" className="mb-4">
                <h3 id="resources-heading" className="text-xl font-semibold mb-2">
                    Your Current Resources
                </h3>
                <ResourceInput
                    resources={ownedResources}
                    onChange={(res, val) =>
                        setOwnedResources((prev) => ({ ...prev, [res]: Number(val) || 0 }))
                    }
                />
            </section>

            <button
                onClick={handleCalculate}
                className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded font-semibold mb-4 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
            >
                Calculate
            </button>

            {/* Steps & Totals */}
            {result && <StepsDisplay result={result} buildingMap={buildingMap} />}
        </section>
    );
}
