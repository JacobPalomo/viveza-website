import type { Metadata } from 'next'
import '@/styles/globals.css'
import { generalSans, clashGrotesk } from '@/styles/fonts'
import { Footer } from '@/components/sections/footer/Footer'
import Header from '@/components/sections/header/Header'

export const metadata: Metadata = {
	title: 'Viveza Textil | Ropa Seamless y Deportiva',
	description:
		'Pioneros en el diseño, fabricación y comercialización de ropa interior, exterior y deportiva mediante tecnología Seamless de la más alta calidad.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='es-MX'>
			<body
				className={`${clashGrotesk.variable} ${generalSans.variable} overflow-x-hidden bg-background selection:bg-[#00aae2] selection:text-cyan-950`}
			>
				<Header />

				{children}

				<Footer />
			</body>
		</html>
	)
}
