'use client'

import { memo } from 'react'
import { motion } from 'motion/react'
import dynamic from 'next/dynamic'

const CustomerLogos = dynamic(
	() => import('@/components/home/hero/CustomerLogos'),
	{ ssr: false },
)

const HeroText = () => (
	<div className='absolute top-[50%] left-[10%] z-10 flex w-3/7 -translate-y-[40%] flex-col gap-4 max-md:right-[inherit] max-md:left-[5%] max-md:w-1/2 max-sm:top-[inherit] max-sm:right-auto max-sm:-bottom-[2.5%] max-sm:left-auto max-sm:w-full max-sm:px-8'>
		<motion.div
			initial={{ opacity: 0, x: -100 }}
			animate={{ opacity: 1, x: 0 }}
			className='gap-.5 flex flex-col items-start justify-center'
		>
			<p className='!text-sm !tracking-widest text-secondary'>NOSOTROS</p>
			<div className='h-[1px] w-22 bg-secondary'></div>
		</motion.div>

		<h2 className='!mb-5 !text-hero !font-normal text-secondary mix-blend-difference max-md:!mb-5'>
			<motion.span
				initial={{ opacity: 0, filter: 'blur(8px)' }}
				animate={{ opacity: 0.75, filter: 'blur(0px)' }}
				transition={{ duration: 0.3, delay: 0.5 }}
			>
				Reinventamos nuestra historia,
			</motion.span>{' '}
			<motion.span
				initial={{ opacity: 0, filter: 'blur(8px)' }}
				animate={{ opacity: 1, filter: 'blur(0px)' }}
				transition={{ duration: 0.3, delay: 1 }}
			>
				tejiendo un futuro lleno de innovación y pasión.
			</motion.span>
		</h2>
	</div>
)

export default memo(HeroText)
