export default function ArtDecoBackground() {
    return (
        <svg
            aria-hidden="true"
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] pointer-events-none text-primary-200/10 dark:text-secondary-500/10 animate-wave-slower [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
        >
            <defs>
                <pattern id="wave" width="80" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 20 Q 20 0 40 20 T 80 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave)" />
        </svg>
    )
}
