import React from 'react';
import Button from '../Button.js';
import Bgmask from '../Bgmask.js';
import Typewriter from '../Typewriter.js';

export default function Hero() {
    const roles = [
        "Back-end Developer", "Front-end Developer", "Designer", "Student"
    ];
    return (
        <div className='relative h-screen w-full'>
            <Bgmask
                url='/img/hero-bg.png'
                gradient1='linear-gradient(180deg, rgba(var(--color-background), 1) 0%,rgba(var(--color-background), 0.60) 14%, rgba(217, 217, 217, 0) 41%, rgba(217, 217, 217, 0) 73%, rgba(var(--color-background), 1) 100%)'
                gradient2='linear-gradient(240deg, rgba(217, 217, 217, 0) 6%, #33242E 70%)' />

            <div className="relative container mx-auto flex flex-col justify-center h-full gap-8 p-6 sm:p-0">
                <h1 className="mb-4">Olivier Vromans Portfolio</h1>
                <div className='flex flex-col gap-6'>
                    <Typewriter initalText="I am a " inputText={roles} />
                    <p>
                        I started my study at the university of applied sciences in Rotterdam in 2020. Here I started the course Creative Media and Game Technologies.
                    </p>
                </div>
                <div className='flex self-center'>
                    <Button text={"Check out my work"} sizeType='big' />
                </div>
            </div>
        </div>
    );
}