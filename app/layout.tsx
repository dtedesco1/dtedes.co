import './globals.css'
import Footer from '@/components/footer'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" data-theme="mytheme">
            <body className="grid grid-rows-[1fr_auto] bg-pattern">
                <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto p-8">
                    {children}
                </article>
                <Footer />
            </body>
        </html>
    )
}