"use client"
import React, { useEffect, useState } from 'react';

/**
 * Typewriter Component.
 * Simulates a typewriter effect, typing and deleting a sequence of texts.
 *
 * @component
 * @example
 * // Example Usage:
 * const texts = ["Web Developer", "Front-end Engineer", "UI/UX Designer"];
 * <Typewriter inputText={texts} />
 *
 * @typedef {object} TypewriterProps
 * @property {string[]} inputText - An array of texts to be sequentially typed and deleted.
 *
 * @param {TypewriterProps} props - Component props.
 * @returns {JSX.Element} - Rendered component.
 */

const Typewriter = ({ initalText, inputText }) => {
    if (!inputText || inputText.length === 0) {
        console.error("Typewriter component: 'inputText' prop is not defined or is an empty array.");
        return null;
    }


    const [heroText, setHeroText] = useState("");
    const [intervalId, setIntervalId] = useState(null);
    const speed = 100;
    

    const typeText = (text, index) => {
        if (index < text.length) {
            setHeroText(text.substring(0, index + 1));
            setTimeout(() => {
                typeText(text, index + 1, speed);
            }, speed);
        } else {
            setTimeout(() => {
                deleteText(text, text.length - 1, speed);
            }, speed * 10);
        }
    };

    // Function to simulate deleting effect
    const deleteText = (text, index, speed) => {
        if (index >= 0) {
            setHeroText(text.substring(0, index));
            setTimeout(() => {
                deleteText(text, index - 1, speed);
            }, speed);
        } else {
            // Start typing the next text
            const nextIndex = inputText.indexOf(text) + 1 === inputText.length ? 0 : inputText.indexOf(text) + 1;
            setTimeout(() => {
                typeText(inputText[nextIndex], 0);
            }, speed * 5);
        }
    };

    // Function to change hero text
    const changeHeroText = (newText) => {
        setTimeout(() => {
            typeText(newText, 0);
        });
    };

    useEffect(() => {
        if (!inputText || inputText.length === 0) {
            console.error("Typewriter component: 'inputText' prop is not defined or is an empty array.");
            return;
        }
    
        // Initial text
        changeHeroText(inputText[0]);
    
        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, [intervalId, inputText]); 

    return (
        <p className="text-xl">
            {initalText}
            <span className='italic'>
                {heroText} <span className="text-primary animate-pulse -ml-1 not-italic">|</span>
            </span>
        </p>
    )
};

export default Typewriter;
