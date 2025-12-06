"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Buildings", href: "/buildings" },
        { label: "Upgrades", href: "/upgrades" },
        { label: "About", href: "/about" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 via-gray-900 to-purple-900 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/WOSToolsLogo3.png"
                            alt="WOS Tools Logo"
                            width={60}
                            height={60}
                        />
                        <span className="ml-2 text-white font-bold text-2xl tracking-wide">WOS Tools</span>
                    </Link>

                    {/* Centered Desktop Links */}
                    <div className="hidden md:flex flex-1 justify-center space-x-10">
                        {navItems.map((item, index) => (
                            <div key={item.label} className="flex items-center space-x-2">
                                <Link href={item.href}>
                                    <span className="relative text-white font-semibold hover:text-yellow-400 transition-colors duration-300 cursor-pointer group">
                                        {item.label}
                                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </Link>
                                {index < navItems.length - 1 && <span className="text-white">|</span>}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button
                            className="text-white text-3xl hover:text-yellow-400 transition-colors duration-300"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-gray-800 py-4">
                    <div className="flex justify-center space-x-4 text-center">
                        {navItems.map((item, index) => (
                            <div key={item.label} className="flex items-center space-x-2">
                                <Link href={item.href}>
                                    <span
                                        className="text-white font-medium hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item.label}
                                    </span>
                                </Link>
                                {index < navItems.length - 1 && <span className="text-white">|</span>}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
