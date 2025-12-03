import type { BuildingData } from "./types";

export const sawmill: BuildingData = {
    name: "Sawmill",
    upgrades: [
        { level: 1, prereqs: { Furnace: 1 }, cost: { wood: 30 }, time: "00:00:02", power: 40 },
        { level: 2, prereqs: { Furnace: 2 }, cost: { wood: 45 }, time: "00:00:03", power: 76 },
        { level: 3, prereqs: { Furnace: 3 }, cost: { wood: 200 }, time: "00:00:10", power: 130 },
        { level: 4, prereqs: { Furnace: 4 }, cost: { wood: 450, coal: 90 }, time: "00:00:35", power: 202 },
        { level: 5, prereqs: { Furnace: 5 }, cost: { wood: 1900, coal: 380 }, time: "00:01:10", power: 310 },
        { level: 6, prereqs: { Furnace: 6 }, cost: { wood: 4800, coal: 960, iron: 240 }, time: "00:02:20", power: 472 },
        { level: 7, prereqs: { Furnace: 7 }, cost: { wood: 17000, coal: 3400, iron: 865 }, time: "00:04:45", power: 706 },
        { level: 8, prereqs: { Furnace: 8 }, cost: { wood: 120000, coal: 25000, iron: 6300 }, time: "02:30:00", power: 47000 },
        { level: 9, prereqs: { Furnace: 9 }, cost: { wood: 260000, coal: 52000, iron: 13000 }, time: "04:30:00", power: 58700 },
        { level: 10, prereqs: { Furnace: 10 }, cost: { wood: 460000, coal: 92000, iron: 23000 }, time: "06:00:00", power: 75700 },
        { level: 11, prereqs: { Furnace: 11 }, cost: { wood: 1300000, coal: 65000, iron: 260000, meat: 1300000 }, time: "07:30:00", power: 92700 },
        { level: 12, prereqs: { Furnace: 12 }, cost: { wood: 1600000, coal: 330000, iron: 84000, meat: 1600000 }, time: "09:00:00", power: 109700 },
        { level: 13, prereqs: { Furnace: 13 }, cost: { wood: 2300000, coal: 470000, iron: 110000, meat: 2300000 }, time: "11:00:00", power: 138400 },
        { level: 14, prereqs: { Furnace: 14 }, cost: { wood: 3100000, coal: 630000, iron: 150000, meat: 3100000 }, time: "14:00:00", power: 167100 },
        { level: 15, prereqs: { Furnace: 15 }, cost: { wood: 4600000, coal: 930000, iron: 230000, meat: 4600000 }, time: "18:00:00", power: 195800 },
        { level: 16, prereqs: { Furnace: 16 }, cost: { wood: 5900000, coal: 1100000, iron: 290000, meat: 5900000 }, time: "1d 06:28:00", power: 236200 },
        { level: 17, prereqs: { Furnace: 17 }, cost: { wood: 9300000, coal: 1800000, iron: 460000, meat: 9300000 }, time: "1d 12:34:00", power: 276600 },
        { level: 18, prereqs: { Furnace: 18 }, cost: { wood: 12000000, coal: 2500000, iron: 620000, meat: 12000000 }, time: "1d 19:53:00", power: 317000 },
        { level: 19, prereqs: { Furnace: 19 }, cost: { wood: 15000000, coal: 3100000, iron: 780000, meat: 15000000 }, time: "2d 17:50:00", power: 374400 },
        { level: 20, prereqs: { Furnace: 20 }, cost: { wood: 21000000, coal: 4700000, iron: 1100000, meat: 21000000 }, time: "2d 23:21:00", power: 442200 },
        { level: 21, prereqs: { Furnace: 21 }, cost: { wood: 27000000, coal: 6100000, iron: 1400000, meat: 27000000 }, time: "3d 07:30:00", power: 523400 },
        { level: 22, prereqs: { Furnace: 22 }, cost: { wood: 35000000, coal: 7800000, iron: 1800000, meat: 35000000 }, time: "3d 16:45:00", power: 616500 },
        { level: 23, prereqs: { Furnace: 23 }, cost: { wood: 43000000, coal: 9700000, iron: 2200000, meat: 43000000 }, time: "4d 02:00:00", power: 719700 },
        { level: 24, prereqs: { Furnace: 24 }, cost: { wood: 53000000, coal: 12000000, iron: 2600000, meat: 53000000 }, time: "4d 13:12:00", power: 832800 },
        { level: 25, prereqs: { Furnace: 25 }, cost: { wood: 65000000, coal: 15000000, iron: 3200000, meat: 65000000 }, time: "5d 04:00:00", power: 956500 },
        { level: 26, prereqs: { Furnace: 26 }, cost: { wood: 79000000, coal: 18000000, iron: 3800000, meat: 79000000 }, time: "5d 18:24:00", power: 1104300 },
        { level: 27, prereqs: { Furnace: 27 }, cost: { wood: 95000000, coal: 22000000, iron: 4600000, meat: 95000000 }, time: "6d 09:50:00", power: 1264600 },
        { level: 28, prereqs: { Furnace: 28 }, cost: { wood: 113000000, coal: 26000000, iron: 5400000, meat: 113000000 }, time: "7d 01:00:00", power: 1440000 },
        { level: 29, prereqs: { Furnace: 29 }, cost: { wood: 135000000, coal: 31000000, iron: 6500000, meat: 135000000 }, time: "7d 18:00:00", power: 1627500 },
        { level: 30, prereqs: { Furnace: 30 }, cost: { wood: 300000000, coal: 60000000, iron: 15000000, meat: 300000000 }, time: "40d 04:27:00", power: 2000000 }
    ]
};