export default function ResultsDisplay({ totals }: { totals: Record<string, number> }) {
    return (
        <div className="bg-gray-700 p-4 rounded mt-4">
            <h3 className="text-lg font-semibold mb-2">Resources Needed:</h3>
            <ul className="list-disc pl-5">
                {Object.entries(totals).map(([res, amt]) => (
                    <li key={res} className="capitalize">
                        {res}: {amt.toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}
