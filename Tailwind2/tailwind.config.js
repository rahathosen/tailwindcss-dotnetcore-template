const colors = require('tailwindcss/colors')

module.exports = {
   
    purge: [
        './Pages/**/*.cshtml',
        './Views/**/*.chstml'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                cyan: colors.cyan
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('tailwindcss-textshadow')
    ]
}