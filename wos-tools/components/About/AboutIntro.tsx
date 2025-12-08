export default function AboutIntro() {
    return (
        <section aria-labelledby="about-title" className="py-8">
            <h1
                id="about-title"
                className="text-4xl font-bold mb-2 text-center"
            >
                About WOS Tools
            </h1>
            <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
                WOS Tools is a dedicated fan resource for{" "}
                <span className="text-blue-400 font-semibold">Whiteout Survival</span>.
                Our mission is to help players plan building upgrades, track progress, and make smarter decisions
                while managing resources efficiently.
            </p>
        </section>
    );
}
