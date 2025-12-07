/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-red': '#E31837',
                'primary-yellow': '#FFD200',
                'primary-navy': '#112e51',
                'gradient-orange': '#F96B2B',
            },
            fontFamily: {
                heading: ['"Anton"', 'sans-serif'], // Or similar heavy font
                body: ['"Roboto"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
