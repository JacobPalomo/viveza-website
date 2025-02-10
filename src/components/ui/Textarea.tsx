'use client'

import clsx from 'clsx'
import { motion } from 'motion/react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface Props {
	id: string
	label: string
	placeholder?: string
	cols?: number
	rows?: number
	register: UseFormRegisterReturn<string>
	errorMessage?: string
	maxLength?: number
}

const Textarea: React.FC<Props> = ({
	id,
	label,
	register,
	placeholder,
	cols,
	rows,
	errorMessage,
	maxLength,
}) => {
	return (
		<div className='flex w-full flex-col items-start justify-center gap-1'>
			<label
				htmlFor={id}
				className='flex w-full cursor-text flex-col-reverse items-start justify-start gap-1 !font-clash-grotesk'
			>
				<textarea
					id={id}
					placeholder={placeholder}
					cols={cols}
					rows={rows}
					{...register}
					maxLength={maxLength}
					className={clsx([
						'peer h-auto w-full resize-none rounded-lg border-[1.5px] border-gray-300 px-3 py-2 ring-4 ring-transparent outline-0 transition-all duration-300 focus:bg-primary/5 focus:ring-primary/20',
						{
							'border-red-300 bg-red-500/5 text-red-600 selection:bg-red-500 selection:text-red-100 focus:border-red-500 focus:bg-red-500/5 focus:ring-red-500/20':
								errorMessage,
						},
						{ 'focus:border-primary': !errorMessage },
					])}
				/>
				<span
					className={clsx([
						'text-base font-medium text-gray-400 transition-colors duration-200',
						{ 'text-red-600': errorMessage },
						{ 'peer-focus:text-primary': !errorMessage },
					])}
				>
					{label}
				</span>
			</label>

			<motion.p
				initial={{ opacity: 0, height: 0 }}
				animate={{
					opacity: errorMessage ? 1 : 0,
					height: errorMessage ? 'auto' : 0,
				}}
				transition={{ duration: 0.2 }}
				className='max-w-full rounded-lg px-2 text-left !text-base text-red-600'
			>
				{errorMessage}
			</motion.p>
		</div>
	)
}

export default Textarea
