import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '5iqutjjvwavjp1v7.public.blob.vercel-storage.com',
			},
		],
	},
}

export default nextConfig
