import type { BuildingData } from "./types";

export const infirmary: BuildingData = {
    name: "Infirmary",
    upgrades: [
        { level: 1, prereqs: { Furnace: 8 }, cost: {}, time: "00:00:02", power: 300 },
        { level: 2, prereqs: { Furnace: 8 }, cost: { wood: 100 }, time: "00:00:09", power: 570 },
        { level: 3, prereqs: { Furnace: 8 }, cost: { wood: 460 }, time: "00:00:40", power: 975 },
        { level: 4, prereqs: { Furnace: 8 }, cost: { wood: 1000, coal: 205 }, time: "00:02:05", power: 1515 },
        { level: 5, prereqs: { Furnace: 8 }, cost: { wood: 4300, coal: 865 }, time: "00:04:10", power: 2325 },
        { level: 6, prereqs: { Furnace: 8 }, cost: { wood: 10000, coal: 2100, iron: 545 }, time: "00:08:20", power: 3540 },
        { level: 7, prereqs: { Furnace: 8 }, cost: { wood: 39000, coal: 7800, iron: 1900 }, time: "00:16:30", power: 5295 },
        { level: 8, prereqs: { Furnace: 8 }, cost: { wood: 72000, coal: 14000, iron: 3600 }, time: "00:25:00", power: 7050 },
        { level: 9, prereqs: { Furnace: 9 }, cost: { wood: 140000, coal: 29000, iron: 7400 }, time: "00:37:30", power: 8805 },
        { level: 10, prereqs: { Furnace: 10 }, cost: { wood: 260000, coal: 52000, iron: 13000 }, time: "00:50:00", power: 11355 },
        { level: 11, prereqs: { Furnace: 11 }, cost: { wood: 320000, coal: 65000, iron: 16000, meat: 0 }, time: "01:03:00", power: 13905 },
        { level: 12, prereqs: { Furnace: 12 }, cost: { wood: 420000, coal: 420000, iron: 54000, meat: 21000 }, time: "01:15:30", power: 16455 },
        { level: 13, prereqs: { Furnace: 13 }, cost: { wood: 590000, coal: 590000, iron: 110000, meat: 29000 }, time: "01:32:00", power: 20760 },
        { level: 14, prereqs: { Furnace: 14 }, cost: { wood: 780000, coal: 780000, iron: 150000, meat: 39000 }, time: "01:57:30", power: 25065 },
        { level: 15, prereqs: { Furnace: 15 }, cost: { wood: 1100000, coal: 1100000, iron: 230000, meat: 58000 }, time: "02:31:00", power: 29370 },
        { level: 16, prereqs: { Furnace: 16 }, cost: { wood: 1400000, coal: 1400000, iron: 290000, meat: 74000 }, time: "04:16:00", power: 35430 },
        { level: 17, prereqs: { Furnace: 17 }, cost: { wood: 2300000, coal: 2300000, iron: 460000, meat: 110000 }, time: "05:07:00", power: 41490 },
        { level: 18, prereqs: { Furnace: 18 }, cost: { wood: 3100000, coal: 3100000, iron: 620000, meat: 150000 }, time: "06:08:30", power: 47550 },
        { level: 19, prereqs: { Furnace: 19 }, cost: { wood: 3900000, coal: 3900000, iron: 780000, meat: 190000 }, time: "09:13:00", power: 56160 },
        { level: 20, prereqs: { Furnace: 20 }, cost: { wood: 5300000, coal: 5300000, iron: 1000000, meat: 260000 }, time: "11:31:00", power: 64770 },
        { level: 21, prereqs: { Furnace: 21 }, cost: { wood: 6800000, coal: 6800000, iron: 1300000, meat: 340000 }, time: "14:58:30", power: 73380 },
        { level: 22, prereqs: { Furnace: 22 }, cost: { wood: 8600000, coal: 8600000, iron: 1700000, meat: 430000 }, time: "18:50:00", power: 81990 },
        { level: 23, prereqs: { Furnace: 23 }, cost: { wood: 10900000, coal: 10900000, iron: 2200000, meat: 550000 }, time: "23:30:30", power: 90600 },
        { level: 24, prereqs: { Furnace: 24 }, cost: { wood: 13600000, coal: 13600000, iron: 2700000, meat: 680000 }, time: "28:55:00", power: 99210 },
        { level: 25, prereqs: { Furnace: 25 }, cost: { wood: 16700000, coal: 16700000, iron: 3400000, meat: 840000 }, time: "34:30:30", power: 107820 },
        { level: 26, prereqs: { Furnace: 26 }, cost: { wood: 20500000, coal: 20500000, iron: 4100000, meat: 1030000 }, time: "40:55:00", power: 116430 },
        { level: 27, prereqs: { Furnace: 27 }, cost: { wood: 25100000, coal: 25100000, iron: 5100000, meat: 1270000 }, time: "47:25:30", power: 125040 },
        { level: 28, prereqs: { Furnace: 28 }, cost: { wood: 30700000, coal: 30700000, iron: 6200000, meat: 1540000 }, time: "54:30:00", power: 133650 },
        { level: 29, prereqs: { Furnace: 29 }, cost: { wood: 37600000, coal: 37600000, iron: 7500000, meat: 1880000 }, time: "62:00:30", power: 142260 },
        { level: 30, prereqs: { Furnace: 30 }, cost: { wood: 46000000, coal: 46000000, iron: 9200000, meat: 2300000 }, time: "70:00:00", power: 150870 }
    ]
};