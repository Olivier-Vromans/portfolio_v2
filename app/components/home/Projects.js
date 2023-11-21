import React from 'react'
import ProjectCard from '../ProjectCard.js'

export default function Projects() {
    const projects = [
        {
            title: 'Project 1',
            desciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            image: '/img/placeholder.webp',
            liveLink: 'https://google.com',
            githubLink: 'https://github.com',
            skills: ['NextJS', 'Docker', 'React']
        }
    ]

    return (
        <div id='projects' className='relative container mx-auto flex flex-col '>

            <div className='mt-8 text-center min-w-8 self-center'>
                <h2 className='text-2xl'>
                    My Projects
                </h2>
                <p className='text-4xl'>
                    Check out some of my work
                </p>
                <p className='text-base'>
                    As a web developer, I possess a wide range of skills that allow me to design, build, and maintain websites that are both functional and visually appealing. I have experience with front-end and back-end technologies, as well as web optimization techniques, web accessibility standards, and version control tools. (Replace This Random Text)
                </p>

            </div>

            <div className='flex flex-col items-center w-full mt-8'>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
}
