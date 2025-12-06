import type { ResourceCost } from "../../data/types";

interface Props {
    resources: ResourceCost;
    onChange: (resource: keyof ResourceCost, value: number) => void;
}

export default function ResourceInput({ resources, onChange }: Props) {
    // Convert shorthand (1k, 2.5m, etc.) → number
    const parseShorthand = (val: string) => {
        const raw = val.toLowerCase().trim();

        if (raw.endsWith("b")) return parseFloat(raw) * 1_000_000_000;
        if (raw.endsWith("m")) return parseFloat(raw) * 1_000_000;
        if (raw.endsWith("k")) return parseFloat(raw) * 1_000;

        // Remove commas before parsing
        const cleaned = raw.replace(/,/g, "");
        return parseFloat(cleaned) || 0;
    };

    // Format number → "1,234,567"
    const formatWithCommas = (num: number | undefined) => {
        if (!num || isNaN(num)) return "";
        return num.toLocaleString();
    };

    const handleInput = (res: keyof ResourceCost, input: string) => {
        const numValue = parseShorthand(input);
        onChange(res, numValue);
    };

    return (
        <div className="grid grid-cols-2 gap-4 mb-4">
            {["meat", "wood", "coal", "iron"].map((res) => {
                const key = res as keyof ResourceCost;
                const displayValue = formatWithCommas(resources[key]);

                return (
                    <div key={res}>
                        <label className="block mb-1 capitalize">{res}</label>
                        <input
                            type="text"
                            value={displayValue}
                            onChange={(e) => handleInput(key, e.target.value)}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                            placeholder="0"
                        />
                    </div>
                );
            })}
        </div>
    );
}
