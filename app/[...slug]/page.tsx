import { notFound } from 'next/navigation'
import { existsSync, readdirSync } from 'fs'
import { join } from 'path'
import { PageProps as NextPageProps } from '@/.next/types/app/[...slug]/page'

function getContentSlugs(directory: string, segments: string[] = []): string[][] {
    return readdirSync(directory, { withFileTypes: true })
        .sort((a, b) => a.name.localeCompare(b.name))
        .flatMap((entry) => {
            if (entry.isDirectory()) {
                return getContentSlugs(join(directory, entry.name), [...segments, entry.name])
            }

            if (entry.isFile() && entry.name.endsWith('.mdx')) {
                return [[...segments, entry.name.slice(0, -4)]]
            }

            return []
        })
}

export function generateStaticParams() {
    return getContentSlugs(join(process.cwd(), 'app/content'))
        .map((slug) => ({ slug }))
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
