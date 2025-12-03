import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to WOS Tools</h1>
        <p className="text-gray-300">
          Your resource for building upgrades, calculations, and survival tools.
        </p>
      </main>
    </div>
  );
}