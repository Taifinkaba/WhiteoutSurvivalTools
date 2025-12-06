"use client";

export default function Overlay({ close }: { close: () => void }) {
    return (
        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            aria-hidden="true"
            onClick={close}
        />
    );
}
