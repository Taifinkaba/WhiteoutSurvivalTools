import React from "react";
import type { CalcResult } from "../../data/types";

interface UpgradeRange {
    from: number;
    to: number;
}

interface Props {
    result: CalcResult;
    buildingMap?: Record<string, UpgradeRange>;
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

    // Group steps by Furnace and prerequisites
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

    // Calculate totals for all resource types dynamically
    const totals: Record<string, number> = {};
    result.steps.forEach((step) => {
        Object.entries(step.cost).forEach(([res, amt]) => {
            totals[res] = (totals[res] || 0) + amt;
        });
    });

    return (
        <section aria-labelledby="upgrade-results-heading" className="space-y-6 mt-4">
            <h2 id="upgrade-results-heading" className="sr-only">
                Upgrade Calculation Results
            </h2>

            {/* Total Resources */}
            <section aria-labelledby="total-resources-heading" className="bg-gray-700 p-4 rounded">
                <h3 id="total-resources-heading" className="text-lg font-semibold mb-2">
                    Resources Needed
                </h3>
                <ul className="list-disc pl-5">
                    {Object.entries(totals).map(([res, amount]) => (
                        <li key={res} className="capitalize">
                            <span className="font-semibold">{res}</span>: {amount.toLocaleString()}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Buildings Upgrade Range */}
            <section aria-labelledby="building-range-heading" className="bg-gray-700 p-4 rounded">
                <h3 id="building-range-heading" className="text-lg font-semibold mb-2">
                    Buildings to Upgrade
                </h3>
                <ul className="list-disc pl-5">
                    {Object.entries(buildingMap).map(([name, { from, to }]) => (
                        <li key={name}>
                            <span className="font-semibold">{name}</span>: Level {from} → Level {to}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Detailed Steps Table */}
            <section aria-labelledby="detailed-steps-heading" className="bg-gray-700 p-4 rounded overflow-x-auto">
                <h3 id="detailed-steps-heading" className="text-lg font-semibold mb-4">
                    Detailed Steps
                </h3>
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

                        {/* Totals Row */}
                        <tr className="bg-gray-700 text-yellow-200 font-bold">
                            <td className="p-2 border border-gray-700">TOTAL</td>
                            <td className="p-2 border border-gray-700">—</td>
                            <td className="p-2 border border-gray-700">{totals.meat?.toLocaleString() || 0}</td>
                            <td className="p-2 border border-gray-700">{totals.wood?.toLocaleString() || 0}</td>
                            <td className="p-2 border border-gray-700">{totals.coal?.toLocaleString() || 0}</td>
                            <td className="p-2 border border-gray-700">{totals.iron?.toLocaleString() || 0}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </section>
    );
}
