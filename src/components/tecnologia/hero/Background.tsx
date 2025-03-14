'use client'

import { FC, memo, RefObject } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'

interface Props {
	containerRef: RefObject<HTMLElement | null>
}

const MotionImage = motion(Image)

const Background: FC<Props> = ({ containerRef }) => {
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end start'],
	})

	const scaleValue = useTransform(scrollYProgress, [0, 1], [1, 1.5])

	return (
		<>
			<MotionImage
				src={`https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/tech/hero.avif`}
				alt='background image'
				fill
				sizes='100vh'
				quality={100}
				priority
				style={{ scale: scaleValue }}
				className='absolute top-0 right-0 left-0 z-0 aspect-video h-full min-h-screen w-auto min-w-full object-cover transition-[object-position] duration-300 max-md:h-[150%] max-sm:h-full max-sm:object-[65%_center]'
			/>

			<div className='absolute top-0 right-0 bottom-0 left-0 z-[1] h-full w-full bg-gradient-to-t from-black/35 from-0% to-black/0 to-50%'></div>
		</>
	)
}

export default memo(Background)
