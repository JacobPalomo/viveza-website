'use client'

import { memo } from 'react'
import { motion } from 'motion/react'

const HeroText = () => (
	<div className='absolute top-1/2 left-20 flex h-auto w-3/7 -translate-y-1/2 transform flex-col items-start justify-center gap-4 max-md:left-15 max-md:w-4/7 max-sm:top-full max-sm:left-0 max-sm:w-full max-sm:-translate-y-full max-sm:px-8 max-sm:pb-20'>
		<motion.div
			initial={{ opacity: 0, x: -100 }}
			animate={{ opacity: 1, x: 0 }}
			className='flex flex-col items-start justify-center gap-0.5'
		>
			<p className='!text-sm !tracking-widest text-white'>NOSOTROS</p>
			<div className='h-[1px] w-22 bg-white'></div>
		</motion.div>

		<h2 className='!mb-5 !text-hero !font-normal text-white'>
			<motion.span
				initial={{ opacity: 0, filter: 'blur(8px)' }}
				animate={{ opacity: 0.75, filter: 'blur(0px)' }}
				transition={{ duration: 0.3, delay: 0.5 }}
				className='max-sm:w-full'
			>
				Reinventamos nuestra historia,
			</motion.span>{' '}
			<motion.span
				initial={{ opacity: 0, filter: 'blur(8px)' }}
				animate={{ opacity: 1, filter: 'blur(0px)' }}
				transition={{ duration: 0.3, delay: 1 }}
				className='max-sm:w-full'
			>
				tejiendo un futuro lleno de innovación y pasión.
			</motion.span>
		</h2>
	</div>
)

export default memo(HeroText)
