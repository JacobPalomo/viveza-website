'use client'

import { useScroll, useTransform, motion } from 'motion/react'
import Image from 'next/image'
import { memo, RefObject } from 'react'

interface Props {
	containerRef: RefObject<HTMLElement | null>
}

const MotionImage = motion.create(Image)

const HeroBackground = ({ containerRef }: Props) => {
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end start'],
	})

	const scaleValue = useTransform(scrollYProgress, [0.25, 1], [1, 1.5])

	return (
		<MotionImage
			src={`https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/home/hero.avif`}
			alt='background image'
			fill
			sizes='100vw'
			quality={100}
			priority
			style={{ scale: scaleValue }}
			className='absolute top-0 right-0 left-0 z-0 aspect-video h-full min-h-screen w-auto min-w-full object-cover object-[right_42%] max-md:h-[150%] max-sm:h-full'
		/>
	)
}

export default memo(HeroBackground)
