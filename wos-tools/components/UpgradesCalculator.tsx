"use client";

import { useState } from "react";
import type { ResourceCost, BuildingData } from "../data/types";
import { allBuildings } from "../data/allBuildings";

interface Props {
    building: BuildingData;
}

interface CalcResult {
    resources: ResourceCost;
    buildings: { name: string; from: number; to: number }[];
}

// Map display names to keys in allBuildings
const buildingNameMap: Record<string, keyof typeof allBuildings> = {
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
    "Hero Hall": "commandCenter" // example mapping if missing
};

export default function UpgradesCalculator({ building }: Props) {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [targetLevel, setTargetLevel] = useState(1);
    const [ownedResources, setOwnedResources] = useState<ResourceCost>({});
    const [result, setResult] = useState<CalcResult | null>(null);

    const handleResourceChange = (resource: keyof ResourceCost, value: string) => {
        setOwnedResources((prev) => ({
            ...prev,
            [resource]: Number(value) || 0,
        }));
    };

    function calculateUpgradeResources(
        building: BuildingData,
        currentLevel: number,
        targetLevel: number,
        owned: ResourceCost,
        buildingMap: Map<string, { from: number; to: number }> = new Map()
    ): ResourceCost {
        const accumulated: ResourceCost = {};

        // Update buildingMap
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

                    // Use the current planned level for prereq, default 1
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

    const handleCalculate = () => {
        const buildingMap = new Map<string, { from: number; to: number }>();
        const neededResources = calculateUpgradeResources(
            building,
            currentLevel,
            targetLevel,
            ownedResources,
            buildingMap
        );

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
                <div>
                    <label className="block mb-1">Current Level</label>
                    <select
                        value={currentLevel}
                        onChange={(e) => {
                            const lvl = Number(e.target.value);
                            setCurrentLevel(lvl);
                            if (lvl > targetLevel) setTargetLevel(lvl);
                        }}
                        className="w-full p-2 rounded bg-gray-700 text-white"
                    >
                        {building.upgrades.map((u) => (
                            <option key={u.level} value={u.level}>
                                Level {u.level}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block mb-1">Target Level</label>
                    <select
                        value={targetLevel}
                        onChange={(e) => setTargetLevel(Number(e.target.value))}
                        className="w-full p-2 rounded bg-gray-700 text-white"
                    >
                        {building.upgrades
                            .filter((u) => u.level >= currentLevel)
                            .map((u) => (
                                <option key={u.level} value={u.level}>
                                    Level {u.level}
                                </option>
                            ))}
                    </select>
                </div>
            </div>

            <h3 className="text-xl font-semibold mb-2">Your Current Resources</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {(["wood", "coal", "iron", "meat"] as (keyof ResourceCost)[]).map((res) => (
                    <div key={res}>
                        <label className="block mb-1 capitalize">{res}</label>
                        <input
                            type="number"
                            min={0}
                            value={ownedResources[res] || 0}
                            onChange={(e) => handleResourceChange(res, e.target.value)}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={handleCalculate}
                className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded font-semibold mb-4 w-full"
            >
                Calculate
            </button>

            {result && (
                <>
                    <div className="bg-gray-700 p-4 rounded mt-4">
                        <h3 className="text-lg font-semibold mb-2">Resources Needed:</h3>
                        <ul className="list-disc pl-5">
                            {Object.entries(result.resources).map(([res, amt]) => (
                                <li key={res} className="capitalize">
                                    {res}: {amt.toLocaleString()}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gray-700 p-4 rounded mt-4">
                        <h3 className="text-lg font-semibold mb-2">Buildings to Upgrade:</h3>
                        <ul className="list-disc pl-5">
                            {result.buildings.map((b, i) => (
                                <li key={i}>
                                    {b.name}: Level {b.from} → Level {b.to}
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}