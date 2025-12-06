import type { CalcResult } from "../data/types";

interface UpgradeRange {
    from: number;
    to: number;
}

interface Props {
    result: CalcResult;
    buildingMap: Record<string, UpgradeRange>;
}

export default function StepsDisplay({ result }: Props) {
    // Build a map of building → level range from steps
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
            <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-lg font-semibold mb-2">Detailed Steps:</h3>
                <ul className="list-disc pl-5">
                    {result.steps.map((step, index) => (
                        <li key={index}>
                            {step.building}: Level {step.level} — Cost:{" "}
                            {Object.entries(step.cost)
                                .map(([res, amt]) => `${res}: ${amt.toLocaleString()}`)
                                .join(", ")}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
