import type { BuildingData } from "./types";

export const researchCenter: BuildingData = {
    name: "Research Center",
    upgrades: [
        { level: 1, prereqs: { Furnace: 9 }, cost: { wood: 105 }, time: "00:00:02", power: 440 },
        { level: 2, prereqs: { Furnace: 9 }, cost: { wood: 160 }, time: "00:00:09", power: 836 },
        { level: 3, prereqs: { Furnace: 9 }, cost: { wood: 725 }, time: "00:00:45", power: 1430 },
        { level: 4, prereqs: { Furnace: 9 }, cost: { wood: 1600, coal: 320 }, time: "00:02:15", power: 2222 },
        { level: 5, prereqs: { Furnace: 9 }, cost: { wood: 6800, coal: 1300 }, time: "00:04:30", power: 3410 },
        { level: 6, prereqs: { Furnace: 9 }, cost: { wood: 17000, coal: 3400, iron: 860 }, time: "00:09:00", power: 5192 },
        { level: 7, prereqs: { Furnace: 9 }, cost: { wood: 62000, coal: 12000, iron: 3100 }, time: "00:18:00", power: 7766 },
        { level: 8, prereqs: { Furnace: 9 }, cost: { wood: 110000, coal: 22000, iron: 5600 }, time: "00:27:00", power: 10340 },
        { level: 9, prereqs: { Furnace: 9 }, cost: { wood: 230000, coal: 47000, iron: 11000 }, time: "00:40:30", power: 12914 },
        { level: 10, prereqs: { Furnace: 10 }, cost: { wood: 410000, coal: 82000, iron: 20000 }, time: "00:54:00", power: 16654 },
        { level: 11, prereqs: { Furnace: 11 }, cost: { wood: 520000, coal: 520000, iron: 100000, meat: 26000 }, time: "01:07:30", power: 20394 },
        { level: 12, prereqs: { Furnace: 12 }, cost: { wood: 670000, coal: 670000, iron: 130000, meat: 33000 }, time: "01:21:00", power: 24134 },
        { level: 13, prereqs: { Furnace: 13 }, cost: { wood: 950000, coal: 950000, iron: 190000, meat: 47000 }, time: "01:39:00", power: 30448 },
        { level: 14, prereqs: { Furnace: 14 }, cost: { wood: 1200000, coal: 1200000, iron: 250000, meat: 63000 }, time: "02:06:00", power: 36762 },
        { level: 15, prereqs: { Furnace: 15 }, cost: { wood: 1800000, coal: 1800000, iron: 370000, meat: 93000 }, time: "02:42:00", power: 43076 },
        { level: 16, prereqs: { Furnace: 16 }, cost: { wood: 2300000, coal: 2300000, iron: 470000, meat: 110000 }, time: "04:34:00", power: 51964 },
        { level: 17, prereqs: { Furnace: 17 }, cost: { wood: 3700000, coal: 3700000, iron: 740000, meat: 180000 }, time: "05:29:00", power: 60852 },
        { level: 18, prereqs: { Furnace: 18 }, cost: { wood: 5000000, coal: 5000000, iron: 1000000, meat: 250000 }, time: "06:35:00", power: 69740 },
        { level: 19, prereqs: { Furnace: 19 }, cost: { wood: 6200000, coal: 6200000, iron: 1200000, meat: 310000 }, time: "09:52:30", power: 82368 },
        { level: 20, prereqs: { Furnace: 20 }, cost: { wood: 8600000, coal: 8600000, iron: 1700000, meat: 430000 }, time: "12:20:30", power: 94996 },
        { level: 21, prereqs: { Furnace: 21 }, cost: { wood: 10000000, coal: 10000000, iron: 2100000, meat: 540000 }, time: "16:02:30", power: 107624 },
        { level: 22, prereqs: { Furnace: 22 }, cost: { wood: 14000000, coal: 14000000, iron: 2800000, meat: 720000 }, time: "1d 00:04:00", power: 126566 },
        { level: 23, prereqs: { Furnace: 23 }, cost: { wood: 17000000, coal: 17000000, iron: 3500000, meat: 890000 }, time: "1d 09:42:00", power: 145508 },
        { level: 24, prereqs: { Furnace: 24 }, cost: { wood: 24000000, coal: 24000000, iron: 4800000, meat: 1200000 }, time: "1d 23:11:00", power: 164450 },
        { level: 25, prereqs: { Furnace: 25 }, cost: { wood: 32000000, coal: 32000000, iron: 6500000, meat: 1600000 }, time: "2d 18:03:00", power: 183392 },
        { level: 26, prereqs: { Furnace: 26 }, cost: { wood: 42000000, coal: 42000000, iron: 8400000, meat: 2100000 }, time: "3d 03:57:00", power: 211222 },
        { level: 27, prereqs: { Furnace: 27 }, cost: { wood: 59000000, coal: 59000000, iron: 11000000, meat: 2900000 }, time: "3d 19:09:00", power: 239052 },
        { level: 28, prereqs: { Furnace: 28 }, cost: { wood: 79000000, coal: 79000000, iron: 15000000, meat: 3900000 }, time: "4d 08:49:00", power: 266882 },
        { level: 29, prereqs: { Furnace: 29 }, cost: { wood: 98000000, coal: 98000000, iron: 19000000, meat: 4900000 }, time: "5d 00:33:00", power: 294712 },
        { level: 30, prereqs: { Furnace: 30 }, cost: { wood: 120000000, coal: 120000000, iron: 24000000, meat: 6000000 }, time: "6d 00:40:00", power: 335170 }
    ]
};