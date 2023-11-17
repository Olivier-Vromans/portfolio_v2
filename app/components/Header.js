"use client"
import React, { useState } from 'react';
import Button from './Button.js';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = ["Skills", "Projects", "Work Experience", "Contact"];

    return (
        <nav className='absolute top-0 w-full flex items-center justify-between flex-wrap p-6 gap-5'>
            <div className='flex items-center flex-shrink-0 mr-6'>
                <p className='text-2xl'>
                    Olivier Vromans
                </p>
            </div>
            <div className='block sm:hidden'>
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
            <div className={`w-full sm:flex sm:items-center sm:w-auto ${menuOpen ? 'block' : 'hidden'}`}>
                <div className='w-full flex flex-col items-center sm:flex-row sm:items-center gap-5 sm:py-0 px-10'>
                    {navItems.map((item, index) => (
                        <div key={index} className='flex items-center gap-3 flex-1 self-stretch rounded-2xl border bg-linearColor border-custom/10 shadow-custom backdrop-blur-sm  sm:border-0'>
                            <a href={`#${item.toLowerCase()}`} className='flex-1 text-center py-2'>
                                {item}
                            </a>
                        </div>
                    ))}
                    <div className='block pt-5 sm:hidden'>
                        <Button text="Download my CV" styleType='outline' />
                    </div>
                </div>
            </div>
            <div className='hidden sm:block'>
                <Button text="Download my CV" styleType='outline' />
            </div>
        </nav>
    );
}