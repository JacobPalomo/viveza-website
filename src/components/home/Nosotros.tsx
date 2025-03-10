'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { RiArrowRightUpLine } from 'react-icons/ri'
import Section from '@/components/ui/Section'
import Title from '@/components/ui/Title'

export default function Nosotros() {
	return (
		<Section
			className='h-screen'
			dataHeaderTheme='light'
		>
			<video
				autoPlay
				loop
				muted
				playsInline
				preload='auto'
				poster='https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/us/video.thumbnail.avif'
				className='z-10 h-full w-full bg-background object-cover'
			>
				<source
					src='https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/us/video.mp4'
					type='video/mp4'
				/>
				Tu navegador no es compatible con el video.
			</video>

			<div className='absolute top-0 right-0 bottom-0 left-0 z-[15] h-full w-full bg-gradient-to-t from-black/75 from-0% to-black/0 to-100%' />

			<motion.div
				initial={{ filter: 'blur(8px)', opacity: 0.25 }}
				whileInView={{ filter: 'blur(0)', opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.1 }}
				className='absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 transform flex-col items-center justify-center gap-6 text-white'
			>
				<Title
					label='NOSOTROS'
					title='El origen de la comodidad'
					alignment='center'
					theme='light'
				/>

				<Link
					href='/nosotros'
					className='flex h-max w-max items-center justify-end gap-2 rounded-full border-[1.5px] border-white py-1 pr-2 pl-3 text-base'
				>
					<span className='uppercase'>Conoce más</span>

					<RiArrowRightUpLine
						size={24}
						color='white'
					/>
				</Link>
			</motion.div>
		</Section>
	)
}
