import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#00BB47', // Vibrant Green
                secondary: '#93C47D', // Sage Green
                accent: '#FABE28', // Warm Yellow/Gold
                background: '#F6F4E8', // Warm Cream
                dark: '#1F2937', // Dark Gray
            },
            fontFamily: {
                sans: ['var(--font-poppins)', 'sans-serif'],
            },
            animation: {
                scroll: 'scroll 40s linear infinite',
                'scroll-reverse': 'scroll-reverse 40s linear infinite',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'scroll-reverse': {
                    '0%': { transform: 'translateX(-50%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },
        },
    },
    plugins: [],
}
export default config
