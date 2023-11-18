import React from 'react';

/**
 * BgMask Component
 * @typedef {object} BgmaskProps
 * @property {string} url - The URL of the background image.
 * @property {string} gradient1 - The first linear gradient for the overlay.
 * @property {string} gradient2 - The second linear gradient for the overlay.
 * @property {string} className - optional extra css
 */

/**
 * BgMask component
 * @param {BgmaskProps} props - Component props.
 * @returns {JSX.Element} - Rendered component.
 */
export default function Bgmask({ className, url, gradient1, gradient2 }) {
  return (
    <>
      {/* Background Image */}
      <div className={`absolute inset-0 bg-cover ${className}`} style={{
        backgroundImage: `url(${url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }} />

      {/* First Linear Gradient Overlay */}
      <div className={`absolute inset-0 ${className}`} style={{
        backgroundImage: gradient1,
      }} />

      {/* Second Linear Gradient Overlay */}
      <div className={`absolute inset-0 ${className}`} style={{
        backgroundImage: gradient2,
      }} />
    </>
  );
}
