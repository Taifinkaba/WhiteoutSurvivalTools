import { useState, useEffect } from "react";
import type { BuildingData } from "@/data/types";
import { allBuildings } from "@/data/allBuildings";

export function useUpgradeLevels(building: BuildingData) {
    const maxLevel = building.upgrades[building.upgrades.length - 1].level;

    const [currentLevel, setCurrentLevel] = useState(1);
    const [targetLevel, setTargetLevel] = useState(1);
    const [buildingLevels, setBuildingLevels] = useState<Record<string, number>>({});

    // Prefill optional buildings to current level
    useEffect(() => {
        const updated: Record<string, number> = {};
        Object.values(allBuildings).forEach((b) => {
            updated[b.name] = Math.max(buildingLevels[b.name] ?? 0, currentLevel);
        });
        setBuildingLevels(updated);
    }, [currentLevel]);

    const handleLevelChange = (name: string, lvl: number) =>
        setBuildingLevels((prev) => ({ ...prev, [name]: lvl }));

    return {
        maxLevel,
        currentLevel,
        targetLevel,
        buildingLevels,
        setCurrentLevel,
        setTargetLevel,
        handleLevelChange,
    };
}
