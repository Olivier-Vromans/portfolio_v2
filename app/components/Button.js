import React from 'react';

export default function Button({ text, styleType = 'default' }) {
    const styles = {
        default: "text-quaternary bg-primary hover:bg-quaternary hover:text-primary",
        secondary: "bg-secondary",
        outline: "border-primary border",
    };

    const selectedStyle = styles[styleType] || styles.default;

    return (
        <div className={`${selectedStyle} py-2 px-4 rounded-full cursor-pointer`}>
            {text}
        </div>
    );
}
