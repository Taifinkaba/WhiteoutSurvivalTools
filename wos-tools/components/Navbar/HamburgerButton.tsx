interface HamburgerButtonProps {
    mobileOpen: boolean;
    toggle: () => void;
}

export default function HamburgerButton({ mobileOpen, toggle }: HamburgerButtonProps) {
    return (
        <button
            className="md:flex lg:hidden text-white text-3xl hover:text-yellow-400 transition-colors duration-300"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
            onClick={toggle}
        >
            ☰
        </button>
    );
}
