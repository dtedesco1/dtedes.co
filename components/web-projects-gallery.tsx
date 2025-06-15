'use client'

import { useEffect, useState } from 'react'

interface Project {
    title: string;
    path: string;
    filename: string;
}

export default function WebProjectsGallery() {
    const [projects, setProjects] = useState<Project[]>([])
    const [error, setError] = useState<string>('')

    useEffect(() => {
        fetch('/api/web-projects')
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError(data.error)
                } else if (data.projects?.length === 0) {
                    setError('No web projects found')
                } else {
                    setProjects(Array.isArray(data) ? data : [])
                }
            })
            .catch(err => setError('Failed to load projects'))
    }, [])

    if (error) {
        return (
            <div className="text-error p-4 border border-error rounded-lg bg-error/10">
                {error}
            </div>
        )
    }

    return (
        <div className="my-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div
                        key={project.filename}
                        className="border border-base-300 rounded-lg overflow-hidden bg-base-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="p-4">
                            <a
                                href={project.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center font-bold hover:text-primary transition-colors"
                            >
                                {project.title}
                            </a>
                        </div>
                        <div className="relative w-full h-[150px]">
                            <iframe
                                src={project.path}
                                className="absolute inset-0 w-full h-full border-t border-base-300"
                                frameBorder="0"
                                loading="lazy"
                                title={project.title}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
} 