/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: "var(--font-sans)",
			serif: "var(--font-serif)",
			hero: "var(--font-hero)",
			cursiv: "var(--font-cursiv)",
		},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			colors: {
					purpleLight: "var(--purpleLight)",
					purpleDark: "var(--purpleDark)",
					darkGray: "var(--darkGray)",
					veryLightGray: "var(--veryLightGray)",
			},
		},
	},
	plugins: [],
}