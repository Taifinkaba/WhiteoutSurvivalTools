import Navbar from "../components/Navbar/Navbar";
import HeroImage from "../components/Home/HeroImage";
import WelcomeSection from "../components/Home/WelcomeSection";
import PagesGrid from "../components/Home/PagesGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="max-w-6xl mx-auto p-4 pt-16 space-y-12">
        <HeroImage />
        <WelcomeSection />
        <PagesGrid />
      </main>
    </div>
  );
}
