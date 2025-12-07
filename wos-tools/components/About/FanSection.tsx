import Link from "next/link";

export default function FanSection() {
    return (
        <Link
            href="https://www.youtube.com/@Gogglyeyes717"
            target="_blank"
            className="block max-w-4xl mx-auto cursor-pointer"
        >
            <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 text-center 
        hover:scale-[1.02] transition-transform hover:border-blue-400 hover:text-blue-400">
                <h2 className="text-2xl font-semibold mb-2">💖 Made by a Fan</h2>
                <p className="text-gray-300 mb-2">
                    WOS Tools is built and maintained by a dedicated fan of Whiteout Survival.
                    Click here to support me on YouTube!
                </p>
                <span className="text-blue-400 font-semibold hover:underline">
                    Gogglyeyes717 on YouTube
                </span>
            </div>
        </Link>
    );
}
