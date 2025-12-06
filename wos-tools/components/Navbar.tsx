import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-gray-900 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">

                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                        <Image
                            src="/WOSToolsLogo3.png"
                            alt="WOS Tools Logo"
                            width={60}
                            height={60}
                            className="mr-2"
                        />
                        <span className="text-white font-bold text-2xl">WOS Tools</span>
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/">
                            <span className="text-blue-400 hover:text-blue-200">Home</span>
                        </Link>
                        <Link href="/buildings">
                            <span className="text-blue-400 hover:text-blue-200">Buildings</span>
                        </Link>
                        <Link href="/upgrades">
                            <span className="text-blue-400 hover:text-blue-200">Upgrades</span>
                        </Link>
                        <Link href="/about">
                            <span className="text-blue-400 hover:text-blue-200">About</span>
                        </Link>
                    </div>

                    {/* Mobile Menu (hamburger) */}
                    <div className="md:hidden">
                        <button className="text-blue-400 text-2xl">☰</button>
                    </div>

                </div>
            </div>
        </nav>
    );
}