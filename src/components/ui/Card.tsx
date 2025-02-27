'use client'

import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface CardProps {
	title: string
	image: string | StaticImageData
	description: string
	alt: string
	label: string
	titlePosition?: 'left' | 'center'
	width: number
	height: number
}

export default function Card({
	title,
	image,
	width,
	height,
	description,
	alt,
	label,
	titlePosition = 'left',
}: CardProps) {
	const [pHeight, setPHeight] = useState<number>(0)
	const paragraphRef = useRef<HTMLDivElement>(null)

	function handleEnter() {
		const pElement = paragraphRef?.current
		if (!pElement) return

		pElement.style.opacity = '1'

		const parentPElement = pElement.parentElement
		if (!parentPElement) return

		parentPElement.style.transform = 'translateY(0)'
	}

	function handleLeave() {
		const pElement = paragraphRef?.current
		if (!pElement) return

		pElement.style.opacity = '0'

		const parentPElement = pElement.parentElement
		if (!parentPElement) return

		parentPElement.style.transform = `translateY(${pHeight + 28}px)`
	}

	useEffect(() => {
		const pElement = paragraphRef?.current
		if (!pElement) return

		const { height } = pElement.getBoundingClientRect()
		addEventListener('resize', () => {
			setPHeight(height)
		})
		setPHeight(height)
	}, [])

	return (
		<div
			className='relative h-full max-h-screen w-full overflow-hidden text-white'
			onMouseEnter={handleEnter}
			onMouseLeave={handleLeave}
		>
			<Image
				src={image}
				alt={alt}
				width={width}
				height={height}
				loading='lazy'
				aria-hidden
				className='h-full w-full object-cover'
			/>

			<div
				className='absolute bottom-9 left-1/2 w-full max-w-xl -translate-x-1/2 transition-transform duration-500 ease-out'
				style={{ transform: `translateY(${pHeight + 28}px)` }}
			>
				<div
					className={clsx([
						'!mb-2 flex w-full flex-col justify-center gap-0.5',
						{ 'items-center text-center': titlePosition === 'center' },
						{ 'items-start': titlePosition === 'left' },
					])}
				>
					<p className='w-full !text-sm uppercase'>{label}</p>
					<div className='h-[1.5px] w-12 bg-white' />
				</div>

				<div
					ref={paragraphRef}
					className='opacity-0 transition-all duration-600'
				>
					<h3
						className={clsx([
							'!mb-4',
							{ 'text-center': titlePosition === 'center' },
						])}
					>
						{title}
					</h3>
					<p className={clsx([{ 'text-center': titlePosition === 'center' }])}>
						{description}
					</p>
				</div>
			</div>
		</div>
	)
}
