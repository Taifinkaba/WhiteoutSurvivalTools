import LevelSelector from "@/components/Calculator/LevelSelector";
import { allBuildings } from "@/data/allBuildings";

export default function OptionalPrereqSelectors({
    buildingLevels,
    currentLevel,
    onChange,
}: any) {
    return (
        <>
            <h3 className="text-xl font-semibold mb-2">Adjust Prerequisite Levels (optional)</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
                {Object.values(allBuildings).map((b) => (
                    <LevelSelector
                        key={b.name}
                        building={b}
                        label={b.name}
                        value={buildingLevels[b.name] ?? currentLevel}
                        minLevel={0}
                        maxLevel={b.upgrades[b.upgrades.length - 1].level}
                        onChange={(lvl) => onChange(b.name, lvl)}
                    />
                ))}
            </div>
        </>
    );
}
