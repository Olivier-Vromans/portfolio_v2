"use client"
import React, { useEffect, useState } from 'react'
import ProjectCard from '../ProjectCard.js'

export default function Projects({ projectProps }) {
    const [projects, setProjects] = useState(null);

    // TODO - Change to server side props
    async function getProjects() {
        const res = await fetch('http://localhost:3000/assets/projects.json')
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
                    As a web developer, I possess a wide range of skills that allow me to design, build, and maintain websites that are both functional and visually appealing. I have experience with front-end and back-end technologies, as well as web optimization techniques, web accessibility standards, and version control tools.
                </p>

            </div>
            {/* TODO Redo it into a slider */}
            <div className='flex flex-wrap w-full justify-center gap-4'>
                {/* projects decend based on date */}
                {projects ?
                    projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))
                    :
                    <ProjectCard project={null} />
                }
            </div>
        </div>
    )
}