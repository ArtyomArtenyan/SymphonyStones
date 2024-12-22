/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primaryLightBlue: 'rgb(71 104 142)',
			},
			fontFamily: {
				DejaVu: ['DejaVu', 'sans-serif'],
			},
			fontFamily: {
				ArmOmega: ['ArmOmega', 'sans-serif'],
			},
			screens: {
				'max-w-2xl-1440': { max: '1440px' },
				'max-w-xl-1024': { max: '1024px' },
			},
		},
	},
	plugins: [],
};
