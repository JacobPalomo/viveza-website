'use client'

import Link from 'next/link'
import MobileVideo from '@/components/home/hero/MobileVideo'
import { motion } from 'motion/react'

export default function Hero() {
	return (
		<section
			id='hero'
			className='before-radial-mask-image flex min-h-screen w-full flex-col items-center justify-center bg-background max-md:flex-col-reverse'
		>
			<MobileVideo />

			<div className='max-sm: absolute top-[50%] right-[10%] z-10 flex w-1/3 -translate-y-[50%] flex-col gap-10 max-md:right-[inherit] max-md:left-[10%] max-md:w-1/2 max-sm:relative max-sm:right-auto max-sm:left-auto max-sm:w-full max-sm:px-6'>
				<motion.h2
					initial={{ opacity: 0, filter: 'blur(10px)' }}
					animate={{ opacity: 1, filter: 'blur(0px)' }}
					transition={{ duration: 0.3 }}
					className='!text-6xl max-md:!text-5xl max-sm:!text-4xl'
				>
					Ropa que fluye contigo, porque{' '}
					<span className='text-[#00aae2]'>la comodidad no tiene bordes</span>.{' '}
					😉
				</motion.h2>

				<motion.div
					initial={{ scale: 0, originY: 1, originX: 0.2 }}
					animate={{ scale: 1 }}
					transition={{
						duration: 0.3,
						delay: 0.15,
						type: 'spring',
						stiffness: 200,
						damping: 16,
					}}
				>
					<Link
						href='/contacto'
						className='!w-[max-content] cursor-pointer rounded-lg !bg-[#00aae2] px-6 py-3 font-medium'
					>
						Ponerse en contacto
					</Link>
				</motion.div>
			</div>
		</section>
	)
}
