import Navbar from "../../components/Navbar/Navbar";
import AboutIntro from "../../components/About/AboutIntro";
import FeaturesGrid from "../../components/About/FeaturesGrid";
import FanSection from "../../components/About/FanSection";
import FooterInfo from "../../components/About/FooterInfo";

export default function About() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <main className="max-w-7xl mx-auto p-4 pt-16 space-y-8">
                <AboutIntro />
                <FeaturesGrid />
                <FanSection />
                <FooterInfo />
            </main>
        </div>
    );
}
