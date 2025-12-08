import type { BuildingData } from "../../data/types";

interface Props {
    building: BuildingData;
    label: string;
    value: number;
    minLevel?: number;
    maxLevel?: number;
    onChange: (lvl: number) => void;
}

export default function LevelSelector({
    building,
    label,
    value,
    minLevel = 1,
    maxLevel,
    onChange,
}: Props) {
    const selectId = `level-selector-${building.name.replace(/\s+/g, "-").toLowerCase()}`;

    return (
        <div>
            {/* Associate label with select using htmlFor */}
            <label htmlFor={selectId} className="block mb-1 font-medium text-white">
                {label}
            </label>
            <select
                id={selectId}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                aria-label={`${label} level selector`}
            >
                {building.upgrades
                    .filter((u) => u.level >= minLevel && (!maxLevel || u.level <= maxLevel))
                    .map((u) => (
                        <option key={u.level} value={u.level}>
                            Level {u.level}
                        </option>
                    ))}
            </select>
        </div>
    );
}
