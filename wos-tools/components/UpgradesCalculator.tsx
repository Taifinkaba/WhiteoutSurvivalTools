"use client";

import { useState } from "react";
import type { BuildingData, ResourceCost, CalcResult } from "../data/types";
import { allBuildings } from "../data/allBuildings";
import { calculateUpgradeResources } from "../utils/calculateUpgrades";
import ResourceInput from "./ResourceInput";
import LevelSelector from "./LevelSelector";

interface Props {
    building: BuildingData;
}

export default function UpgradesCalculator({ building }: Props) {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [targetLevel, setTargetLevel] = useState(1);
    const [buildingLevels, setBuildingLevels] = useState<Record<string, number>>({});
    const [ownedResources, setOwnedResources] = useState<ResourceCost>({});
    const [result, setResult] = useState<CalcResult | null>(null);

    const handleLevelChange = (name: string, lvl: number) => {
        setBuildingLevels((prev) => ({ ...prev, [name]: lvl }));
    };

    const handleCalculate = () => {
        const calcResult = calculateUpgradeResources(
            building,
            currentLevel,
            targetLevel,
            ownedResources,
            new Map(),
            currentLevel // main building baseline
        );

        setResult(calcResult);
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
                />
                <LevelSelector
                    building={building}
                    label="Target Level"
                    value={targetLevel}
                    minLevel={currentLevel}
                    onChange={setTargetLevel}
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
                        maxLevel={currentLevel} // cap at main building level
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

            {result && (
                <>
                    {/* Totals */}
                    <div className="bg-gray-700 p-4 rounded mt-4">
                        <h3 className="text-lg font-semibold mb-2">Resources Needed:</h3>
                        <ul className="list-disc pl-5">
                            {Object.entries(result.totals).map(([res, amt]) => (
                                <li key={res} className="capitalize">
                                    {res}: {amt.toLocaleString()}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Steps */}
                    <div className="bg-gray-700 p-4 rounded mt-4">
                        <h3 className="text-lg font-semibold mb-2">Buildings to Upgrade:</h3>
                        <ul className="list-disc pl-5">
                            {result.steps.map((step, i) => (
                                <li key={i}>
                                    {step.building}: Level {step.level} — Cost:{" "}
                                    {Object.entries(step.cost)
                                        .map(([res, amt]) => `${res}: ${amt.toLocaleString()}`)
                                        .join(", ")}
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}
