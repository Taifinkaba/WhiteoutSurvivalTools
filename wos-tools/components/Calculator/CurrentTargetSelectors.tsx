import LevelSelector from "@/components/Calculator/LevelSelector";
import type { BuildingData } from "@/data/types";

interface Props {
    building: BuildingData;
    maxLevel: number;
    currentLevel: number;
    targetLevel: number;
    setCurrentLevel: (lvl: number) => void;
    setTargetLevel: (lvl: number) => void;
}

export default function CurrentTargetSelectors({
    building,
    maxLevel,
    currentLevel,
    targetLevel,
    setCurrentLevel,
    setTargetLevel,
}: Props) {
    return (
        <div className="grid grid-cols-2 gap-4 mb-4">
            <LevelSelector
                building={building}
                label="Current Level"
                value={currentLevel}
                minLevel={1}
                maxLevel={maxLevel}
                onChange={(lvl) => {
                    setCurrentLevel(lvl);
                    // Ensure targetLevel is always >= currentLevel
                    if (lvl > targetLevel) setTargetLevel(lvl);
                }}
            />

            <LevelSelector
                building={building}
                label="Target Level"
                value={targetLevel}
                minLevel={currentLevel}
                maxLevel={maxLevel}
                onChange={setTargetLevel}
            />
        </div>
    );
}
