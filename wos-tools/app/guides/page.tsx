import Navbar from "@/components/Navbar/Navbar";
import GuidesPageComponent from "@/components/Guides/GuidesPage";

export default function GuidesPage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />

            <main id="main-content" className="max-w-6xl mx-auto p-4 pt-16 space-y-6">
                {/* Page Header */}
                <header className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Guides</h1>
                    <p className="text-gray-300 max-w-3xl mx-auto">
                        Explore curated guides, tutorials, and resources to master Whiteout Survival.
                    </p>
                </header>

                {/* Guides List */}
                <section aria-labelledby="guides-list-title">
                    <h2 id="guides-list-title" className="sr-only">
                        Guides List
                    </h2>
                    <GuidesPageComponent />
                </section>
            </main>
        </div>
    );
}
