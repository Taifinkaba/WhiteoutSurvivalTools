import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center" aria-label="Go to homepage">
            <Image src="/WOSToolsLogo3.png" alt="WOS Tools Logo" width={60} height={60} />
            <span className="ml-2 text-white font-bold text-2xl tracking-wide">WOS Tools</span>
        </Link>
    );
}
