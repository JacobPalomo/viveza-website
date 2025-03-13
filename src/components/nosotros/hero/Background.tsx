'use client'

import Image from 'next/image'
import { FC, memo, RefObject } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

interface Props {
	containerRef: RefObject<HTMLElement | null>
}

const MotionImage = motion.create(Image)

// TODO - crear componente Hero para reutilizar en otras páginas
const HeroBackground: FC<Props> = ({ containerRef }) => {
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end start'],
	})

	const scaleValue = useTransform(scrollYProgress, [0, 1], [1, 1.5])

	return (
		<>
			<MotionImage
				src='https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/us/hero.avif'
				alt='background image'
				fill
				sizes='100vw'
				quality={100}
				priority
				style={{ scale: scaleValue }}
				className='absolute top-0 right-0 left-0 z-0 aspect-video h-full min-h-screen w-auto min-w-full object-cover object-[76%_center] max-md:h-[150%] max-sm:h-full'
			/>

			<div className='absolute inset-0 top-0 left-0 h-full w-full bg-linear-to-t from-black/35 from-0% to-black/0 to-50%' />
		</>
	)
}

export default memo(HeroBackground)
