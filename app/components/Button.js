import React from 'react';

export default function Button({ text, className, styleType = 'default', sizeType = 'default', onClick}) {
    const styles = {
        default: "text-quaternary bg-primary hover:bg-quaternary hover:text-primary",
        selected: "bg-quaternary text-primary",
        outline: "border-primary border hover:bg-quaternary hover:text-primary",
    };

    const size = {
        default: "py-2 px-4",
        big: "py-4 px-6"
    }

    const selectedStyle = styles[styleType] || styles.default;
    const selectedSize = size[sizeType] || size.default

    return (
        <button type='button' className={`min-w-[128px] ${className} ${selectedStyle} ${selectedSize} rounded-full cursor-pointer inline-block `} onClick={onClick}>
            {text}
        </button>
    );
}
