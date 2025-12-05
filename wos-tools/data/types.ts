export type ResourceCost = {
    wood?: number;
    coal?: number;
    iron?: number;
    meat?: number;
};

export type Upgrade = {
    level: number;
    prereqs: Record<string, number> | null;
    cost: ResourceCost;
    time: string | null;
    power: number;
};

export type BuildingData = {
    name: string;
    upgrades: Upgrade[];
};

export type UpgradeStep = {
    building: string;
    level: number;
    cost: ResourceCost;
    time: string | null;
    power: number;
};

export type CalcResult = {
    steps: UpgradeStep[];
    totals: ResourceCost;
};