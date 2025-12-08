import Link from "next/link";

export default function FanSection() {
    return (
        <Link
            href="https://www.youtube.com/@Gogglyeyes717"
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-4xl mx-auto focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
            <div
                role="link"
                tabIndex={0}
                className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 text-center
        cursor-pointer
        hover:scale-[1.02] focus:scale-[1.02] transition-transform
        hover:border-blue-400 hover:text-blue-400
        focus:border-blue-400 focus:text-blue-400"
            >
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
