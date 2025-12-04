import type { CalcResult } from "../data/types";

interface Props {
    result: CalcResult;
}

export default function UpgradeResults({ result }: Props) {
    return (
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
    );
}
