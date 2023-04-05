import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{tsx,jsx}', './public/index.html'],
	darkMode: ['class', '[data-mode="dark"]'],
	theme: {
		extend: {
			spacing: {
				1.25: '0.3125rem', // 5px
				3.5: '0.875rem' // 14px
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: []
} satisfies Config;
