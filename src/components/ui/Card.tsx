import { FC, memo } from 'react'
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
	return (
		<div className='relative h-full w-full'>
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
					className='card-image-height h-full w-full object-cover brightness-110'
				/>
			</div>

			<div className='absolute right-0 bottom-0 left-0 z-20 flex h-auto w-full flex-col items-center justify-center gap-6 p-8 max-sm:p-4'>
				<Title
					label={label}
					title={title}
					alignment={alignment}
					theme={theme}
				/>

				{/* Descripción */}
				<p
					className={clsx([
						'h-auto w-full',
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
