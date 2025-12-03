import type { BuildingData } from "./types";

export const huntersHut: BuildingData = {
    name: "Hunter's Hut",
    upgrades: [
        { level: 1, prereqs: { "Furnace": 1 }, cost: { wood: 30 }, time: "00:00:02", power: 40 },
        { level: 2, prereqs: { "Furnace": 2 }, cost: { wood: 45 }, time: "00:00:03", power: 76 },
        { level: 3, prereqs: { "Furnace": 3 }, cost: { wood: 200 }, time: "00:00:10", power: 130 },
        { level: 4, prereqs: { "Furnace": 4 }, cost: { wood: 450, coal: 90 }, time: "00:00:35", power: 202 },
        { level: 5, prereqs: { "Furnace": 5 }, cost: { wood: 1900, coal: 380 }, time: "00:01:10", power: 310 },
        { level: 6, prereqs: { "Furnace": 6 }, cost: { wood: 4800, coal: 960, iron: 240 }, time: "00:02:20", power: 472 },
        { level: 7, prereqs: { "Furnace": 7 }, cost: { wood: 17000, coal: 3400, iron: 865 }, time: "00:04:45", power: 706 },
        { level: 8, prereqs: { "Furnace": 8 }, cost: { wood: 31000, coal: 6300, iron: 1500 }, time: "00:07:10", power: 940 },
        { level: 9, prereqs: { "Furnace": 9 }, cost: { wood: 65000, coal: 13000, iron: 3200 }, time: "00:10:30", power: 1174 },
        { level: 10, prereqs: { "Furnace": 10 }, cost: { wood: 110000, coal: 23000, iron: 5700 }, time: "00:14:00", power: 1514 },
        { level: 11, prereqs: { "Furnace": 11 }, cost: { wood: 110000, coal: 110000, iron: 23000, meat: 5900 }, time: "00:18:00", power: 1854 },
        { level: 12, prereqs: { "Furnace": 12 }, cost: { wood: 150000, coal: 150000, iron: 30000, meat: 7500 }, time: "00:21:30", power: 2194 },
        { level: 13, prereqs: { "Furnace": 13 }, cost: { wood: 210000, coal: 210000, iron: 42000, meat: 10000 }, time: "00:26:00", power: 2768 },
        { level: 14, prereqs: { "Furnace": 14 }, cost: { wood: 280000, coal: 280000, iron: 56000, meat: 14000 }, time: "00:33:30", power: 3342 },
        { level: 15, prereqs: { "Furnace": 15 }, cost: { wood: 410000, coal: 410000, iron: 83000, meat: 20000 }, time: "00:43:00", power: 3916 },
        { level: 16, prereqs: { "Furnace": 16 }, cost: { wood: 530000, coal: 530000, iron: 100000, meat: 26000 }, time: "01:13:00", power: 4724 },
        { level: 17, prereqs: { "Furnace": 17 }, cost: { wood: 830000, coal: 830000, iron: 160000, meat: 41000 }, time: "01:27:30", power: 5532 },
        { level: 18, prereqs: { "Furnace": 18 }, cost: { wood: 1100000, coal: 1100000, iron: 220000, meat: 56000 }, time: "01:45:00", power: 6340 },
        { level: 19, prereqs: { "Furnace": 19 }, cost: { wood: 1400000, coal: 1400000, iron: 280000, meat: 70000 }, time: "02:38:00", power: 7488 },
        { level: 20, prereqs: { "Furnace": 20 }, cost: { wood: 1900000, coal: 1900000, iron: 300000, meat: 96000 }, time: "03:17:30", power: 8636 },
        { level: 21, prereqs: { "Furnace": 21 }, cost: { wood: 2400000, coal: 2400000, iron: 490000, meat: 120000 }, time: "04:16:30", power: 9784 },
        { level: 22, prereqs: { "Furnace": 22 }, cost: { wood: 3200000, coal: 3200000, iron: 640000, meat: 160000 }, time: "06:25:00", power: 11506 },
        { level: 23, prereqs: { "Furnace": 23 }, cost: { wood: 4000000, coal: 4000000, iron: 800000, meat: 200000 }, time: "08:59:00", power: 13228 },
        { level: 24, prereqs: { "Furnace": 24 }, cost: { wood: 5400000, coal: 5400000, iron: 1000000, meat: 270000 }, time: "12:34:30", power: 14950 },
        { level: 25, prereqs: { "Furnace": 25 }, cost: { wood: 7300000, coal: 7300000, iron: 1400000, meat: 360000 }, time: "17:36:30", power: 16672 },
        { level: 26, prereqs: { "Furnace": 26 }, cost: { wood: 9400000, coal: 9400000, iron: 1800000, meat: 470000 }, time: "20:15:00", power: 19202 },
        { level: 27, prereqs: { "Furnace": 27 }, cost: { wood: 13000000, coal: 13000000, iron: 2600000, meat: 670000 }, time: "1d 00:18:00", power: 21732 },
        { level: 28, prereqs: { "Furnace": 28 }, cost: { wood: 17000000, coal: 17000000, iron: 3500000, meat: 890000 }, time: "1d 03:57:00", power: 24262 },
        { level: 29, prereqs: { "Furnace": 29 }, cost: { wood: 22000000, coal: 22000000, iron: 4400000, meat: 1100000 }, time: "1d 08:08:00", power: 26792 },
        { level: 30, prereqs: { "Furnace": 30 }, cost: { wood: 27000000, coal: 27000000, iron: 5400000, meat: 1300000 }, time: "1d 14:34:00", power: 30470 }
    ]
};