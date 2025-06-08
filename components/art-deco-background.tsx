export default function ArtDecoBackground() {
    return (
        <svg
            aria-hidden="true"
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] pointer-events-none text-primary-200/10 dark:text-secondary-500/10 animate-spin-slower [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
        >
            <defs>
                <pattern id="artdeco" width="80" height="80" patternUnits="userSpaceOnUse">
                    <path d="M40 0 L80 40 L40 80 L0 40Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#artdeco)" />
        </svg>
    )
}
