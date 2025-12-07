import React from "react";
import type { CalcResult } from "../../data/types";

interface UpgradeRange {
    from: number;
    to: number;
}

interface Props {
    result: CalcResult;
    buildingMap: Record<string, UpgradeRange>;
}

export default function StepsDisplay({ result }: Props) {
    // Build a map of building → level range
    const buildingMap: Record<string, UpgradeRange> = {};
    result.steps.forEach((step) => {
        const existing = buildingMap[step.building];
        if (!existing) {
            buildingMap[step.building] = { from: step.level - 1, to: step.level };
        } else {
            if (step.level < existing.from) existing.from = step.level - 1;
            if (step.level > existing.to) existing.to = step.level;
        }
    });

    // Group steps by furnace and prereqs
    const grouped: { furnace: any; prereqs: any[] }[] = [];
    let currentGroup: { furnace: any; prereqs: any[] } | null = null;

    result.steps.forEach((step) => {
        if (step.building === "Furnace") {
            if (currentGroup) grouped.push(currentGroup);
            currentGroup = { furnace: step, prereqs: [] };
        } else {
            if (!currentGroup) currentGroup = { furnace: null, prereqs: [] };
            currentGroup.prereqs.push(step);
        }
    });
    if (currentGroup) grouped.push(currentGroup);

    // Calculate totals for Meat, Wood, Coal, Iron
    let totalMeat = 0;
    let totalWood = 0;
    let totalCoal = 0;
    let totalIron = 0;

    result.steps.forEach((step) => {
        const { cost } = step;
        totalMeat += cost.meat || 0;
        totalWood += cost.wood || 0;
        totalCoal += cost.coal || 0;
        totalIron += cost.iron || 0;
    });

    return (
        <div className="space-y-4 mt-4">

            {/* Total Resources */}
            <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-lg font-semibold mb-2">Resources Needed:</h3>
                <ul className="list-disc pl-5">
                    {Object.entries(result.totals).map(([res, amount]) => (
                        <li key={res} className="capitalize">
                            {res}: {amount.toLocaleString()}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Buildings to Upgrade */}
            <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-lg font-semibold mb-2">Buildings to Upgrade:</h3>
                <ul className="list-disc pl-5">
                    {Object.entries(buildingMap).map(([name, { from, to }]) => (
                        <li key={name}>
                            {name}: Level {from} → Level {to}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Detailed Steps */}
            <div className="bg-gray-700 p-4 rounded overflow-x-auto">
                <h3 className="text-lg font-semibold mb-4">Detailed Steps:</h3>

                <table className="min-w-full text-center border-collapse">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            {["Building", "Level", "Meat", "Wood", "Coal", "Iron"].map((header) => (
                                <th key={header} className="p-2 border border-gray-600 font-semibold">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {grouped.map((group, groupIndex) => (
                            <React.Fragment key={groupIndex}>
                                {/* Prereqs */}
                                {group.prereqs.map((step, i) => {
                                    const { cost } = step;

                                    return (
                                        <tr key={`pre-${i}`} className="bg-gray-900 text-white">
                                            <td className="p-2 border border-gray-700">{step.building}</td>
                                            <td className="p-2 border border-gray-700">{step.level}</td>
                                            <td className="p-2 border border-gray-700">{cost.meat?.toLocaleString() || 0}</td>
                                            <td className="p-2 border border-gray-700">{cost.wood?.toLocaleString() || 0}</td>
                                            <td className="p-2 border border-gray-700">{cost.coal?.toLocaleString() || 0}</td>
                                            <td className="p-2 border border-gray-700">{cost.iron?.toLocaleString() || 0}</td>
                                        </tr>
                                    );
                                })}

                                {/* Furnace row */}
                                {group.furnace && (() => {
                                    const step = group.furnace;
                                    const { cost } = step;

                                    return (
                                        <tr key={`furn-${groupIndex}`} className="bg-gray-800 text-yellow-300 font-bold">
                                            <td className="p-2 border border-gray-700">{step.building}</td>
                                            <td className="p-2 border border-gray-700">{step.level}</td>
                                            <td className="p-2 border border-gray-700">{cost.meat?.toLocaleString() || 0}</td>
                                            <td className="p-2 border border-gray-700">{cost.wood?.toLocaleString() || 0}</td>
                                            <td className="p-2 border border-gray-700">{cost.coal?.toLocaleString() || 0}</td>
                                            <td className="p-2 border border-gray-700">{cost.iron?.toLocaleString() || 0}</td>
                                        </tr>
                                    );
                                })()}
                            </React.Fragment>
                        ))}

                        {/* Total row */}
                        <tr className="bg-gray-700 text-yellow-200 font-bold">
                            <td className="p-2 border border-gray-700">TOTAL</td>
                            <td className="p-2 border border-gray-700">—</td>
                            <td className="p-2 border border-gray-700">{totalMeat.toLocaleString()}</td>
                            <td className="p-2 border border-gray-700">{totalWood.toLocaleString()}</td>
                            <td className="p-2 border border-gray-700">{totalCoal.toLocaleString()}</td>
                            <td className="p-2 border border-gray-700">{totalIron.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
