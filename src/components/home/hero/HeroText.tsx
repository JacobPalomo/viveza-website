'use client'

import { memo } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import dynamic from 'next/dynamic'

const CustomerLogos = dynamic(
	() => import('@/components/home/hero/CustomerLogos'),
	{ ssr: false },
)

const HeroText = () => (
	<div className='absolute top-[50%] right-[10%] z-10 flex w-1/3 -translate-y-[40%] flex-col gap-4 max-md:right-[5%] max-md:left-[inherit] max-md:w-1/2 max-sm:top-[inherit] max-sm:right-auto max-sm:-bottom-[2.5%] max-sm:left-auto max-sm:w-full max-sm:px-8'>
		<motion.div
			initial={{ opacity: 0, x: -100 }}
			animate={{ opacity: 1, x: 0 }}
			className='flex flex-col items-start justify-center gap-1'
		>
			<p className='!text-sm !tracking-widest text-white'>SEAMLESS</p>
			<div className='h-[1.5px] w-12 bg-white'></div>
		</motion.div>

		<h2 className='!mb-20 !text-6xl !font-normal text-white max-md:!mb-5 max-md:!text-5xl max-sm:!text-4xl'>
			<motion.span
				initial={{ opacity: 0, filter: 'blur(8px)' }}
				animate={{ opacity: 0.75, filter: 'blur(0px)' }}
				transition={{ duration: 0.3, delay: 0.5 }}
			>
				Ropa que fluye contigo, porque
			</motion.span>{' '}
			<motion.span
				initial={{ opacity: 0, filter: 'blur(8px)' }}
				animate={{ opacity: 1, filter: 'blur(0px)' }}
				transition={{ duration: 0.3, delay: 1 }}
			>
				la comodidad no tiene bordes
			</motion.span>
			<motion.span
				initial={{ opacity: 0, filter: 'blur(8px)' }}
				animate={{ opacity: 0.75, filter: 'blur(0px)' }}
				transition={{ duration: 0.3, delay: 1 }}
			>
				.
			</motion.span>{' '}
			<motion.span
				initial={{ opacity: 0, filter: 'blur(8px)' }}
				animate={{ opacity: 1, filter: 'blur(0px)' }}
				transition={{ duration: 0.3, delay: 1 }}
			>
				😉
			</motion.span>
		</h2>

		<motion.div
			initial={{ opacity: 0, filter: 'blur(8px)' }}
			animate={{ opacity: 1, filter: 'blur(0px)' }}
			transition={{ duration: 0.3, delay: 1.5 }}
			className='flex w-full flex-col items-start justify-center gap-4'
		>
			<div className='!mb-2 flex w-full flex-col items-end justify-center gap-1'>
				<p className='!text-sm !tracking-widest text-white'>
					NUESTROS COLABORADORES
				</p>
				<div className='h-[1.5px] w-12 bg-white'></div>
			</div>

			<CustomerLogos />

			<Link
				href='/contacto'
				className='text-md:text-base text-end text-sm text-white underline underline-offset-8'
			>
				¿Te gustaría colaborar?
			</Link>
		</motion.div>
	</div>
)

export default memo(HeroText)
