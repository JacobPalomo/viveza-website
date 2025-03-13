'use client'

import Section from '@/components/ui/Section'
import VideoPlayer from '@/components/ui/VideoPlayer'

export default function Video() {
	return (
		<Section
			className='h-screen pb-3'
			dataHeaderTheme='light'
		>
			<VideoPlayer
				source='https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/us/video.mp4'
				poster='https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/us/video.thumbnail.avif'
			/>
		</Section>
	)
}
