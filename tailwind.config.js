/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // New Palette
                'primary-bg': '#2F3338',   // Dark gray
                'secondary-bg': '#3A3E43', // Panel gray
                'clean-white': '#FFFFFF',  // Highlight / accents
                'text-secondary': '#E6E6E6', // Light gray
                'neutral-accent': '#6C7075', // Mid gray
                'soft-highlight': '#8FA0AE', // Blue-gray

                // Keeping old keys mapped to new values or sensible fallbacks where direct replacement isn't done yet, 
                // but aim is to use the new keys in code.
                'primary-navy': '#FFFFFF', // Mapping old navy text to white for now so existing classes don't disappear
                'primary-red': '#8FA0AE',  // Mapping old red to soft highlight
                'primary-yellow': '#6C7075', // Mapping yellow to neutral accent
                'gradient-orange': '#8FA0AE',
            },
            fontFamily: {
                heading: ['"Anton"', 'sans-serif'],
                body: ['"Roboto"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
