"use client"
import React, { useEffect, useState } from 'react'
import Button from '../Button.js'
import Image from 'next/image.js'

export default function Skills() {
    let maxRendered = 4;
    let renderedCount = 0;
    const skills = ["Back-end", "Front-end", "Database", "Dev-Ops", "Other"]
    const techs = [
        {
            name: "React",
            skill: "Front-end",
            link: "https://cdn.svgporn.com/logos/react.svg"
        },
        {
            name: "NextJs",
            skill: "Back-end",
            link: "https://cdn.svgporn.com/logos/nextjs-icon.svg"
        },
        {
            name: "MongoDB",
            skill: "Database",
            link: "https://cdn.svgporn.com/logos/mongodb-icon.svg"
        },
        {
            name: "Docker",
            skill: "Dev-Ops",
            link: "https://cdn.svgporn.com/logos/docker-icon.svg"
        },
        {
            name: "NodeJS",
            skill: "Back-end",
            link: "https://cdn.svgporn.com/logos/nodejs-icon.svg"
        },
    ]

    const [selectedSkill, setSelectedSkill] = useState("all")

    const handleSkillChange = (newSkill) => {
        selectedSkill !== newSkill ? setSelectedSkill(newSkill) : setSelectedSkill("all");
    };


    return (
        <div id='skills'
            className='relative h-screen w-screen'>
            <div className='absolute inset-0 bg-cover h-screen w-screen' style={{
                backgroundImage: 'url(/img/skills-bg.jpeg)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }} />
            <div className='absolute inset-0' style={{
                backgroundImage: 'linear-gradient(90deg, rgba(var(--color-background), 1) 0%, rgba(217, 217, 217, 0) 21%, rgba(var(--color-background), 0.20) 80%, rgba(var(--color-background), 1) 100%)'
            }} />
            <div className='absolute inset-0' style={{
                backgroundImage: 'linear-gradient(180deg, rgba(var(--color-background), 1) 0%, rgba(var(--color-background), 0.2) 26%, rgba(var(--color-background), 0.60) 69%, rgba(var(--color-background), 1) 100%)'
            }} />
            <div className='absolute inset-0 h-full p-6 container'>
                <div className='bg-secondary/90 flex flex-col gap-6 h-full p-6'>
                    <h2 className='text-2xl'>
                        My Skills
                    </h2>
                    <p className='text-sm'>
                        As a web developer, I possess a wide range of skills that allow me to design, build, and maintain websites that are both functional and visually appealing. I have experience with front-end and back-end technologies, as well as web optimization techniques, web accessibility standards, and version control tools. (Replace This Random Text)
                    </p>
                    <div className='flex flex-wrap gap-5 justify-center'>
                        {skills.map((skill, index) =>
                            <div key={index}>
                                <Button text={skill}
                                    styleType={selectedSkill === skill ? "selected" : "outline"}
                                    onClick={() => handleSkillChange(skill)}
                                />
                            </div>
                        )}
                    </div>
                    <div className='flex flex-wrap gap-8'>
                        {techs.map((tech, index) => {
                            if ((selectedSkill === tech.skill || selectedSkill === "all") && renderedCount < maxRendered) {
                                renderedCount++;
                                return (
                                    <div
                                        key={index}
                                        className='relative bg-quaternary flex flex-col px-8 py-1 w-[125px] h-[100px] items-center justify-center'
                                        style={{
                                            boxShadow: '12px 12px 24px 0px #33242E',
                                        }}
                                    >
                                        <div className='relative w-12 h-12'>
                                            <Image src={tech.link} fill />
                                        </div>
                                        <p className='font-kaisei'>{tech.name}</p>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
