"use client"
import React, { useEffect, useState } from 'react'
import ProjectCard from '../ProjectCard.js'

export default function Projects() {
    const [projects, setProjects] = useState(null);

    // TODO - Change to server side props
    async function getProjects() {
        const res = await fetch('/assets/projects.json')
        const projectProps = await res.json()
        const sortedProjects = projectProps
            .filter((project) => project.show)
            .sort((a, b) => new Date(b.date) - new Date(a.date));
        setProjects(sortedProjects);
        return projectProps;
    }


    useEffect(() => {
        getProjects();
    }, []);


    return (
        <div id='projects' className='container relative my-16 h-full min-h-screen flex items-center flex-col gap-8'>
            <div className='text-center self-center'>
                <h2 className='text-2xl'>
                    My Projects
                </h2>
                <p className='text-4xl'>
                    Check out some of my work
                </p>
                <p className='text-base'>
                    Here is a collection of featured projects from my portfolio, showcasing a diverse range of work, spanning from academic assignments to personal hobby projects.
                </p>

            </div>
            {/* TODO Redo it into a slider */}
            <div className='flex flex-wrap w-full justify-center gap-4'>
                {/* projects decend based on date */}
                {projects && projects.length > 0 ? (
                    projects.length < 3 ? (
                        <>
                            {projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                            <p>More projects are coming soon.</p>
                        </>
                    ) : (
                        projects.slice(0, 3).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))
                    )
                ) : (
                    <ProjectCard project={null} />
                )}


            </div>
        </div >
    )
}