"use client";

export default function HamburgerButton({
    mobileOpen,
    toggle,
}: {
    mobileOpen: boolean;
    toggle: () => void;
}) {
    return (
        <button
            className="md:hidden text-white text-3xl hover:text-yellow-400 transition-colors duration-300"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
            onClick={toggle}
        >
            ☰
        </button>
    );
}
