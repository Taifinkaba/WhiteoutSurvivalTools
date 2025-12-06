import Link from "next/link";
import { NavItem } from "./DesktopNav";

interface MobileNavProps {
    navItems: NavItem[];
    close: () => void;
}

export default function MobileNav({ navItems, close }: MobileNavProps) {
    return (
        <div
            className="fixed md:top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center space-y-8 md:flex lg:hidden"
            role="menu"
            aria-label="Mobile navigation"
        >
            {navItems.map((item, index) => (
                <Link key={item.label} href={item.href} role="menuitem">
                    <span
                        className="text-white font-bold text-2xl hover:text-yellow-400 transition-all duration-500 transform opacity-100 scale-100"
                        style={{ transitionDelay: `${index * 100}ms` }}
                        onClick={close}
                    >
                        {item.label}
                    </span>
                </Link>
            ))}

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
