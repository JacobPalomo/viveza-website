import '@/styles/globals.css'
import { Viewport } from 'next'
import { generalSans, clashGrotesk } from '@/styles/fonts'
import { Footer } from '@/components/ui/footer/Footer'
import Header from '@/components/ui/header/Header'

export const viewport: Viewport = {
	themeColor: '#052f4a',
	width: 'device-width',
	initialScale: 1.0,
	maximumScale: 1.0,
	userScalable: false,
	interactiveWidget: 'resizes-content',
	minimumScale: 1.0,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='es-MX'>
			<body
				className={`${clashGrotesk.variable} ${generalSans.variable} overflow-x-hidden bg-background selection:bg-primary selection:text-cyan-950`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
