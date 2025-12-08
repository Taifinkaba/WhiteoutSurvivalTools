export default function WelcomeSection() {
    return (
        <section
            aria-labelledby="welcome-heading"
            className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 py-12"
        >
            <h1
                id="welcome-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center text-white"
            >
                Welcome to WOS Tools
            </h1>
            <p className="text-gray-300 text-center mb-12 leading-relaxed text-base sm:text-lg">
                This site provides fast, clean, and accurate tools for{" "}
                <span className="text-blue-400 font-semibold">Whiteout Survival</span>.
                Whether you're optimizing your base, calculating upgrade costs, or
                planning resource spending, we've got tools to help your progression
                feel smooth and efficient.
            </p>
        </section>
    );
}
