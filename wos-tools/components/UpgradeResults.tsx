import type { CalcResult } from "../data/types";

interface Props {
    result: CalcResult;
}

export default function UpgradeResults({ result }: Props) {
    return (
        <div className="space-y-4">
            {/* Total Resources */}
            <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-lg font-semibold mb-2">Total Resources Needed:</h3>
                <ul className="list-disc pl-5">
                    {Object.entries(result.totals).map(([res, amt]) => (
                        <li key={res} className="capitalize">
                            {res}: {amt.toLocaleString()}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Upgrade Steps */}
            <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-lg font-semibold mb-2">Upgrade Steps:</h3>
                <ul className="list-disc pl-5">
                    {result.steps.map((step, idx) => (
                        <li key={idx}>
                            {step.building} → Level {step.level} |
                            Power: {step.power.toLocaleString()} |
                            Cost: {Object.entries(step.cost)
                                .map(([r, v]) => `${r}: ${v.toLocaleString()}`)
                                .join(", ")} |
                            Time: {step.time || "-"}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
