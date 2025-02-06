import localFont from 'next/font/local'

const generalSans = localFont({
	src: [
		{
			path: '../fonts/GeneralSans-Variable.ttf',
			style: 'normal',
		},
		{
			path: '../fonts/GeneralSans-VariableItalic.ttf',
			style: 'italic',
		},
	],
	variable: '--general-sans-font',
	display: 'swap',
})

const clashGrotesk = localFont({
	src: '../fonts/ClashGrotesk-Variable.ttf',
	style: 'normal',
	variable: '--clash-grotesk-font',
	display: 'swap',
})

export { generalSans, clashGrotesk }
