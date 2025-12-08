import Image from "next/image";

export default function HeroImage() {
    return (
        <section
            aria-labelledby="hero-heading"
            className="w-full mb-12 rounded-2xl overflow-hidden shadow-2xl focus-within:ring-4 focus-within:ring-indigo-500 transition-shadow"
        >
            <h2 id="hero-heading" className="sr-only">
                Hero Banner
            </h2>
            <div className="relative w-full h-[220px] sm:h-80 md:h-[420px] lg:h-[500px]">
                <Image
                    src="/WOSToolsLandingPage.png"
                    alt="Arctic Base Welcome Banner showing Whiteout Survival tools"
                    fill
                    priority
                    className="object-cover rounded-2xl"
                />
            </div>
        </section>
    );
}
