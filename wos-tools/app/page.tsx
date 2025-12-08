import Navbar from "../components/Navbar/Navbar";
import HeroImage from "../components/Home/HeroImage";
import WelcomeSection from "../components/Home/WelcomeSection";
import PagesGrid from "../components/Home/PagesGrid";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white font-sans overflow-hidden">
      {/* Snowflakes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white rounded-full animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
              opacity: `${0.3 + Math.random() * 0.7}`,
            }}
          ></div>
        ))}
      </div>

      <Navbar />

      <main id="main-content" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        {/* Hero Section */}
        <section aria-label="Hero">
          <HeroImage />
        </section>

        {/* Welcome Section */}
        <section aria-labelledby="welcome-title">
          <h2 id="welcome-title" className="sr-only">Welcome</h2>
          <WelcomeSection />
        </section>

        {/* Pages / Features Grid */}
        <section aria-labelledby="pages-title">
          <h2 id="pages-title" className="sr-only">Pages</h2>
          <PagesGrid />
        </section>
      </main>

      {/* Snow ground */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg
          className="w-full h-20 sm:h-32 md:h-40 snow-drift"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,181.3C840,181,960,171,1080,149.3C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

    </div>
  );
}
