import React, { lazy, Suspense } from 'react';

export const icons = ['Github', 'External'];

const iconComponents = icons.reduce((acc, icon) => {
    acc[icon] = lazy(() => import(`./icons/${icon}`));
    return acc;
}, {});


/**
 * @typedef {'default' | 'selected' | 'outline'} StyleType
 */

/**
 * @typedef {'default' | 'big'} SizeType
 */

/**
 * @typedef {'Github' | 'External'} Icon
 */

/**
 * Button component props
 * @typedef {object} ButtonProps
 * @property {string} text - The text to be displayed on the button.
 * @property {string} [href] - The href for the button.
 * @property {Icon} [icon='Github'] - The icon to be displayed on the button.
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
export default function Button({ text, href, icon = "None", className, styleType = 'default', sizeType = 'default', onClick, download = false}) {
    const styles = {
        default: "text-quaternary bg-primary stroke-quaternary hover:bg-quaternary hover:text-primary hover:stroke-primary",
        selected: "bg-quaternary text-primary stroke-primary hover:stroke-quaternary",
        outline: "border-primary border hover:bg-primary hover:text-quaternary stroke-primary hover:stroke-quaternary ",
    };

    const sizes = {
        default: "py-2 px-4",
        big: "py-4 px-6",
    };

    const selectedStyle = styles[styleType] || styles.default;
    const selectedSize = sizes[sizeType] || sizes.default;

    // check if icon is none or not in icons array
    if (icon === "None" || !icons.includes(icon)) {
        return (
            <a
                {...(href && { href })}
                className={`min-w-[128px] ${className} ${selectedStyle} ${selectedSize} ${icon ? "flex flex-row justify-center" : null} rounded-full cursor-pointer inline-block text-center`}
                onClick={onClick} download={download}
            >
                {text}
            </a>
        );

    }

    // TODO Fix so it can be used dynamically with defining the icon
    const iconString = icon[0].toUpperCase() + icon.slice(1)
    const IconComponent = iconComponents[iconString];

    return (
        <a
            {...(href && { href })}
            className={`w-full ${className} ${selectedStyle} ${selectedSize} ${icon ? "flex flex-row justify-center" : null} rounded-full cursor-pointer inline-block text-center gap-2`}
            onClick={onClick} download={download}
        >
            {icon ? (
                <Suspense fallback={<div>Loading...</div>}>
                    <>
                        <IconComponent />
                        {text}
                    </>
                </Suspense>
            ) : (
                text
            )}
        </a>
    );
}