"use client";

import { FaSearch } from "react-icons/fa";

interface SearchBoxProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchBox({ value, onChange }: SearchBoxProps) {
    return (
        <div className="mb-8 flex justify-center relative w-full sm:w-2/3 mx-auto">
            {/* Decorative icon */}
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />

            {/* Hidden label for screen readers */}
            <label htmlFor="search-input" className="sr-only">
                Search guides
            </label>

            <input
                id="search-input"
                type="text"
                placeholder="Search guides..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                aria-label="Search guides"
                className="w-full p-3 pl-10 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
        </div>
    );
}
