import Link from "next/link";

export interface NavItem {
    label: string;
    href: string;
}

interface DesktopNavProps {
    navItems: NavItem[];
    currentIndex?: number;
}

export default function DesktopNav({ navItems, currentIndex = 0 }: DesktopNavProps) {
    return (
        <ul className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-8">
            {navItems.map((item, index) => (
                <li key={item.label} className="flex items-center space-x-2">
                    <Link href={item.href}>
                        <span
                            className="relative text-white font-semibold hover:text-yellow-400 transition-colors duration-300 cursor-pointer group"
                            aria-current={index === currentIndex ? "page" : undefined}
                        >
                            {item.label}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </Link>
                    {index < navItems.length - 1 && <span className="text-white mx-2">|</span>}
                </li>
            ))}
        </ul>
    );
}

