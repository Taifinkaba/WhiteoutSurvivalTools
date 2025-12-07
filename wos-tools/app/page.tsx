import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <main className="max-w-6xl mx-auto p-4 pt-16 space-y-12">

        {/* Hero Image */}
        <div className="w-full mb-10 rounded-xl overflow-hidden shadow-lg">
          <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] relative">
            <Image
              src="/WOSToolsLandingPage.png"
              alt="Arctic Base Welcome Banner"
              fill
              priority
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Welcome Title */}
        <h1 className="text-4xl font-bold mb-4 text-center">
          Welcome to WOS Tools
        </h1>

        {/* Intro Paragraph */}
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          This site provides fast, clean, and accurate tools for{" "}
          <span className="text-blue-400 font-semibold">Whiteout Survival</span>.
          Whether you're optimizing your base, calculating upgrade costs, or
          planning resource spending, we've got tools to help your progression
          feel smooth and efficient.
        </p>

        {/* Pages Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Guides Card */}
          <Link href="/guides" className="block">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 
                            hover:scale-[1.02] transition-transform cursor-pointer 
                            flex flex-col h-full max-h-[250px] min-h-[220px] max-w-full
                            hover:border-green-400 hover:text-green-400">
              <h2 className="text-xl font-semibold mb-2">📚 Guides</h2>
              <p className="text-gray-400 text-sm">
                Explore curated guides, tutorials, and resources to master Whiteout Survival.
              </p>
            </div>
          </Link>

          {/* Building Calculator Card */}
          <Link href="/upgrades" className="block">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 
                            hover:scale-[1.02] transition-transform cursor-pointer 
                            flex flex-col h-full max-h-[250px] min-h-[220px] max-w-full
                            hover:border-yellow-400 hover:text-yellow-400">
              <h2 className="text-xl font-semibold mb-2">📊 Building Calculator</h2>
              <p className="text-gray-400 text-sm">
                Calculate resource costs, power gain, and upgrade requirements instantly.
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

          {/* About Card */}
          <Link href="/about" className="block">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 
                            hover:scale-[1.02] transition-transform cursor-pointer 
                            flex flex-col h-full max-h-[250px] min-h-[220px] max-w-full
                            hover:border-yellow-400 hover:text-yellow-400">
              <h2 className="text-xl font-semibold mb-2">ℹ️ About</h2>
              <p className="text-gray-400 text-sm">
                Learn more about WOS Tools, its purpose, and how it helps players
                optimize their Whiteout Survival experience.
              </p>
            </div>
          </Link>

        </div>

      </main>
    </div>
  );
}
