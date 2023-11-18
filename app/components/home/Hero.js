import React from 'react';
import Button from '../Button.js';
import Bgmask from '../Bgmask.js';

export default function Hero() {
    return (
        <div className='relative h-screen w-full'>
            <Bgmask
                url='/img/hero-bg.png'
                gradient1='linear-gradient(180deg, rgba(var(--color-background), 1) 0%,rgba(var(--color-background), 0.60) 14%, rgba(217, 217, 217, 0) 41%, rgba(217, 217, 217, 0) 73%, rgba(var(--color-background), 1) 100%)'
                gradient2='linear-gradient(240deg, rgba(217, 217, 217, 0) 6%, #33242E 70%)' />

            <div className="relative container mx-auto flex flex-col justify-center h-full gap-8 p-6 sm:p-0">
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