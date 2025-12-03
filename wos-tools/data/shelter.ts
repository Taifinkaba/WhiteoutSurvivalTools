import type { BuildingData } from "./types";

export const shelter: BuildingData = {
    name: "Shelter",
    upgrades: [
        { level: 1, prereqs: { "Furnace": 1 }, cost: { wood: 20 }, time: "00:00:02", power: 100 },
        { level: 2, prereqs: { "Furnace": 2 }, cost: { wood: 35 }, time: "00:00:06", power: 114 },
        { level: 3, prereqs: { "Furnace": 3 }, cost: { wood: 160 }, time: "00:00:30", power: 195 },
        { level: 4, prereqs: { "Furnace": 4 }, cost: { wood: 360, coal: 70 }, time: "00:01:30", power: 303 },
        { level: 5, prereqs: { "Furnace": 5 }, cost: { wood: 1500 }, time: "00:03:00", power: 465 },
        { level: 6, prereqs: { "Furnace": 6 }, cost: { wood: 3800, coal: 190 }, time: "00:06:00", power: 708 },
        { level: 7, prereqs: { "Furnace": 7 }, cost: { wood: 13000, coal: 2700, iron: 690 }, time: "00:12:00", power: 1059 },
        { level: 8, prereqs: { "Furnace": 8 }, cost: { wood: 25000, coal: 5000, iron: 1200 }, time: "00:18:00", power: 1410 },
        { level: 9, prereqs: { "Furnace": 9 }, cost: { wood: 52000, coal: 10000, iron: 2600 }, time: "00:27:00", power: 1761 },
        { level: 10, prereqs: { "Furnace": 10 }, cost: { wood: 92000, coal: 18000, iron: 4600 }, time: "00:36:00", power: 2271 }
    ]
};