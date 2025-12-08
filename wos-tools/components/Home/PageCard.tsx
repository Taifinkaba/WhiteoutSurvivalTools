import Link from "next/link";

interface PageCardProps {
    title: string;
    description: string;
    href: string;
    colorClass?: string; // Tailwind color for hover/focus
    external?: boolean; // If true, opens in new tab
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

    return (
        <Tag {...props} className="block">
            <div
                role="link"
                tabIndex={0}
                className={`
          bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 
          flex flex-col h-full max-h-[250px] min-h-[220px] max-w-full
          hover:scale-[1.02] focus:scale-[1.02] transition-transform cursor-pointer
          hover:border-${colorClass}-400 hover:text-${colorClass}-400
          focus:outline-none focus:ring-2 focus:ring-${colorClass}-400 focus:ring-offset-2
        `}
            >
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-400 text-sm">{description}</p>
            </div>
        </Tag>
    );
}
