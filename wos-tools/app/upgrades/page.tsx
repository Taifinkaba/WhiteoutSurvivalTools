import Navbar from "../../components/Navbar/Navbar";
import UpgradesCalculator from "../../components/Calculator/UpgradesCalculator";
import { allBuildings } from "../../data/allBuildings";

export default function Upgrades() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />

            <main id="main-content" className="max-w-7xl mx-auto p-4 space-y-6">
                {/* Page Heading */}
                <header className="text-center">
                    <h1 className="text-3xl font-bold mb-2">Upgrades</h1>
                    <p className="text-gray-300 max-w-3xl mx-auto">
                        Calculate costs and view available upgrades for your buildings.
                    </p>
                </header>

                {/* Upgrade Calculator Section */}
                <section aria-labelledby="upgrades-calculator-title">
                    <h2 id="upgrades-calculator-title" className="sr-only">
                        Upgrade Calculator
                    </h2>
                    <UpgradesCalculator building={allBuildings.furnace} />
                </section>
            </main>
        </div>
    );
}
