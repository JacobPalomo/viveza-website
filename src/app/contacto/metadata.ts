import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Contáctanos | Viveza Textil',
	description:
		'Ponte en contacto con Viveza Textil para conocer más sobre nuestra ropa seamless. Estamos aquí para ayudarte.',
	keywords: [
		'Contacto Viveza Textil',
		'Soporte Viveza Textil',
		'Ropa Seamless',
		'Kinis',
		'Casmi',
		'TIAF',
		'Atención al cliente',
		'Contacto',
		'Ayuda',
		'Soporte',
		'Viveza',
		'Viveza Textil',
	],
	robots: 'index, follow',
	openGraph: {
		title: 'Contáctanos | Viveza Textil',
		description:
			'Comunícate con Viveza Textil para resolver tus dudas sobre nuestra ropa seamless.',
		url: 'https://tu-sitio.com/contacto',
		siteName: 'Viveza Textil',
		images: [
			{
				url: 'https://tu-sitio.com/contacto/imagen.jpg',
				width: 1200,
				height: 630,
				alt: 'Contacto Viveza Textil',
			},
		],
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Contáctanos | Viveza Textil',
		description:
			'Escríbenos para obtener más información sobre nuestros productos y servicios.',
		images: ['https://tu-sitio.com/contacto/imagen.jpg'],
	},
	alternates: {
		canonical: 'https://tu-sitio.com/contacto',
	},
}
