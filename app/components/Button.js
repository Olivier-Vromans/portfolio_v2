import React, { Suspense } from 'react';

/**
 * @typedef {'default' | 'selected' | 'outline' | 'icon'} StyleType
 */

/**
 * @typedef {'default' | 'big' | 'icon'} SizeType
 */

/**
 * Button component props
 * @typedef {object} ButtonProps
 * @property {string} text - The text to be displayed on the button.
 * @property {string} [href] - The href for the button.
 * @property {Icon}
 * @property {string} [className] - Additional CSS classes for the button.
 * @property {StyleType} [styleType='default'] - The style type for the button.
 * @property {SizeType} [sizeType='default'] - The size type for the button.
 * @property {() => void} [onClick] - Callback function for button click.
 * @property {boolean} [download] - If the button should download a file.
 */

/**
 * Button component
 * @param {ButtonProps} props - Component props.
 * @returns {JSX.Element} - Rendered component.
 */
export default function Button({ text, href, icon: IconComponent = null, iconColor = "inherit", className, styleType = 'default', sizeType = 'default', onClick, download = false, blank = false}) {
    const styles = {
        default: "text-quaternary bg-primary stroke-quaternary hover:bg-quaternary hover:text-primary hover:stroke-primary",
        selected: "bg-quaternary text-primary stroke-primary hover:stroke-quaternary",
        outline: "border-primary border hover:bg-primary hover:text-quaternary stroke-primary hover:stroke-quaternary ",
        icon: "stroke-tertiaire hover:stroke-primary",
    };

    const sizes = {
        default: "py-2 px-4",
        big: "py-4 px-6",
        icon: "p-0",
    };

    const selectedStyle = styles[styleType] || styles.default;
    const selectedSize = sizes[sizeType] || sizes.default;

    // check if icon is none or not in icons array
    if (!IconComponent) {
        return (
            <a
                {...(href && { href })}
                className={`min-w-[128px] ${className} ${selectedStyle} ${selectedSize} rounded-full cursor-pointer inline-block text-center`}
                onClick={onClick} download={download} target={blank ? "_blank" : null}
            >
                {text}
            </a>
        );

    }

    return (
        <a
            {...(href && { href })}
            className={`w-full ${className} ${selectedStyle} ${selectedSize} ${IconComponent ? "flex flex-row justify-center" : null} rounded-full cursor-pointer inline-block text-center gap-2`}
            onClick={onClick} download={download} target={blank ? "_blank" : null}
        >
            {IconComponent ? (
                <Suspense fallback={<div>Loading...</div>}>
                    <>
                        <IconComponent color="inherit" />
                        {text}
                    </>
                </Suspense>
            ) : (
                text
            )}
        </a>
    );
}