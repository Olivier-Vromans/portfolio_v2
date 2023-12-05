/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}', "./content/**/*.mdx",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: 'rgba(var(--color-primary), <alpha-value>)',
        secondary: 'rgba(var(--color-secondary), <alpha-value>)',
        background: "rgba(var(--color-background), <alpha-value>)",
        tertiaire: "rgba(var(--color-tertiaire), <alpha-value>)",
        quaternary: "rgba(var(--color-quaternary), <alpha-value>)"
      },
      fontFamily: {
        noto: ['Noto Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        kaisei: ['Kaisei Tokumin', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      borderColor: {
        custom: "rgba(var(--color-offWhite), <alpha-value>)",
      },
      backgroundImage: {
        'linearColor': 'linear-gradient(257deg, rgba(252, 252, 253, 0.04) 4.68%, rgba(255, 255, 255, 0.00) 70.6%)',
      },
      boxShadow: {
        "custom": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      },

    }
  },
  plugins: [],
}
