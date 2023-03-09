/** @type {import('tailwindcss').Config} */

module.exports = {
    mode: 'jit',

    content: [
        // Example content paths...
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    theme: {
        extend: {
            // pading, magin, grap

            keyframes: {
                spinners: {
                    from: {
                        transform: 'translateY(-50%) rotate(0)',
                    },
                    to: {
                        transform: 'translateY(-50%) rotate(360deg)',
                    },
                },
            },
            animation: {
                spinners: 'spin 1s linear infinite',
            },
        },

        screens: {
            tablet: '640px',
            // => @media (min-width: 640px) { ... }

            laptop: '1024px',
            // => @media (min-width: 1024px) { ... }

            desktop: '1280px',
            // => @media (min-width: 1280px) { ... }
        },
    },

    plugins: [require('tailwindcss')],
};
