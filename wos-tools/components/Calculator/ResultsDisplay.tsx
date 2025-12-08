export default function ResultsDisplay({ totals }: { totals: Record<string, number> }) {
    const resourceOrder = ["meat", "wood", "coal", "iron"];

    return (
        <section
            aria-labelledby="resources-needed-heading"
            className="bg-gray-700 p-4 rounded mt-4"
        >
            <h3
                id="resources-needed-heading"
                className="text-lg font-semibold mb-2"
            >
                Resources Needed
            </h3>

            <ul className="list-disc pl-5">
                {resourceOrder.map((res) => (
                    <li key={res} className="capitalize">
                        <span className="font-semibold">{res}</span>:{" "}
                        {(totals[res] || 0).toLocaleString()}
                    </li>
                ))}
            </ul>
        </section>
    );
}
