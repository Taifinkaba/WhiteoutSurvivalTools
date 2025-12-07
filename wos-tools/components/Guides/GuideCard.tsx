import GuideResource from "./GuideResource";
import { Guide as GuideType } from "@/data/guides";

interface Props {
    guide: GuideType;
}

export default function GuideCard({ guide }: Props) {
    return (
        <div className="bg-gray-800 rounded-xl shadow-md p-6 space-y-3 border border-gray-700">
            <h2 className="text-xl font-semibold">{guide.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {guide.resources
                    .slice()
                    .sort((a, b) => (b.priority ? -1 : 0) - (a.priority ? -1 : 0))
                    .map((res, idx) => (
                        <GuideResource key={idx} resource={res} />
                    ))}
            </div>
        </div>
    );
}
