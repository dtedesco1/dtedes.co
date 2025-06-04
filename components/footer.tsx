'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function Footer() {
    const pathname = usePathname()
    if (pathname === '/') {
        return null
    }

    return (
        <footer className="max-w-4xl mx-auto p-8 mt-8 border-t">
            <Link href="/" className="prose prose-lg dark:prose-invert transition-opacity hover:opacity-80">
                Back
            </Link>
        </footer>
    );
}