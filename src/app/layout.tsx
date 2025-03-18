import '@/styles/globals.css'
import { generalSans, clashGrotesk } from '@/styles/fonts'
import type { Viewport } from 'next'
import Head from 'next/head'

export const viewport: Viewport = {
	themeColor: '#2ca8df',
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
		<html lang="en">
			<Head>
				<meta name="apple-mobile-web-app-title" content="Viveza Textil" />
			</Head>
			<body
				className={`${clashGrotesk.variable} ${generalSans.variable} overflow-x-hidden bg-background selection:bg-primary selection:text-cyan-950`}
			>
				{children}
			</body>
		</html>
	)
}
