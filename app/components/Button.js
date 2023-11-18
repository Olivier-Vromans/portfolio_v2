import React from 'react';

/**
 * @typedef {'default' | 'selected' | 'outline'} StyleType
 */

/**
 * @typedef {'default' | 'big'} SizeType
 */

/**
 * Button component props
 * @typedef {object} ButtonProps
 * @property {string} text - The text to be displayed on the button.
 * @property {string} [className] - Additional CSS classes for the button.
 * @property {StyleType} [styleType='default'] - The style type for the button.
 * @property {SizeType} [sizeType='default'] - The size type for the button.
 * @property {() => void} [onClick] - Callback function for button click.
 */

/**
 * Button component
 * @param {ButtonProps} props - Component props.
 * @returns {JSX.Element} - Rendered component.
 */
export default function Button({ text, className, styleType = 'default', sizeType = 'default', onClick }) {
    const styles = {
        default: "text-quaternary bg-primary hover:bg-quaternary hover:text-primary",
        selected: "bg-quaternary text-primary",
        outline: "border-primary border hover:bg-quaternary hover:text-primary",
    };

    const sizes = {
        default: "py-2 px-4",
        big: "py-4 px-6",
    };

    const selectedStyle = styles[styleType] || styles.default;
    const selectedSize = sizes[sizeType] || sizes.default;

    return (
        <button
            type='button'
            className={`min-w-[128px] ${className} ${selectedStyle} ${selectedSize} rounded-full cursor-pointer inline-block`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
