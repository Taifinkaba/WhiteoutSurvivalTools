"use client";

import { useState } from "react";
import { guides } from "@/data/guides";
import GuideCard from "./GuideCard";
import SearchBox from "./SearchBox";

export default function GuidesPageComponent() {
    const [search, setSearch] = useState("");

    const filteredGuides = guides
        .map((guide) => {
            const filteredResources = guide.resources.filter((res) =>
                res.title.toLowerCase().includes(search.toLowerCase())
            );
            return { ...guide, resources: filteredResources };
        })
        .filter((guide) => guide.resources.length > 0);

    return (
        <main
            id="main-content"
            className="min-h-screen bg-gray-900 text-white p-4 pt-16 max-w-6xl mx-auto space-y-6"
        >
            <h1 className="text-3xl font-bold mb-6 text-center">Guides</h1>

            <SearchBox value={search} onChange={setSearch} />

            <section aria-labelledby="guides-heading" className="space-y-6">
                <h2 id="guides-heading" className="sr-only">
                    Filtered Guides
                </h2>

                {filteredGuides.length > 0 ? (
                    filteredGuides.map((guide, idx) => <GuideCard key={idx} guide={guide} />)
                ) : (
                    <p className="text-gray-400 text-center">
                        No guides found for "{search}".
                    </p>
                )}
            </section>
        </main>
    );
}
