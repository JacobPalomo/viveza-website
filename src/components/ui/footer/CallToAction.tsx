'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { RiArrowRightUpLine } from 'react-icons/ri'

export function CallToAction() {
	return (
		<section>
			<div className='flex w-full flex-col items-center gap-10'>
				<div className='flex flex-col items-center'>
					<h6 className='leading-[1] !font-light tracking-wider text-white/85'>
						¿Quieres experimientar la diferencia?
					</h6>
					<p className='font-clash-grotesk !text-6xl !font-normal max-sm:!text-5xl'>
						¡Comencemos!
					</p>
				</div>

				<motion.div
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className={`h-max w-max cursor-pointer justify-center rounded-full bg-white py-2 pr-3 pl-4 text-base text-secondary`}
				>
					<Link
						href='/contacto'
						className='relative flex h-full w-max items-center justify-center gap-2 font-[500] uppercase'
					>
						Ponerse en contacto
						<RiArrowRightUpLine
							size={24}
							color='var(--color-secondary)'
						/>
					</Link>
				</motion.div>
			</div>
		</section>
	)
}
