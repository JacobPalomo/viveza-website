'use client'

import { FC, memo, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import Title from './Title'

interface CardProps {
	label: string
	title: string
	description: string
	imageSrc: string
	imageAlt: string
	imageWidth: number
	imageHeight: number
	theme?: 'light' | 'dark'
	alignment?: 'left' | 'center' | 'right'
}

const Card: FC<CardProps> = ({
	label,
	title,
	description,
	imageAlt,
	imageHeight,
	imageSrc,
	imageWidth,
	theme = 'light',
	alignment = 'left',
}) => {
	const [pHeight, setPHeight] = useState<number>(0)
	const descriptionRef = useRef<HTMLDivElement>(null)

	function handleEnter() {
		const pElement = descriptionRef?.current
		if (!pElement) return

		pElement.style.opacity = '1'

		const parentPElement = pElement.parentElement
		if (!parentPElement) return

		parentPElement.style.transform = 'translateY(0)'
	}

	function handleLeave() {
		const pElement = descriptionRef?.current
		if (!pElement) return

		pElement.style.opacity = '0'

		const parentPElement = pElement.parentElement
		if (!parentPElement) return

		parentPElement.style.transform = `translateY(${pHeight + 28}px)`
	}

	useEffect(() => {
		const pElement = descriptionRef?.current
		if (!pElement) return

		const { height } = pElement.getBoundingClientRect()
		addEventListener('resize', () => {
			setPHeight(height)
		})
		setPHeight(height)
	}, [])

	return (
		<div
			className='relative h-full w-full overflow-hidden'
			onMouseEnter={handleEnter}
			onMouseLeave={handleLeave}
		>
			<div className='relative h-full w-full'>
				<div
					className='absolute right-0 bottom-0 left-0 z-10 h-full w-full'
					style={{
						backgroundImage:
							'linear-gradient(to top, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, 0) 100%)',
					}}
				/>
				<Image
					src={imageSrc}
					alt={imageAlt}
					width={imageWidth}
					height={imageHeight}
					loading='lazy'
					quality={100}
					aria-hidden
					className='h-full min-h-screen w-full object-cover brightness-110'
				/>
			</div>

			<div
				className='absolute right-0 bottom-0 left-0 z-20 flex h-auto w-full flex-col items-center justify-center gap-6 p-8 transition-all duration-600 max-sm:p-4'
				style={{ transform: `translateY(${pHeight + 28}px)` }}
			>
				<Title
					label={label}
					title={title}
					alignment={alignment}
					theme={theme}
				/>

				{/* Descripción */}
				<p
					ref={descriptionRef}
					className={clsx([
						'h-auto w-full transition-all duration-600',
						{ 'text-white': theme === 'light' },
						{ 'text-secondary': theme === 'dark' },
						{ 'text-left': alignment === 'left' },
						{ 'text-center': alignment === 'center' },
						{ 'text-right': alignment === 'right' },
					])}
				>
					{description}
				</p>
				{/* Fin  de la descripción */}
			</div>
		</div>
	)
}

export default memo(Card)
