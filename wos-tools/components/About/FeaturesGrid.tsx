import FeatureCard from "./FeatureCard";

export default function FeaturesGrid() {
    return (
        <section aria-labelledby="features-heading" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <h2 id="features-heading" className="sr-only">
                WOS Tools Features
            </h2>

            <FeatureCard
                title="📊 Upgrade Calculator"
                description="Quickly calculate resource costs, upgrade times, and power gains for every building."
                href="/upgrades"
                colorClass="yellow"
            />

            <FeatureCard
                title="🏗 Building Data"
                description="Detailed level-by-level data for every building, including costs and prerequisites."
                href="https://www.whiteoutsurvival.wiki/buildings/"
                external
                colorClass="blue"
            />

            <FeatureCard
                title="🧩 Strategy Guides"
                description="Tips and strategies for optimizing base layouts, resource management, and upgrade priorities."
                href="https://www.whiteoutsurvival.wiki/"
                external
                colorClass="yellow"
            />
        </section>
    );
}
