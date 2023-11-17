/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      background: "var(--color-background)",
      tertiaire: "var(--color-tertiaire)",
      quaternary: "var(--color-quaternary)"
    },
    extend:{
      borderColor:{
        custom: "rgba(var(--color-offWhite), <alpha-value>)",
      },
      backgroundImage:{
        'linearColor': 'linear-gradient(257deg, rgba(252, 252, 253, 0.04) 4.68%, rgba(255, 255, 255, 0.00) 70.6%)',
      },
      boxShadow:{
        "custom": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      }
    }
  },
  plugins: [],
}
