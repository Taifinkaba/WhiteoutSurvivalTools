import Link from "next/link";

interface FeatureCardProps {
    title: string;
    description: string;
    href: string;
    colorClass?: string;
    external?: boolean;
}

export default function FeatureCard({
    title,
    description,
    href,
    colorClass = "yellow",
    external = false,
}: FeatureCardProps) {
    const Tag = external ? "a" : Link;
    const props = external
        ? { href, target: "_blank", rel: "noopener noreferrer" }
        : { href };

    return (
        <Tag
            {...props}
            className="block focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
        >
            <div
                role="link"
                tabIndex={0}
                className={`bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700
        flex flex-col h-full max-h-[250px] min-h-[220px] max-w-full
        cursor-pointer
        hover:scale-[1.02] focus:scale-[1.02] transition-transform
        hover:border-${colorClass}-400 hover:text-${colorClass}-400
        focus:border-${colorClass}-400 focus:text-${colorClass}-400
      `}
            >
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-400 text-sm">{description}</p>
            </div>
        </Tag>
    );
}
