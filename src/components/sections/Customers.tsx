'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import coppel from '@/../public/logos/clientes/coppel.svg'
import liverpool from '@/../public/logos/clientes/liverpool.svg'
import milano from '@/../public/logos/clientes/milano.svg'
import puntoBlanco from '@/../public/logos/clientes/punto-blanco.svg'
import saraLee from '@/../public/logos/clientes/sara-lee.svg'
import woolworth from '@/../public/logos/clientes/woolworth.svg'
import BackdropBlur from '../ui/BackdropBlur'

export default function Customers() {
	const logos = [coppel, liverpool, milano, puntoBlanco, saraLee, woolworth]

	return (
		<section className='customers-carousel relative z-[2] w-full overflow-hidden bg-[#00aae2] py-8'>
			<BackdropBlur
				direction='to right'
				className='absolute z-[3] h-full w-1/12'
			/>

			<motion.ul
				className='relative flex w-max'
				animate={{ x: ['0%', '-25%'] }}
				transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
			>
				{[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
					<li
						key={index}
						className='px-[24px]'
					>
						<Image
							src={logo}
							alt={`Client ${index}`}
							quality={100}
							loading='lazy'
							className='h-10 w-auto max-md:h-8 max-sm:h-6'
						/>
					</li>
				))}
			</motion.ul>

			<BackdropBlur
				direction='to left'
				className='absolute z-[3] h-full w-1/12'
			/>
		</section>
	)
}
