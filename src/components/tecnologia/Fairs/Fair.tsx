import { FC, memo, ReactNode } from 'react'
import Image from 'next/image'

interface FairProps {
	imgSrc: string
	imgAlt: string
	imgWidth: number
	imgHeight: number
	title: string | ReactNode
}

const Fair: FC<FairProps> = ({
	imgSrc,
	imgAlt,
	imgWidth,
	imgHeight,
	title,
}) => {
	return (
		<div className='flex aspect-square items-end justify-center gap-3'>
			<Image
				src={imgSrc}
				alt={imgAlt}
				width={imgWidth}
				height={imgHeight}
				loading='lazy'
				className='aspect-square h-50 w-50 object-cover max-md:h-auto max-md:w-full'
			/>

			<div
				className={`!mb-3 flex max-w-32 flex-col items-start justify-center gap-1 max-md:hidden`}
			>
				<p className={`!text-sm !font-normal text-secondary`}>{title}</p>
				<div
					className={`h-[1.5px] w-12 bg-secondary`}
					aria-hidden
				/>
			</div>
		</div>
	)
}

export default memo(Fair)
