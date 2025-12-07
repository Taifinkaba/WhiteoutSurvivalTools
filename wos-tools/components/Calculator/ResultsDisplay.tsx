export default function ResultsDisplay({ totals }: { totals: Record<string, number> }) {
    const resourceOrder = ["meat", "wood", "coal", "iron"];

    return (
        <div className="bg-gray-700 p-4 rounded mt-4">
            <h3 className="text-lg font-semibold mb-2">Resources Needed:</h3>
            <ul className="list-disc pl-5">
                {resourceOrder.map((res) => (
                    <li key={res} className="capitalize">
                        {res}: {(totals[res] || 0).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}
