import Navbar from "../../components/Navbar";
import UpgradesCalculator from "../../components/UpgradesCalculator";
import { allBuildings } from "../../data/allBuildings";

export default function Upgrades() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <main className="max-w-7xl mx-auto p-4 space-y-6">
                <h1 className="text-3xl font-bold mb-2 text-center">Upgrades</h1>
                <p className="text-gray-300 text-center max-w-3xl mx-auto mb-4">
                    Calculate costs and view available upgrades for your buildings.
                </p>

                {/* Upgrade Calculator */}
                <UpgradesCalculator building={allBuildings.furnace} />
            </main>
        </div>
    );
}
