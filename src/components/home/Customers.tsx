'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import BackdropBlur from '@/components/ui/BackdropBlur'

interface CustomerLogo {
	src: string
	alt: string
}

export default function Customers() {
	const cookiesAccepted =
		typeof window !== 'undefined' &&
		localStorage.getItem('cookiesAccepted') === 'true'

	const logos: CustomerLogo[] = [
		{
			src: '/api/cloudinary?url=f_auto,q_auto/cliente-coppel',
			alt: 'Logo del cliente Coppel',
		},
		{
			src: '/api/cloudinary?url=f_auto,q_auto/cliente-liverpool',
			alt: 'Logo del cliente Liverpool',
		},
		{
			src: '/api/cloudinary?url=f_auto,q_auto/cliente-milano',
			alt: 'Logo del cliente Milano',
		},
		{
			src: '/api/cloudinary?url=f_auto,q_auto/cliente-punto-blanco',
			alt: 'Logo del cliente Punto Blanco',
		},
		{
			src: '/api/cloudinary?url=f_auto,q_auto/cliente-sara-lee',
			alt: 'Logo del cliente Sara Lee',
		},
		{
			src: '/api/cloudinary?url=f_auto,q_auto/cliente-woolworth',
			alt: 'Logo del cliente Woolworth',
		},
	]

	return (
		<section className='customers-carousel relative z-10 w-full overflow-hidden bg-primary py-8'>
			<BackdropBlur
				direction='to right'
				className='absolute z-[3] h-full w-1/12'
			/>

			<motion.ul
				className='relative flex w-max'
				animate={{ x: ['0%', '-25%'] }}
				transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
			>
				{[...logos, ...logos, ...logos, ...logos]
					.filter((logo) => logo.src)
					.map((logo, index) => (
						<li
							key={logo.src.split('/')[logo.src.split('/').length - 1] + index}
							className='px-[24px]'
						>
							<div className='relative h-10 w-52 max-md:h-8 max-md:w-40 max-sm:h-6 max-sm:w-32'>
								<Image
									src={logo.src}
									alt={logo.alt}
									fill
									sizes='(max-width: 768px) 128px, (max-width: 1200px) 160px, 200px'
									quality={100}
									loading='lazy'
									unoptimized={!cookiesAccepted}
									className='object-contain'
								/>
							</div>
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
