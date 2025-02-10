'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

export function CallToAction() {
	return (
		<section>
			<div className='flex w-full flex-col items-center gap-10'>
				<div className='flex flex-col items-center'>
					<h6 className='leading-[1]'>¿Quieres experimientar la diferencia?</h6>
					<p className='font-clash-grotesk !text-6xl font-semibold max-sm:!text-5xl'>
						¡Comencemos!
					</p>
				</div>

				<motion.div
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.8 }}
					className={`h-12 w-max cursor-pointer justify-center rounded-lg bg-white px-6 text-secondary`}
				>
					<Link
						href='/contacto'
						className='relative flex h-full w-max items-center justify-center font-[500]'
					>
						Ponerse en contacto
					</Link>
				</motion.div>
			</div>
		</section>
	)
}
