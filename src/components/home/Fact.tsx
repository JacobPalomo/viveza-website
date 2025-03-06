'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { cubicBezier } from 'motion/react'
import Image from 'next/image'
import cintaMetrica from '@/../public/cinta-metrica.png'

export default function Dato() {
	const containerRef = useRef<HTMLDivElement>(null)

	// Calcula el progreso del scroll relativo a la sección
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end'],
	})

	// Función de easing (lineal en este caso: cubic-bezier(0,0,1,1))
	const easeFn = cubicBezier(0, 0, 1, 1)

	// Mapea el progreso (desde 0.01 hasta 1) a un backgroundSize de 0% a 100%
	const bgSize = useTransform(scrollYProgress, (v) => {
		let progress = (v - 0.01) / (1 - 0.01)
		progress = Math.min(Math.max(progress, 0), 1)
		const eased = easeFn(progress)
		return `${eased * 1.9 * 100}% 100%`
	})

	// Modificamos el scale para que, al acercarse al final (0.999 a 1),
	// se reduzca de 1 a 0.8 en lugar de 1 a 0.
	const opacityVal = useTransform(scrollYProgress, [0.4, 1], [1, 0])

	return (
		<section
			ref={containerRef}
			className='scroll-text-reveal relative flex h-[250vh] w-full flex-col items-center justify-start gap-25 pt-20 pb-20 max-sm:pt-0 max-sm:pb-10'
		>
			<p className='sticky top-40 w-3/5 !text-4xl leading-10 !font-medium max-md:top-35 max-md:w-4/5 max-sm:top-15 max-sm:w-full max-sm:px-8 max-sm:py-20 max-sm:!text-3xl max-sm:leading-10 max-2xs:!text-2xl max-2xs:leading-0'>
				<motion.span
					className='transition-opacity duration-100'
					style={{
						backgroundSize: bgSize,
						opacity: opacityVal,
					}}
				>
					Los expertos en moda entienden que la dedicación al detalle es clave.
					Es la diferencia entre nosotros y los que simplemente siguen
					tendencias.
				</motion.span>
			</p>

			<div className='sticky top-80 left-0 max-md:top-[65vw] max-sm:top-[100vw] max-xs:top-[125vw]'>
				<Image
					src={cintaMetrica}
					alt='Boxer'
					width={1333}
					height={2000}
					loading='lazy'
					aria-hidden
					className='h-auto w-full object-cover max-md:h-[110vw] max-sm:w-auto'
				/>
			</div>
		</section>
	)
}
