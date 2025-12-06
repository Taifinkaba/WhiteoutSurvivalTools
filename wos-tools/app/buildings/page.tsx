import Navbar from "../../components/Navbar/Navbar";

export default function Buildings() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <main className="max-w-7xl mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Buildings</h1>
                <p className="text-gray-300">
                    Explore available buildings and their stats.
                </p>
                {/* Add building cards or tables here */}
            </main>
        </div>
    );
}