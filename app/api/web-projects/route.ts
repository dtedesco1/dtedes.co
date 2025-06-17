import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

let cachedProjects: { title: string; path: string; filename: string }[] | null = null

export async function GET() {
    const webProjectsDir = path.join(process.cwd(), 'public', 'web-projects')

    if (cachedProjects) {
        return NextResponse.json(cachedProjects)
    }

    // Check if directory exists
    if (!fs.existsSync(webProjectsDir)) {
        console.error('Directory not found:', webProjectsDir)
        return NextResponse.json({
            error: 'Web projects directory not found',
            projects: []
        })
    }

    try {
        const files = fs.readdirSync(webProjectsDir)
            .filter(file => file.endsWith('.html'))

        if (files.length === 0) {
            return NextResponse.json({
                message: 'No HTML files found',
                projects: []
            })
        }

        const projects = files.map((filename) => ({
            title: filename.replace('.html', '').replace(/-/g, ' '),
            path: `/web-projects/${filename}`,
            filename
        }))

        cachedProjects = projects
        return NextResponse.json(projects)
    } catch (error) {
        console.error('Error reading web projects:', error)
        return NextResponse.json({
            error: 'Failed to read projects directory',
            projects: []
        })
    }
} 