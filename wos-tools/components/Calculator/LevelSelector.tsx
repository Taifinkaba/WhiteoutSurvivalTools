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
    return (
        <div>
            <label className="block mb-1">{label}</label>
            <select
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full p-2 rounded bg-gray-700 text-white"
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