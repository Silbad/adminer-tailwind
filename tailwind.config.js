/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./adminer.css',],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/typography')
    ]
}
