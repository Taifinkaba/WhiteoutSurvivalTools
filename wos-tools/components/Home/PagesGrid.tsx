import PageCard from "./PageCard";

export default function PagesGrid() {
    return (
        <section
            aria-labelledby="pages-heading"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
            <h2
                id="pages-heading"
                className="text-3xl sm:text-4xl font-extrabold mb-12 text-center text-white"
            >
                Explore Our Tools
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </section>
    );
}
