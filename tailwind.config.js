/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    corePlugins: {
        preflight: true,
    },
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                serif: ['"Noto Serif Display"', '"Noto Serif"', 'Georgia', 'serif'],
                sans: ['"Noto Sans"', 'system-ui', 'sans-serif'],
            },
            colors: {
                orange: {
                    50: '#FFF7ED',
                    100: '#FFEDD5',
                    200: '#FED7AA',
                    300: '#FDBA74',
                    400: '#FB923C',
                    500: '#E8630A',
                    600: '#D45A09',
                    700: '#C2410C',
                    800: '#9A3412',
                    900: '#7C2D12',
                },
                slate: {
                    700: '#313A44',
                    800: '#1E293B',
                },
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
