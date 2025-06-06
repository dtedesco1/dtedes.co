export default function ArtDecoBackground() {
    return (
        <svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none text-primary-200/20 dark:text-secondary-500/15 animate-spin-slow [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
        >
            <defs>
                <pattern id="artdeco" width="80" height="80" patternUnits="userSpaceOnUse">
                    <path d="M40 0 L80 40 L40 80 L0 40Z" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#artdeco)" />
        </svg>
    )
}
