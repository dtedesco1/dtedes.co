import './globals.css'
import Footer from '@/components/footer'
import ArtDecoBackground from '@/components/art-deco-background'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" data-theme="mytheme" className="overflow-x-hidden">
            <body className="grid grid-rows-[1fr_auto] bg-pattern relative min-h-screen overflow-x-hidden">
                <ArtDecoBackground />
                <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto p-4 sm:p-8 relative z-10 backdrop-blur-sm w-full min-w-0">
                    {children}
                </article>
                <Footer />
            </body>
        </html>
    )
}