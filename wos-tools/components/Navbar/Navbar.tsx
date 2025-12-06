"use client";

import { useState } from "react";
import DesktopNav, { NavItem } from "./DesktopNav";
import MobileNav from "./MobileNav";
import HamburgerButton from "./HamburgerButton";
import Logo from "./Logo";
import SkipToContent from "./SkipToContent";

const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Buildings", href: "/buildings" },
    { label: "Upgrades", href: "/upgrades" },
    { label: "About", href: "/about" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50" aria-label="Main navigation">
            <SkipToContent />

            <div className="bg-gradient-to-r from-blue-900 via-gray-900 to-purple-900 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Logo />
                        <DesktopNav navItems={navItems} />
                        <HamburgerButton
                            mobileOpen={mobileOpen}
                            toggle={() => setMobileOpen(!mobileOpen)}
                        />
                    </div>
                </div>
            </div>

            {mobileOpen && <MobileNav navItems={navItems} close={() => setMobileOpen(false)} />}
        </nav>
    );
}

