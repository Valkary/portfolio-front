/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './src/pages/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}'
    ],
	theme: {
		extend: {},
	},
	plugins: [],
}
