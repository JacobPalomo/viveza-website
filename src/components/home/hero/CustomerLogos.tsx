'use client'

import { memo, useEffect, useMemo, useState } from 'react'
import { motion, Variants } from 'motion/react'
import Image from 'next/image'

const logos = [
	{
		src: 'https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/customers/coppel.svg',
		alt: 'Coppel',
	},
	{
		src: 'https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/customers/liverpool.svg',
		alt: 'Liverpool',
	},
	{
		src: 'https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/customers/milano.svg',
		alt: 'Milano',
	},
	{
		src: 'https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/customers/punto-blanco.svg',
		alt: 'Punto Blanco',
	},
	{
		src: 'https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/customers/sara-lee.svg',
		alt: 'Sara Lee',
	},
	{
		src: 'https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/customers/woolworth.svg',
		alt: 'Woolworth',
	},
]

const logosContainerVariants: Variants = {
	hidden: { opacity: 1 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
			duration: 0.8,
			ease: 'easeInOut',
		},
	},
}

const logoVariants: Variants = {
	hidden: { opacity: 0, filter: 'blur(8px)', y: 20 },
	show: {
		opacity: 1,
		filter: 'blur(0px)',
		y: 0,
		transition: {
			duration: 0.8,
			ease: 'easeInOut',
			repeat: Infinity,
			repeatType: 'reverse',
			repeatDelay: 1.5,
		},
	},
}

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	})

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}

		window.addEventListener('resize', handleResize)
		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowSize
}

const CustomerLogos = () => {
	const [startIndex, setStartIndex] = useState(0)
	const windowSize = useWindowSize()
	const logosToShow = (windowSize.width || 0) <= 768 ? 2 : 3
	const displayedLogos = useMemo(
		() => logos.slice(startIndex, startIndex + logosToShow),
		[startIndex, logosToShow],
	)

	useEffect(() => {
		setStartIndex(0)
		const interval = setInterval(() => {
			setStartIndex((prev) => (prev + logosToShow) % logos.length)
		}, 4000)
		return () => clearInterval(interval)
	}, [logosToShow])

	return (
		<motion.div
			key={startIndex}
			className='flex min-h-8 w-full items-center justify-between gap-8'
			variants={logosContainerVariants}
			initial='hidden'
			animate='show'
		>
			{displayedLogos.map((logo, index) => (
				<motion.div
					key={index}
					variants={logoVariants}
					className='relative h-8 w-40'
				>
					<Image
						src={logo.src}
						alt={logo.alt}
						fill
						sizes='(max-width: 768px) 50vw, (min-width: 769px) 33vw'
						className='object-contain'
						priority
					/>
				</motion.div>
			))}
		</motion.div>
	)
}

export default memo(CustomerLogos)
