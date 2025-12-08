import Navbar from "../../components/Navbar/Navbar";
import AboutIntro from "../../components/About/AboutIntro";
import FeaturesGrid from "../../components/About/FeaturesGrid";
import FanSection from "../../components/About/FanSection";
import FooterInfo from "../../components/About/FooterInfo";

export default function About() {
    const snowLayers = [
        { count: 30, size: 1, durationMin: 4, durationMax: 6, opacityMin: 0.3, opacityMax: 0.6 },
        { count: 40, size: 1.5, durationMin: 5, durationMax: 8, opacityMin: 0.4, opacityMax: 0.7 },
        { count: 50, size: 2, durationMin: 6, durationMax: 10, opacityMin: 0.5, opacityMax: 0.9 },
    ];

    return (
        <div className="relative min-h-screen bg-gray-900 text-white font-sans overflow-hidden">
            {/* Snowfall layers */}
            {snowLayers.map((layer, index) => (
                <div key={index} className="absolute inset-0 pointer-events-none">
                    {[...Array(layer.count)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-white rounded-full animate-fall"
                            style={{
                                width: `${layer.size}rem`,
                                height: `${layer.size}rem`,
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${layer.durationMin + Math.random() * (layer.durationMax - layer.durationMin)}s`,
                                opacity: `${layer.opacityMin + Math.random() * (layer.opacityMax - layer.opacityMin)}`,
                            }}
                        />
                    ))}
                </div>
            ))}

            <Navbar />

            <main id="main-content" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-12">
                {/* Page Header */}
                <header className="text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About WOS Tools</h1>
                    <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                        WOS Tools is a fan-made resource designed to help players plan building upgrades,
                        track progress, and optimize gameplay in Whiteout Survival.
                    </p>
                </header>

                {/* Features Section */}
                <section aria-labelledby="features-title">
                    <h2 id="features-title" className="sr-only">Features</h2>
                    <FeaturesGrid />
                </section>

                {/* Fan Contribution Section */}
                <section aria-labelledby="fan-section-title">
                    <h2 id="fan-section-title" className="sr-only">Fan Contribution</h2>
                    <FanSection />
                </section>

                {/* Footer Info */}
                <FooterInfo />
            </main>

            {/* Snow Ground */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
                <svg
                    className="w-full h-20 sm:h-32 md:h-40"
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
