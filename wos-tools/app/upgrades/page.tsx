import Navbar from "../../components/Navbar";

export default function Upgrades() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <main className="max-w-7xl mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Upgrades</h1>
                <p className="text-gray-300">
                    Calculate costs and view available upgrades for your buildings.
                </p>
                {/* Future: add upgrade calculators, forms, or tables */}
            </main>
        </div>
    );
}