import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Viveza Textil | Ropa Seamless y Deportiva',
	description:
		'En Viveza Textil, somos pioneros en el diseño, fabricación y comercialización de ropa interior, exterior y deportiva con tecnología Seamless de la más alta calidad. Descubre nuestra línea de ropa sin costuras con las marcas Kinis, Casmi y TIAF, ideales para el deporte y la comodidad diaria. Innovación y calidad en cada prenda. ¡Conócenos!',
	keywords: [
		'Seamless',
		'Ropa Seamless',
		'Sin costuras',
		'Ropa sin costuras',
		'Viveza Textil',
		'Sport',
		'Deporte',
		'Ropa deportiva',
		'Ropa interior',
		'Underwear',
		'Kinis',
		'Casmi',
		'TIAF',
		'tiaf',
		'Tiaf',
		'Viveza',
	],
	authors: [{ name: 'Viveza Textil' }],
	robots: 'index, follow',
	openGraph: {
		title: 'Viveza Textil - Ropa Seamless de Alta Calidad',
		description:
			'Descubre la innovación en ropa sin costuras con Viveza Textil. Ropa interior, exterior y deportiva con tecnología Seamless. Conoce nuestras marcas Kinis, Casmi y TIAF.',
		url: 'URL_DE_TU_SITIO',
		siteName: 'Viveza Textil',
		images: [
			// {
			// 	url: 'URL_DE_TU_IMAGEN',
			// 	width: 1200,
			// 	height: 630,
			// 	alt: 'Viveza Textil - Ropa Seamless de Alta Calidad',
			// },
		],
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Viveza Textil - Ropa Seamless de Alta Calidad',
		description:
			'Innovación y comodidad en ropa sin costuras. Conoce Viveza Textil y sus marcas Kinis, Casmi y TIAF.',
		// images: ['URL_DE_TU_IMAGEN'],
	},
	alternates: {
		canonical: '',
	},
	// metadataBase: new URL('https://tu-sitio.com'),
	creator: 'Viveza Textil',
	publisher: 'Viveza Textil',
	icons: [
		// { rel: 'icon', url: '/favicon.ico' },
		// { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
	],
	appleWebApp: {
		capable: true,
		statusBarStyle: 'black-translucent',
		title: 'Viveza Textil',
	},
}
