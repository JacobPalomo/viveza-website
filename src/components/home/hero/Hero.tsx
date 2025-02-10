'use client'

import MobileVideo from '@/components/home/hero/MobileVideo'
import { motion } from 'motion/react'
import LinkButton from '@/components/ui/LinkButton'

export default function Hero() {
	return (
		<section
			id='hero'
			className='before-radial-mask-image flex min-h-screen w-full flex-col items-center justify-center bg-background max-md:flex-col-reverse'
		>
			<MobileVideo />

			<div className='absolute top-[50%] right-[10%] z-10 flex w-1/3 -translate-y-[50%] flex-col gap-10 max-md:right-[5%] max-md:left-[inherit] max-md:w-1/2 max-sm:relative max-sm:right-auto max-sm:left-auto max-sm:w-full max-sm:px-8'>
				<motion.h2
					initial={{ opacity: 0, filter: 'blur(10px)' }}
					animate={{ opacity: 1, filter: 'blur(0px)' }}
					transition={{ duration: 0.3 }}
					className='!text-6xl max-md:!text-5xl max-sm:!text-4xl'
				>
					Ropa que fluye contigo, porque{' '}
					<span className='text-primary'>la comodidad no tiene bordes</span>. 😉
				</motion.h2>

				<LinkButton href='/contacto'>Ponerse en contacto</LinkButton>
			</div>
		</section>
	)
}
