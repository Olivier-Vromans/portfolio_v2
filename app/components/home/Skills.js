"use client"
import React, { useEffect, useState } from 'react';
import Button from '../Button.js';
import Image from 'next/image.js';
import Bgmask from '../Bgmask.js';
import { useMediaQuery } from 'react-responsive';

export default function Skills() {
    const [skills, setSkills] = useState(null);
    const [techs, setTechs] = useState(null);

    // TODO - Change to server side props
    async function getSkills() {
        const res = await fetch('http://localhost:3000/assets/skills.json')
        const skillsProps = await res.json()
        const sortedSkills = skillsProps
        setSkills(sortedSkills);

        // loop through skills and get techs for each skill and add to array
        let techs = [];
        skillsProps.forEach((skill) => {
            skill.techs.forEach((tech) => {
                techs.push(tech);
            });
        });
        setTechs(techs);
    }

    useEffect(() => {
        getSkills();
    }, []);

    const [selectedSkill, setSelectedSkill] = useState("all");
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isSmallDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });

    const [maxRendered, setMaxRendered] = useState(4)
    let renderedCount = 0;

    useEffect(() => {
        checkRender(); // Initial check

        // Add event listener for window resize
        window.addEventListener('resize', checkRender);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkRender);
        };
    }, [isMobile, isTablet, isSmallDesktop]);

    const checkRender = () => {
        if (isMobile) {
            setMaxRendered(4);
        } else if (isTablet) {
            setMaxRendered(6);
        } else if (isSmallDesktop) {
            setMaxRendered(8);
        } else {
            setMaxRendered(5);
        }
    }

    const handleSkillChange = (newSkill) => {
        selectedSkill !== newSkill ? setSelectedSkill(newSkill) : setSelectedSkill("all");
        console.log(selectedSkill)
        checkRender()
    };

    return (
        <div className='relative h-full min-h-screen w-full flex items-center'>
            {/* Background */}
            <Bgmask
                url='/img/skills-bg.jpeg'
                gradient1='linear-gradient(180deg, rgba(var(--color-background), 1) 0%, rgba(var(--color-background), 0.2) 26%, rgba(var(--color-background), 0.60) 69%, rgba(var(--color-background), 1) 100%)'
                gradient2='linear-gradient(90deg, rgba(var(--color-background), 1) 0%, rgba(217, 217, 217, 0) 21%, rgba(var(--color-background), 0.20) 80%, rgba(var(--color-background), 1) 100%)'
            />

            {/* Content */}
            <div id='skills' className="container flex h-full my-16 md:flex-wrap md:content-end flex-col justify-center gap-8 p-6 sm:p-0">
                <div className='bg-secondary/80 flex flex-col gap-6 p-6 pb-12 md:px-12 md:py-16 md:w-4/5'>
                    <h2 className='text-2xl md:text-5xl'>
                        My Skills
                    </h2>
                    <p className='text-sm md:text-xl'>
                        My skills range from a wide set of technologies in the areas of back-end, front-end, databases, and DevOps, along with a couple of design tools. I am still eager to learn new technologies so I can grasp all kinds of knowledge to help my carrer and curiosity.
                    </p>
                    <div className='flex flex-wrap gap-5 justify-center '>
                        {skills ?
                            skills.map((skill, index) =>
                                <div key={index}>
                                    <Button
                                        text={skill.name}
                                        styleType={selectedSkill === skill ? "selected" : "outline"}
                                        onClick={() => handleSkillChange(skill.name)}
                                    />
                                </div>
                            )
                            :
                            null
                        }
                    </div>
                    <div className='flex flex-wrap gap-8 md:gap-4 lg:gap-8 justify-center'>
                        {techs ?
                            techs.map((tech, index) => {
                                if ((selectedSkill === tech.skill || selectedSkill === "all") && renderedCount < maxRendered) {
                                    renderedCount++;
                                    return (
                                        <div
                                            key={index}
                                            className='relative bg-quaternary flex flex-col px-8 py-1 w-2/5 sm:w-1/5 aspect-square md:w-[150px] md:h-[125px] items-center justify-center'
                                            style={{
                                                boxShadow: '12px 12px 24px 0px #33242E',
                                            }}
                                        >
                                            <div className='relative w-12 h-12'>
                                                <Image src={tech.icon} fill alt={`Experience with ${tech.name}`} />
                                            </div>
                                            <p className='font-kaisei'>{tech.name}</p>
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                            })
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
