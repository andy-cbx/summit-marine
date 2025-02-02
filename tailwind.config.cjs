const defaultTheme = require('tailwindcss/defaultTheme');module.exports = {	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],	theme: {		container: {			center: true,			padding: '2rem',		},		screens: {			qhd: '1921px',			'4k': '2561px',		},		extend: {			backgroundImage: {				hero: "url('assets//sailboat_ocean_marine_sailing_london.jpg')",			},			fontFamily: {				primary: ['"Poppins"', ...defaultTheme.fontFamily.sans],				secondary: [...defaultTheme.fontFamily.sans],				variant: [...defaultTheme.fontFamily.sans],			},			colors: {				primary: {					grey: '#a6a8a1',				},				secondary: {					blue: '#80c4cf'				},				accent: {},			},			keyframes: {				'infinite-scroll': {					from: { transform: 'translateX(0%)' },					to: { transform: 'translateX(-50%)' },				},			},			animation: {				'infinite-scroll-horizontal':					'infinite-scroll 30s linear infinite',			},		},	},	plugins: [		require('tailwindcss-animate'),		require('@tailwindcss/typography'),	],};