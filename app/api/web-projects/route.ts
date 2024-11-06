import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
    const webProjectsDir = path.join(process.cwd(), 'public', 'web-projects')

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

        return NextResponse.json(projects)
    } catch (error) {
        console.error('Error reading web projects:', error)
        return NextResponse.json({
            error: 'Failed to read projects directory',
            projects: []
        })
    }
} 