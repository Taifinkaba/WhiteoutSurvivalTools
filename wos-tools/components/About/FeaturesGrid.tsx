import FeatureCard from "./FeatureCard";

export default function FeaturesGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
        </div>
    );
}
