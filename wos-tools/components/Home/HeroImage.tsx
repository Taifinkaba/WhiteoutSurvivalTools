import Image from "next/image";

export default function HeroImage() {
    return (
        <section aria-labelledby="hero-heading" className="w-full mb-10 rounded-xl overflow-hidden shadow-lg">
            <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] relative">
                <Image
                    src="/WOSToolsLandingPage.png"
                    alt="Arctic Base Welcome Banner showing Whiteout Survival tools"
                    fill
                    priority
                    className="object-cover rounded-xl"
                />
            </div>
        </section>
    );
}
