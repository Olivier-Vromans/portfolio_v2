import React from 'react'
import ProjectCard from '../ProjectCard.js'

export default function Projects() {
    const projects = [
        {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            image: 'placeholder.webp',
            liveLink: 'https://google.com',
            githubLink: 'https://github.com',
            tags: ['NextJS', 'Docker', 'React'],
            date: '11/7/2023',
            show : true
        },
        {
            title: 'Project 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            image: 'placeholder.webp',
            liveLink: 'https://google.com',
            githubLink: 'https://github.com',
            tags: ['NextJS', 'Docker', 'React', 'MongoDB', 'NodeJS', 'Angular'],
            date: '11/9/2023',
            show : true
        },
        {
            title: 'Project 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            image: 'placeholder.webp',
            liveLink: 'https://google.com',
            githubLink: 'https://github.com',
            tags: ['NextJS', 'Docker', 'React'],
            date: '11/5/2023',
            show : false
        },
        {
            title: 'Project 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            image: 'placeholder.webp',
            liveLink: 'https://google.com',
            githubLink: 'https://github.com',
            tags: ['NextJS', 'Docker', 'React'],
            date: '11/24/2023',
            show : true
        }
    ]

    const sortedProjects = projects
    .filter((project) => project.show) // Only show projects with show: true
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date

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
                {sortedProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}

                {/* {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))} */}
            </div>
        </div>
    )
}
