import LevelSelector from "@/components/Calculator/LevelSelector";
import { allBuildings } from "@/data/allBuildings";

interface OptionalPrereqSelectorsProps {
    buildingLevels: Record<string, number>;
    currentLevel: number;
    onChange: (buildingName: string, level: number) => void;
}

export default function OptionalPrereqSelectors({
    buildingLevels,
    currentLevel,
    onChange,
}: OptionalPrereqSelectorsProps) {
    return (
        <section aria-labelledby="optional-prereqs">
            <h3
                id="optional-prereqs"
                className="text-xl font-semibold mb-2"
            >
                Adjust Prerequisite Levels (optional)
            </h3>
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
        </section>
    );
}
