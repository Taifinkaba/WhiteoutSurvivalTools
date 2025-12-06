"use client";

import Link from "next/link";
import { NavItem } from "./types";

export default function DesktopNav({ navItems }: { navItems: NavItem[] }) {
    return (
        <ul className="hidden md:flex flex-1 justify-center space-x-10">
            {navItems.map((item, index) => (
                <li key={item.label} className="flex items-center space-x-2">
                    <Link href={item.href}>
                        <span className="relative text-white font-semibold hover:text-yellow-400 transition-colors duration-300 cursor-pointer group">
                            {item.label}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </Link>
                    {index < navItems.length - 1 && <span className="text-white">|</span>}
                </li>
            ))}
        </ul>
    );
}
