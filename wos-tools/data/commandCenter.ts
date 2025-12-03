import type { BuildingData } from "./types";

export const commandCenter: BuildingData = {
    name: "Command Center",
    upgrades: [
        { level: 1, prereqs: { Furnace: 10, Embassy: 1 }, cost: { wood: 80 }, time: "00:00:02", power: 280 },
        { level: 2, prereqs: { Furnace: 10, Embassy: 2 }, cost: { wood: 125 }, time: "00:00:08", power: 532 },
        { level: 3, prereqs: { Furnace: 10, Embassy: 3 }, cost: { wood: 565 }, time: "00:00:35", power: 910 },
        { level: 4, prereqs: { Furnace: 10, Embassy: 4 }, cost: { wood: 1200, coal: 250 }, time: "00:01:45", power: 1414 },
        { level: 5, prereqs: { Furnace: 10, Embassy: 5 }, cost: { wood: 5300, coal: 1000 }, time: "00:03:35", power: 2170 },
        { level: 6, prereqs: { Furnace: 10, Embassy: 6 }, cost: { wood: 13000, coal: 2600, iron: 670 }, time: "00:07:10", power: 3304 },
        { level: 7, prereqs: { Furnace: 10, Embassy: 7 }, cost: { wood: 48000, coal: 9600, iron: 2400 }, time: "00:14:00", power: 4942 },
        { level: 8, prereqs: { Furnace: 10, Embassy: 8 }, cost: { wood: 88000, coal: 17000, iron: 4400 }, time: "00:21:00", power: 6580 },
        { level: 9, prereqs: { Furnace: 10, Embassy: 9 }, cost: { wood: 180000, coal: 36000, iron: 9100 }, time: "00:32:00", power: 8218 },
        { level: 10, prereqs: { Furnace: 10, Embassy: 10 }, cost: { wood: 320000, coal: 64000, iron: 16000 }, time: "00:43:00", power: 10598 },
        { level: 11, prereqs: { Furnace: 11, Embassy: 11 }, cost: { wood: 390000, coal: 390000, iron: 79000, meat: 19000 }, time: "00:54:00", power: 12978 },
        { level: 12, prereqs: { Furnace: 12, Embassy: 12 }, cost: { wood: 500000, coal: 500000, iron: 100000, meat: 25000 }, time: "01:04:30", power: 15358 },
        { level: 13, prereqs: { Furnace: 13, Embassy: 13 }, cost: { wood: 710000, coal: 710000, iron: 140000, meat: 35000 }, time: "01:19:00", power: 19376 },
        { level: 14, prereqs: { Furnace: 14, Embassy: 14 }, cost: { wood: 940000, coal: 940000, iron: 180000, meat: 47000 }, time: "01:40:30", power: 23394 },
        { level: 15, prereqs: { Furnace: 15, Embassy: 15 }, cost: { wood: 1300000, coal: 1300000, iron: 270000, meat: 69000 }, time: "02:09:30", power: 27412 },
        { level: 16, prereqs: { Furnace: 16, Embassy: 16 }, cost: { wood: 1700000, coal: 1700000, iron: 350000, meat: 89000 }, time: "03:39:00", power: 33068 },
        { level: 17, prereqs: { Furnace: 17, Embassy: 17 }, cost: { wood: 2700000, coal: 2700000, iron: 550000, meat: 130000 }, time: "04:23:00", power: 38724 },
        { level: 18, prereqs: { Furnace: 18, Embassy: 18 }, cost: { wood: 3700000, coal: 3700000, iron: 750000, meat: 180000 }, time: "05:16:00", power: 44380 },
        { level: 19, prereqs: { Furnace: 19, Embassy: 19 }, cost: { wood: 4700000, coal: 4700000, iron: 940000, meat: 230000 }, time: "07:54:00", power: 52416 },
        { level: 20, prereqs: { Furnace: 20, Embassy: 20 }, cost: { wood: 6400000, coal: 6400000, iron: 1200000, meat: 320000 }, time: "09:52:30", power: 60452 },
        { level: 21, prereqs: { Furnace: 21, Embassy: 21 }, cost: { wood: 8100000, coal: 8100000, iron: 1600000, meat: 400000 }, time: "12:50:00", power: 68488 },
        { level: 22, prereqs: { Furnace: 22, Embassy: 22 }, cost: { wood: 10000000, coal: 10000000, iron: 2100000, meat: 540000 }, time: "19:15:30", power: 80542 },
        { level: 23, prereqs: { Furnace: 23, Embassy: 23 }, cost: { wood: 13000000, coal: 13000000, iron: 2600000, meat: 670000 }, time: "1d 02:57:00", power: 92596 },
        { level: 24, prereqs: { Furnace: 24, Embassy: 24 }, cost: { wood: 18000000, coal: 18000000, iron: 3600000, meat: 900000 }, time: "1d 13:44:00", power: 104650 },
        { level: 25, prereqs: { Furnace: 25, Embassy: 25 }, cost: { wood: 24000000, coal: 24000000, iron: 4900000, meat: 1200000 }, time: "2d 04:50:00", power: 116704 },
        { level: 26, prereqs: { Furnace: 26, Embassy: 26 }, cost: { wood: 31000000, coal: 31000000, iron: 6300000, meat: 1500000 }, time: "2d 12:46:00", power: 134414 },
        { level: 27, prereqs: { Furnace: 27, Embassy: 27 }, cost: { wood: 44000000, coal: 44000000, iron: 8900000, meat: 2200000 }, time: "3d 00:55:00", power: 152124 },
        { level: 28, prereqs: { Furnace: 28, Embassy: 28 }, cost: { wood: 59000000, coal: 59000000, iron: 11000000, meat: 2900000 }, time: "3d 11:51:00", power: 169834 },
        { level: 29, prereqs: { Furnace: 29, Embassy: 29 }, cost: { wood: 73000000, coal: 73000000, iron: 18000000, meat: 4500000 }, time: "4d 00:26:00", power: 187544 },
        { level: 30, prereqs: { Furnace: 30, Embassy: 30 }, cost: { wood: 90000000, coal: 90000000, iron: 18000000, meat: 4500000 }, time: "4d 19:44:00", power: 213290 }
    ]
};