import { notFound } from 'next/navigation'
import { existsSync, readdirSync } from 'fs'
import { join } from 'path'
import { PageProps as NextPageProps } from '@/.next/types/app/[...slug]/page'

export const dynamic = 'force-static'

export async function generateStaticParams() {
    const contentDir = join(process.cwd(), 'app/content')

    const walk = (dir: string, parts: string[] = []): { slug: string[] }[] => {
        return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
            if (entry.isDirectory()) {
                return walk(join(dir, entry.name), [...parts, entry.name])
            }
            if (entry.isFile() && entry.name.endsWith('.mdx')) {
                return [{ slug: [...parts, entry.name.replace(/\.mdx$/, '')] }]
            }
            return []
        })
    }

    return walk(contentDir)
}

export default async function Page({ params }: NextPageProps) {
    const { slug } = await params
    const path = slug.join('/')
    const filePath = join(process.cwd(), 'app/content', `${path}.mdx`)

    if (!existsSync(filePath)) {
        notFound()
    }

    try {
        const Content = (await import(`@/app/content/${path}.mdx`)).default
        return <Content />
    } catch (e) {
        notFound()
    }
}