import React from 'react';
import Button from '../Button.js';
import Bgmask from '../Bgmask.js';
import Typewriter from '../Typewriter.js';

export default function Hero() {
    const roles = [
        "Back-end Developer", "Front-end Developer", "Designer", "Student"
    ];
    return (
        <div className='relative h-full min-h-screen w-full flex items-center'>
            <Bgmask
                url='/img/hero-bg.png'
                gradient1='linear-gradient(180deg, rgba(var(--color-background), 1) 0%,rgba(var(--color-background), 0.60) 14%, rgba(217, 217, 217, 0) 41%, rgba(217, 217, 217, 0) 73%, rgba(var(--color-background), 1) 100%)'
                gradient2='linear-gradient(240deg, rgba(217, 217, 217, 0) 6%, #33242E 70%)' />

            <div className="container h-full my-16">
                <div className='flex flex-col gap-16 max-w-sm'>
                    <div className='flex flex-col gap-8'>

                        <h1 className="mb-4">Olivier Vromans Portfolio</h1>
                        <div className='flex flex-col gap-6'>
                            <Typewriter initalText="I am a " inputText={roles} />
                            <p>

                                I began my studies at the University of Applied Sciences in Rotterdam in 2020, where I enrolled in the Creative Media and Game Technologies program.
                            </p>
                        </div>
                    </div>
                    <div className='flex self-center'>
                        <Button text={"Check out my work"} sizeType='big' href='#projects' />
                    </div>
                </div>

            </div>
        </div>
    );
}