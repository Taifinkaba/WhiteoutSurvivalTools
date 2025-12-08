import type { CalcResult } from "../../data/types";

interface Props {
    result: CalcResult;
}

export default function UpgradeResults({ result }: Props) {
    return (
        <section aria-labelledby="upgrade-results-heading" className="space-y-6">
            <h2 id="upgrade-results-heading" className="sr-only">
                Upgrade Calculation Results
            </h2>

            {/* Total Resources */}
            <section aria-labelledby="total-resources-heading" className="bg-gray-700 p-4 rounded">
                <h3 id="total-resources-heading" className="text-lg font-semibold mb-2">
                    Total Resources Needed
                </h3>
                <ul className="list-disc pl-5">
                    {Object.entries(result.totals).map(([res, amt]) => (
                        <li key={res} className="capitalize">
                            <span className="font-semibold">{res}</span>: {amt.toLocaleString()}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Upgrade Steps */}
            <section aria-labelledby="upgrade-steps-heading" className="bg-gray-700 p-4 rounded">
                <h3 id="upgrade-steps-heading" className="text-lg font-semibold mb-2">
                    Upgrade Steps
                </h3>
                <ol className="list-decimal pl-5">
                    {result.steps.map((step, idx) => (
                        <li key={idx} className="mb-1">
                            <span className="font-semibold">{step.building}</span> → Level {step.level} |{" "}
                            Power: {step.power.toLocaleString()} | Cost:{" "}
                            {Object.entries(step.cost)
                                .map(([r, v]) => `${r}: ${v.toLocaleString()}`)
                                .join(", ")}{" "}
                            | Time: {step.time || "-"}
                        </li>
                    ))}
                </ol>
            </section>
        </section>
    );
}
