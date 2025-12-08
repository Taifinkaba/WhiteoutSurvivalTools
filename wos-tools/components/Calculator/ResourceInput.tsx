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

        const cleaned = raw.replace(/,/g, "");
        return parseFloat(cleaned) || 0;
    };

    const formatWithCommas = (num: number | undefined) => {
        if (!num || isNaN(num)) return "";
        return num.toLocaleString();
    };

    const handleInput = (res: keyof ResourceCost, input: string) => {
        const numValue = parseShorthand(input);
        onChange(res, numValue);
    };

    return (
        <fieldset className="grid grid-cols-2 gap-4 mb-4 border-none">
            <legend className="sr-only">Owned Resources</legend>
            {["meat", "wood", "coal", "iron"].map((res) => {
                const key = res as keyof ResourceCost;
                const displayValue = formatWithCommas(resources[key]);
                const inputId = `resource-${res}`;

                return (
                    <div key={res}>
                        <label htmlFor={inputId} className="block mb-1 font-medium capitalize">
                            {res}
                        </label>
                        <input
                            id={inputId}
                            type="text"
                            value={displayValue}
                            onChange={(e) => handleInput(key, e.target.value)}
                            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="0"
                            inputMode="decimal"
                        />
                    </div>
                );
            })}
        </fieldset>
    );
}
