module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                pink: {
                    1: '#fc1c7d',
                },
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
