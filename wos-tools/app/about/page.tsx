import Navbar from "../../components/Navbar/Navbar";
import AboutIntro from "../../components/About/AboutIntro";
import FeaturesGrid from "../../components/About/FeaturesGrid";
import FanSection from "../../components/About/FanSection";
import FooterInfo from "../../components/About/FooterInfo";

export default function About() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />

            <main id="main-content" className="max-w-7xl mx-auto p-4 pt-16 space-y-8">
                {/* Page Header */}
                <header className="text-center">
                    <h1 className="text-4xl font-bold mb-2">About WOS Tools</h1>
                    <p className="text-gray-300 max-w-3xl mx-auto">
                        WOS Tools is a fan-made resource designed to help players plan building upgrades,
                        track progress, and optimize gameplay in Whiteout Survival.
                    </p>
                </header>

                {/* Features Section */}
                <section aria-labelledby="features-title">
                    <h2 id="features-title" className="sr-only">
                        Features
                    </h2>
                    <FeaturesGrid />
                </section>

                {/* Fan Contribution Section */}
                <section aria-labelledby="fan-section-title">
                    <h2 id="fan-section-title" className="sr-only">
                        Fan Contribution
                    </h2>
                    <FanSection />
                </section>

                {/* Footer Info */}
                <FooterInfo />
            </main>
        </div>
    );
}
