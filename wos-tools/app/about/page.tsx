import Navbar from "../../components/Navbar";

export default function About() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <main className="max-w-7xl mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">About WOS Tools</h1>
                <p className="text-gray-300">
                    WOS Tools is a fan resource for planning building upgrades, tracking progress,
                    and strategizing your survival.
                </p>
            </main>
        </div>
    );
}