import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <main className="max-w-7xl mx-auto p-4 pt-16 space-y-8">

                {/* Page Title */}
                <h1 className="text-4xl font-bold mb-2 text-center">About WOS Tools</h1>

                {/* Introduction */}
                <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
                    WOS Tools is a dedicated fan resource for <span className="text-blue-400 font-semibold">Whiteout Survival</span>.
                    Our mission is to help players plan building upgrades, track progress, and make smarter decisions
                    while managing resources efficiently.
                </p>

                {/* Features Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {/* Upgrade Calculator Card */}
                    <Link href="/upgrades" className="block">
                        <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 
                            hover:scale-[1.02] transition-transform cursor-pointer 
                            flex flex-col h-full max-h-[250px] min-h-[220px] max-w-full
                            hover:border-yellow-400 hover:text-yellow-400">
                            <h2 className="text-xl font-semibold mb-2">📊 Upgrade Calculator</h2>
                            <p className="text-gray-400 text-sm">
                                Quickly calculate resource costs, upgrade times, and power gains for every building.
                            </p>
                        </div>
                    </Link>

                    {/* Building Data Card */}
                    <Link href="https://www.whiteoutsurvival.wiki/buildings/" target="_blank" className="block">
                        <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 
                            hover:scale-[1.02] transition-transform cursor-pointer 
                            flex flex-col h-full max-h-[250px] min-h-[220px] max-w-full
                            hover:border-blue-400 hover:text-blue-400">
                            <h2 className="text-xl font-semibold mb-2">🏗 Building Data</h2>
                            <p className="text-gray-400 text-sm">
                                Detailed level-by-level data for every building, including costs and prerequisites.
                            </p>
                        </div>
                    </Link>

                    {/* Strategy Guides Card */}
                    <Link href="https://www.whiteoutsurvival.wiki/" target="_blank" className="block">
                        <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 
                            hover:scale-[1.02] transition-transform cursor-pointer 
                            flex flex-col h-full max-h-[250px] min-h-[220px] max-w-full
                            hover:border-yellow-400 hover:text-yellow-400">
                            <h2 className="text-xl font-semibold mb-2">🧩 Strategy Guides</h2>
                            <p className="text-gray-400 text-sm">
                                Tips and strategies for optimizing base layouts, resource management, and upgrade priorities.
                            </p>
                        </div>
                    </Link>

                </div>

                {/* Made by a Fan Section */}
                <Link
                    href="https://www.youtube.com/@Gogglyeyes717"
                    target="_blank"
                    className="block max-w-4xl mx-auto cursor-pointer"
                >
                    <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 text-center 
                  hover:scale-[1.02] transition-transform hover:border-blue-400 hover:text-blue-400">
                        <h2 className="text-2xl font-semibold mb-2">💖 Made by a Fan</h2>
                        <p className="text-gray-300 mb-2">
                            WOS Tools is built and maintained by a dedicated fan of Whiteout Survival.
                            Click here to support me on YouTube!
                        </p>
                        <span className="text-blue-400 font-semibold hover:underline">
                            Gogglyeyes717 on YouTube
                        </span>
                    </div>
                </Link>

                {/* Footer Info */}
                <p className="text-gray-400 text-sm text-center mt-6 max-w-2xl mx-auto">
                    WOS Tools is not affiliated with the official Whiteout Survival team.
                    Our goal is to support the community with accurate and easy-to-use tools.
                </p>

            </main>
        </div>
    );
}