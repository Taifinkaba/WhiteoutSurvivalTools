import PageCard from "./PageCard";

export default function PagesGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <PageCard
                title="📚 Guides"
                description="Explore curated guides, tutorials, and resources to master Whiteout Survival."
                href="/guides"
                colorClass="green"
            />
            <PageCard
                title="📊 Building Calculator"
                description="Calculate resource costs, power gain, and upgrade requirements instantly."
                href="/upgrades"
                colorClass="yellow"
            />
            <PageCard
                title="🏗 Building Data"
                description="Detailed level-by-level data for every building, including costs and prerequisites."
                href="https://www.whiteoutsurvival.wiki/buildings/"
                external
                colorClass="blue"
            />
            <PageCard
                title="ℹ️ About"
                description="Learn more about WOS Tools, its purpose, and how it helps players optimize their Whiteout Survival experience."
                href="/about"
                colorClass="yellow"
            />
        </div>
    );
}
