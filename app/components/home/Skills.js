"use client"
import React, { useEffect, useState } from 'react';
import Button from '../Button.js';
import Image from 'next/image.js';
import Bgmask from '../Bgmask.js';
import { useMediaQuery } from 'react-responsive';

export default function Skills() {
    const skills = ["Back-end", "Front-end", "Database", "Dev-Ops", "Other"];
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
        {
            name: "MySQL",
            skill: "Database",
            link: "https://cdn.svgporn.com/logos/mysql-icon.svg"
        }
    ];

    const [selectedSkill, setSelectedSkill] = useState("all");
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

    const [maxRendered, setMaxRendered] = useState(5)

    let renderedCount = 0;

    useEffect(() => {
        checkRender()
    }, []);

    const checkRender = () => {
        if (isMobile) {
            setMaxRendered(4);
        } else if (isTablet) {
            setMaxRendered(6);
        } else {
            setMaxRendered(5);
        }
    }

    const handleSkillChange = (newSkill) => {
        selectedSkill !== newSkill ? setSelectedSkill(newSkill) : setSelectedSkill("all");
        checkRender()
    };

    return (
        <div className='relative h-screen container w-full'>
            {/* Background */}
            <Bgmask 
                url='/img/skills-bg.jpeg'
                gradient1='linear-gradient(180deg, rgba(var(--color-background), 1) 0%, rgba(var(--color-background), 0.2) 26%, rgba(var(--color-background), 0.60) 69%, rgba(var(--color-background), 1) 100%)'
                gradient2='linear-gradient(90deg, rgba(var(--color-background), 1) 0%, rgba(217, 217, 217, 0) 21%, rgba(var(--color-background), 0.20) 80%, rgba(var(--color-background), 1) 100%)'
            />

            {/* Content */}
            <div id='skills' className="relative container mx-auto flex md:flex-wrap md:content-end flex-col justify-center h-full gap-8 p-6 sm:p-0">
                <div className='bg-secondary/80 flex flex-col gap-6 p-6 pb-12 md:px-12 md:py-16 md:w-4/5 min-h-[750px] md:min-h-[830px] lg:min-h-[536px]'>
                    <h2 className='text-2xl md:text-5xl'>
                        My Skills
                    </h2>
                    <p className='text-sm md:text-xl'>
                        As a web developer, I possess a wide range of skills that allow me to design, build, and maintain websites that are both functional and visually appealing. I have experience with front-end and back-end technologies, as well as web optimization techniques, web accessibility standards, and version control tools. (Replace This Random Text)
                    </p>
                    <div className='flex flex-wrap gap-5 justify-center '>
                        {skills.map((skill, index) =>
                            <div key={index}>
                                <Button
                                    text={skill}
                                    styleType={selectedSkill === skill ? "selected" : "outline"}
                                    onClick={() => handleSkillChange(skill)}
                                />
                            </div>
                        )}
                    </div>
                    <div className='flex flex-wrap gap-8 justify-center md:justify-start'>
                        {techs.map((tech, index) => {
                            if ((selectedSkill === tech.skill || selectedSkill === "all") && renderedCount < maxRendered) {
                                renderedCount++;
                                return (
                                    <div
                                        key={index}
                                        className='relative bg-quaternary flex flex-col px-8 py-1 w-[125px] h-[100px] md:w-[150px] md:h-[125px] items-center justify-center'
                                        style={{
                                            boxShadow: '12px 12px 24px 0px #33242E',
                                        }}
                                    >
                                        <div className='relative w-12 h-12'>
                                            <Image src={tech.link} fill alt={`Experience with ${tech.name}`} />
                                        </div>
                                        <p className='font-kaisei'>{tech.name}</p>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
