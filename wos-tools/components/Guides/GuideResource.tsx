import { FaYoutube, FaFileAlt, FaGlobe } from "react-icons/fa";
import { GuideResource as GuideResourceType } from "@/data/guides";

interface Props {
    resource: GuideResourceType;
}

export default function GuideResource({ resource }: Props) {
    const getIcon = (type: string, priority?: boolean) => {
        const baseSize = priority ? 28 : 24;
        switch (type) {
            case "youtube":
                return <FaYoutube size={baseSize} color="#FF0000" className="inline mr-2 transition-transform duration-200 hover:scale-110" />;
            case "article":
                return <FaFileAlt size={baseSize} color={priority ? "#1E90FF" : "#4DA6FF"} className="inline mr-2 transition-transform duration-200 hover:scale-110" />;
            case "website":
                return <FaGlobe size={baseSize} color={priority ? "#00FF00" : "#66FF66"} className="inline mr-2 transition-transform duration-200 hover:scale-110" />;
            default:
                return null;
        }
    };

    return (
        <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center p-3 rounded-lg transition shadow hover:scale-[1.02] hover:shadow-lg
        ${resource.priority ? "bg-yellow-300 text-gray-900 font-bold" : "bg-gray-700 text-white hover:bg-gray-600"}`}
        >
            {getIcon(resource.type, resource.priority)}
            <span className="font-semibold">{resource.title}</span>
        </a>
    );
}
