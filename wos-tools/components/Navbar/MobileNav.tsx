"use client";

import Link from "next/link";
import { NavItem } from "./types";

export default function MobileNav({
    navItems,
    mobileOpen,
    close,
}: {
    navItems: NavItem[];
    mobileOpen: boolean;
    close: () => void;
}) {
    return (
        <div
            className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-sm z-50 transform transition-transform duration-500 ease-in-out ${mobileOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            role="menu"
            aria-label="Mobile navigation"
        >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
                {navItems.map((item, index) => (
                    <Link key={item.label} href={item.href} role="menuitem">
                        <span
                            className={`text-white font-bold text-2xl hover:text-yellow-400 transition-all duration-500 transform ${mobileOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onClick={close}
                        >
                            {item.label}
                        </span>
                    </Link>
                ))}
            </div>

            <button
                className="absolute top-5 right-5 text-white text-4xl hover:text-yellow-400 transition-colors duration-300"
                onClick={close}
                aria-label="Close mobile menu"
            >
                ×
            </button>
        </div>
    );
}
