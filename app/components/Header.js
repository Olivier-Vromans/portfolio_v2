"use client"
import React, { useState } from 'react';
import Button from './Button.js';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = ["Skills", "Projects", "Work Experience", "Contact"];

    return (
        <nav className={`absolute z-50 sm:static top-0 py-6 md:py-3 container flex items-center justify-between flex-wrap gap-5 ${menuOpen ? "bg-background" : "bg-none"} md:bg-background`}>
            <div className='flex items-center flex-shrink-0'>
                <p className='text-2xl'>
                    Olivier Vromans
                </p>
            </div>
            <div className='block md:hidden'>
                <button
                    className='flex items-center'
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 6.75L6.75 17.25"></path>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 6.75L17.25 17.25"></path>
                        </svg>
                    ) : (
                        <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 5.75H19.25"></path>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 18.25H19.25"></path>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 12H19.25"></path>
                        </svg>
                    )}
                </button>
            </div>
            <div className={`w-full md:flex md:items-center md:w-auto mt-8 sm:mt-0 ${menuOpen ? 'block' : 'hidden'}`}>
                <div className='w-auto flex flex-col items-center md:flex-row gap-4 lg:gap-10 px-10 md:p-0'>
                    {navItems.map((item, index) => (
                        <a key={index} className='flex justify-center gap-3 self-stretch py-2 rounded-2xl border bg-linearColor border-custom/10 md:border-0 md:bg-none md:shadow-none' href={`#${item.toLowerCase().split(' ')[0]}`} onClick={() => setMenuOpen(!menuOpen)}>
                            {item}
                        </a>
                    ))}
                    <div className='block pt-5 md:hidden'>
                        <Button text="Download my CV" styleType='outline' />
                    </div>
                </div>
            </div>
            <div className='hidden md:block'>
                <Button text="Download my CV" styleType='outline' />
            </div>
        </nav>
    );
}