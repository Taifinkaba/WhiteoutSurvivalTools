import Navbar from "@/components/Navbar/Navbar";
import GuidesPageComponent from "@/components/Guides/GuidesPage";

export default function GuidesPage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <GuidesPageComponent />
        </div>
    );
}
