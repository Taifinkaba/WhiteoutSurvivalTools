"use client";

export default function SkipToContent() {
    return (
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-yellow-400 focus:text-gray-900 px-2 py-1 rounded"
        >
            Skip to content
        </a>
    );
}
