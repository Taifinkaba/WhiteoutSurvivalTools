import Link from "next/link";

interface PageCardProps {
    title: string;
    description: string;
    href: string;
    colorClass?: "green" | "indigo" | "yellow" | "red" | "blue"; // restrict to Tailwind colors
    external?: boolean;
}

export default function PageCard({
    title,
    description,
    href,
    colorClass = "green",
    external = false,
}: PageCardProps) {
    const Tag = external ? "a" : Link;
    const props = external
        ? {
            href,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": `${title} (opens in a new tab)`,
        }
        : { href };

    // Tailwind classes for dynamic colors (map object)
    const colorMap: Record<string, string> = {
        green: "text-green-400 border-green-400 ring-green-400",
        indigo: "text-indigo-400 border-indigo-400 ring-indigo-400",
        yellow: "text-yellow-400 border-yellow-400 ring-yellow-400",
        red: "text-red-400 border-red-400 ring-red-400",
        blue: "text-blue-400 border-blue-400 ring-blue-400",
    };

    const dynamicClasses = colorMap[colorClass] || colorMap.green;

    return (
        <Tag {...props} className="block">
            <div
                role="link"
                tabIndex={0}
                className={`
          bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-700
          flex flex-col h-full max-h-[260px] min-h-[220px] w-full
          hover:scale-105 focus:scale-105 transition-transform duration-200 cursor-pointer
          hover:${dynamicClasses.split(" ")[0]} hover:${dynamicClasses.split(" ")[1]}
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:${dynamicClasses.split(" ")[2]}
        `}
            >
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-400 text-sm sm:text-base">{description}</p>
            </div>
        </Tag>
    );
}
