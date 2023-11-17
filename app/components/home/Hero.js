import React from 'react';
import Button from '../Button.js';

export default function Hero() {
    return (
        <div className='relative h-screen w-screen overflow-hidden'>
            <div className='absolute inset-0 bg-cover h-screen w-screen' style={{
                backgroundImage: 'url(/img/hero-bg.png)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }} />
            <div className='absolute inset-0' style={{
                backgroundImage: 'linear-gradient(180deg, rgba(var(--color-background), 1) 0%,rgba(var(--color-background), 0.60) 14%, rgba(217, 217, 217, 0) 41%, rgba(217, 217, 217, 0) 73%, rgba(var(--color-background), 1) 100%)',
            }} />
            <div className='absolute inset-0' style={{
                backgroundImage: 'linear-gradient(240deg, rgba(217, 217, 217, 0) 6%, #33242E 70%)'
            }} />

            <div className="absolute flex flex-col justify-center h-screen mx-6 gap-8">
                <h1 className="mb-4">Olivier Vromans Portfolio</h1>
                <div className='flex flex-col gap-6'>
                    <p>
                        {`Ik ben een <Deleted Text>`}
                    </p>
                    <p>
                        Ik ben sinds september 2020 begonnen aan de studie Creative Media and Game Technologies in Rotterdam.
                    </p>
                </div>
                <div className='flex self-center'>
                    <Button text={"Check out my work"} sizeType='big' />
                </div>
            </div>
        </div>
    );
}
