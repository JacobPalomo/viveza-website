'use client'

import { FC, memo } from 'react'
import Image from 'next/image'
import Section from '@/components/ui/Section'
import Title from '@/components/ui/Title'
import VideoPlayer from '@/components/ui/VideoPlayer'

const VideoSection: FC = () => {
	return (
		<Section
			dataHeaderTheme='light'
			className='!h-screen overflow-hidden max-md:!h-max max-md:!min-h-max'
		>
			<Image
				src={`https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/tech/video/background.avif`}
				alt='background image'
				fill
				sizes='100vh'
				quality={100}
				priority
				className='absolute top-0 right-0 left-0 z-0 aspect-video h-full min-h-screen w-auto min-w-full object-cover transition-[object-position] duration-300 max-md:h-[150%] max-sm:h-full'
			/>

			<div className='absolute top-0 right-0 bottom-0 left-0 z-[2] h-full w-full bg-primary mix-blend-overlay backdrop-blur-xs' />

			<div className='absolute top-0 right-0 bottom-0 left-0 z-[2] h-full w-full bg-gradient-to-t from-black/0 from-0% via-black/50 via-50% to-black/0 to-100% max-md:bg-gradient-to-b max-md:from-black/50 max-md:via-black/50 max-md:via-25% max-md:to-black/0' />

			<div className='z-[3] grid h-full w-full grid-cols-2 gap-3 max-md:flex max-md:flex-col-reverse max-md:items-center max-md:justify-center max-md:gap-10 max-md:p-10 max-sm:px-5 max-sm:py-20'>
				<div className='flex w-full items-center justify-center self-center p-3 max-md:p-0'>
					<VideoPlayer
						source={
							'https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/tech/video/video.mp4'
						}
						poster={
							'https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/tech/video/video.thumbnail.avif'
						}
					/>
				</div>

				<div className='flex flex-col items-start justify-center gap-4 max-md:self-center max-sm:self-end'>
					<Title
						label='MAQUINARIA'
						title='Solo lo mejor'
						theme='light'
					/>
					<p className='!font-normal text-white'>
						El proceso de creación de interiores comienza con nuestras avanzadas
						máquinas de tejido circular. Con tecnología de última generación,
						cada máquina creando tejidos cómodos, resistentes y flexibles,
						perfectos para ofrecer el mejor rendimiento en cada movimiento.
					</p>
				</div>
			</div>
		</Section>
	)
}

export default memo(VideoSection)
