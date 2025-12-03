import type { BuildingData } from "./types";

export const infantryCamp: BuildingData = {
    name: "Infantry Camp",
    upgrades: [
        { level: 1, prereqs: { Furnace: 7 }, cost: {}, time: "00:00:02", power: 400 },
        { level: 2, prereqs: { Furnace: 7 }, cost: { wood: 140 }, time: "00:00:09", power: 760 },
        { level: 3, prereqs: { Furnace: 7 }, cost: { wood: 645 }, time: "00:00:45", power: 1300 },
        { level: 4, prereqs: { Furnace: 7 }, cost: { wood: 1400, coal: 285 }, time: "00:02:15", power: 2020 },
        { level: 5, prereqs: { Furnace: 7 }, cost: { wood: 6000, coal: 1200 }, time: "00:04:30", power: 3100 },
        { level: 6, prereqs: { Furnace: 7 }, cost: { wood: 15000, coal: 3000, iron: 765 }, time: "00:09:00", power: 4720 },
        { level: 7, prereqs: { Furnace: 7 }, cost: { wood: 55000, coal: 11000, iron: 2700 }, time: "00:18:00", power: 7060 },
        { level: 8, prereqs: { Furnace: 8 }, cost: { wood: 100000, coal: 20000, iron: 5000 }, time: "00:27:00", power: 9400 },
        { level: 9, prereqs: { Furnace: 9 }, cost: { wood: 200000, coal: 41000, iron: 10000 }, time: "00:40:30", power: 11740 },
        { level: 10, prereqs: { Furnace: 10 }, cost: { wood: 360000, coal: 73000, iron: 18000 }, time: "00:54:00", power: 15140 },
        { level: 11, prereqs: { Furnace: 11 }, cost: { wood: 460000, coal: 460000, iron: 92000, meat: 23000 }, time: "01:07:30", power: 18540 },
        { level: 12, prereqs: { Furnace: 12 }, cost: { wood: 580000, coal: 580000, iron: 110000, meat: 29000 }, time: "01:21:00", power: 21940 },
        { level: 13, prereqs: { Furnace: 13 }, cost: { wood: 830000, coal: 830000, iron: 160000, meat: 41000 }, time: "01:39:00", power: 27680 },
        { level: 14, prereqs: { Furnace: 14 }, cost: { wood: 1100000, coal: 1100000, iron: 220000, meat: 55000 }, time: "02:06:00", power: 33420 },
        { level: 15, prereqs: { Furnace: 15 }, cost: { wood: 1600000, coal: 1600000, iron: 320000, meat: 81000 }, time: "02:42:00", power: 39160 },
        { level: 16, prereqs: { Furnace: 16 }, cost: { wood: 2000000, coal: 2000000, iron: 410000, meat: 100000 }, time: "04:34:00", power: 47240 },
        { level: 17, prereqs: { Furnace: 17 }, cost: { wood: 3200000, coal: 3200000, iron: 650000, meat: 160000 }, time: "05:29:00", power: 55320 },
        { level: 18, prereqs: { Furnace: 18 }, cost: { wood: 4300000, coal: 4300000, iron: 870000, meat: 210000 }, time: "06:35:00", power: 63400 },
        { level: 19, prereqs: { Furnace: 19 }, cost: { wood: 5400000, coal: 5400000, iron: 1000000, meat: 270000 }, time: "09:52:30", power: 74880 },
        { level: 20, prereqs: { Furnace: 20 }, cost: { wood: 7500000, coal: 7500000, iron: 1500000, meat: 370000 }, time: "12:20:30", power: 86360 },
        { level: 21, prereqs: { Furnace: 21 }, cost: { wood: 9500000, coal: 9500000, iron: 1900000, meat: 470000 }, time: "14:35:00", power: 97840 },
        { level: 22, prereqs: { Furnace: 22 }, cost: { wood: 12500000, coal: 12500000, iron: 2500000, meat: 620000 }, time: "17:10:00", power: 115060 },
        { level: 23, prereqs: { Furnace: 23 }, cost: { wood: 16000000, coal: 16000000, iron: 3200000, meat: 800000 }, time: "20:45:00", power: 132280 },
        { level: 24, prereqs: { Furnace: 24 }, cost: { wood: 21000000, coal: 21000000, iron: 4200000, meat: 1080000 }, time: "24:30:00", power: 149500 },
        { level: 25, prereqs: { Furnace: 25 }, cost: { wood: 29000000, coal: 29000000, iron: 5800000, meat: 1440000 }, time: "28:45:00", power: 166720 },
        { level: 26, prereqs: { Furnace: 26 }, cost: { wood: 37000000, coal: 37000000, iron: 7400000, meat: 1880000 }, time: "33:10:00", power: 192020 },
        { level: 27, prereqs: { Furnace: 27 }, cost: { wood: 52000000, coal: 52000000, iron: 13000000, meat: 2680000 }, time: "38:15:00", power: 217320 },
        { level: 28, prereqs: { Furnace: 28 }, cost: { wood: 68000000, coal: 68000000, iron: 17000000, meat: 3560000 }, time: "43:45:00", power: 242620 },
        { level: 29, prereqs: { Furnace: 29 }, cost: { wood: 88000000, coal: 88000000, iron: 22000000, meat: 4400000 }, time: "49:15:00", power: 267920 },
        { level: 30, prereqs: { Furnace: 30 }, cost: { wood: 108000000, coal: 108000000, iron: 27000000, meat: 5300000 }, time: "55:00:00", power: 304700 }
    ]
};