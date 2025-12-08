import Navbar from "../components/Navbar/Navbar";
import HeroImage from "../components/Home/HeroImage";
import WelcomeSection from "../components/Home/WelcomeSection";
import PagesGrid from "../components/Home/PagesGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <main id="main-content" className="max-w-6xl mx-auto p-4 pt-16 space-y-12">
        {/* Hero Section */}
        <section aria-label="Hero">
          <HeroImage />
        </section>

        {/* Welcome / Intro Section */}
        <section aria-labelledby="welcome-title">
          <h2 id="welcome-title" className="sr-only">
            Welcome
          </h2>
          <WelcomeSection />
        </section>

        {/* Pages / Features Grid */}
        <section aria-labelledby="pages-title">
          <h2 id="pages-title" className="sr-only">
            Pages
          </h2>
          <PagesGrid />
        </section>
      </main>
    </div>
  );
}
