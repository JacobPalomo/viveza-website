'use client'

import { motion } from 'motion/react'

export interface Tag {
	label: string
	backgroundColor: string
	textColor: string
}

interface Props {
	id?: string
	backgroundImage: React.ReactNode
	Logo: React.ReactNode
	title: string
	description: string
	tags: Tag[]
	className?: string
}

const Marca: React.FC<Props> = ({
	id,
	backgroundImage,
	Logo,
	title,
	description,
	tags,
	className,
}) => {
	return (
		<motion.div
			id={id}
			initial={{
				transform: 'translateY(160px) scale(0.85)',
				filter: 'blur(16px)',
			}}
			whileInView={{ transform: 'translateY(0px) scale(1)', filter: 'blur(0)' }}
			transition={{
				duration: 0.3,
				delay: 0,
				ease: 'linear',
			}}
			className={`group relative h-[50vh] overflow-hidden rounded-3xl shadow-lg transition-all duration-300 ${className}`}
		>
			<div className='flex h-full w-full flex-col justify-end'>
				{backgroundImage}
				<div className='absolute z-[1] h-full w-full transition-colors duration-500 group-hover:bg-black/15 max-md:bg-black/15'></div>

				<div className='z-10 p-10 max-md:p-5'>
					<div className='relative -bottom-32 transition-all duration-500 group-hover:bottom-0 group-focus:bottom-0 max-md:bottom-0'>
						<h3 className='!mb-4'>{Logo}</h3>
						<h4 className='!mb-2 !text-2xl text-white'>{title}</h4>
					</div>

					<div className='relative -bottom-32 opacity-0 blur-sm transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100 group-hover:blur-none max-md:bottom-0 max-md:opacity-100 max-md:blur-none'>
						<p className='!mb-5 text-white'>{description}</p>

						<ul className='flex items-center justify-start gap-3'>
							{tags.map((tag, index) => (
								<li
									className={`flex items-center justify-center rounded-full px-2 py-1 text-center text-sm font-medium max-sm:px-2 max-sm:py-0 max-sm:!text-[10px]`}
									key={index}
									style={{
										color: tag.textColor,
										backgroundColor: tag.backgroundColor,
									}}
								>
									{tag.label}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default Marca
