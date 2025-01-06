/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primaryLightBlue: 'rgb(71 104 142)',
				primaryDarkBlue: 'rgb(44 63 84)',
				deepWhite: 'rgb(250 250 250)',
				deepDarkBlue: 'rgb(16 23 31)',
			},
			fontFamily: {
				DejaVu: ['DejaVu', 'sans-serif'],
				ArmOmega: ['ArmOmega', 'sans-serif'],
			},
			screens: {
				'max-w-2xl-1440': { max: '1440px' },
				'max-w-xl-1024': { max: '1024px' },
				'max-w-sm-600': { max: '600px' },
				'max-w-ss-480': { max: '480px' },
			},
		},
	},
	plugins: [],
};
