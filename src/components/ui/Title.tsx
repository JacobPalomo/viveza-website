import clsx from 'clsx'
import { FC, memo } from 'react'

interface TitleProps {
	label: string
	title: string
	alignment?: 'left' | 'center' | 'right'
	theme?: 'light' | 'dark'
	className?: string
}

const Title: FC<TitleProps> = ({
	label,
	title,
	alignment = 'left',
	theme = 'dark',
	className,
}) => {
	return (
		<div className={clsx(['flex w-full flex-col gap-4', className])}>
			{/* Label */}
			<div
				className={clsx([
					'flex w-full flex-col justify-center gap-1',
					{ 'items-start': alignment === 'left' },
					{ 'items-center': alignment === 'center' },
					{ 'items-end': alignment === 'right' },
				])}
			>
				{/* Label content */}
				<span
					className={clsx([
						'text-label uppercase',
						{ 'text-white': theme === 'light' },
						{ 'text-secondary': theme === 'dark' },
					])}
				>
					{label}
				</span>
				{/* Fin del label content */}

				{/* Divisor */}
				<div
					className={clsx([
						'h-[0.09375rem] w-12',
						{ 'bg-white': theme === 'light' },
						{ 'bg-secondary': theme === 'dark' },
					])}
				/>
				{/* Fin del divisor */}
			</div>
			{/* Fin del label */}

			{/* Title */}
			<h3
				className={clsx([
					'w-full',
					{ 'text-white': theme === 'light' },
					{ 'text-secondary': theme === 'dark' },
					{ 'text-left': alignment === 'left' },
					{ 'text-center': alignment === 'center' },
					{ 'text-right': alignment === 'right' },
				])}
			>
				{title}
			</h3>
			{/* Fin del title */}
		</div>
	)
}

export default memo(Title)
