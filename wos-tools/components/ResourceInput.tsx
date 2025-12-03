import type { ResourceCost } from "../data/types";

interface Props {
    resources: ResourceCost;
    onChange: (resource: keyof ResourceCost, value: string) => void;
}

const resourceKeys: (keyof ResourceCost)[] = ["wood", "coal", "iron", "meat"];

export default function ResourceInput({ resources, onChange }: Props) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {resourceKeys.map((res) => (
                <div key={res}>
                    <label className="block mb-1 capitalize">{res}</label>
                    <input
                        type="number"
                        min={0}
                        value={resources[res] || 0}
                        onChange={(e) => onChange(res, e.target.value)}
                        className="w-full p-2 rounded bg-gray-700 text-white"
                    />
                </div>
            ))}
        </div>
    );
}