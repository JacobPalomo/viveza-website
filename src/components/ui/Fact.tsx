'use client'

import { FC, memo, useRef } from 'react'
import { motion, useScroll, cubicBezier, useTransform } from 'motion/react'
import Section from '@/components/ui/Section'
import Image from 'next/image'
import clsx from 'clsx'

interface FactOrnament {
	src: string
	width: number
	height: number
	className?: string
}

type FactOrnaments = { ornament1: FactOrnament; ornament2: FactOrnament }

interface FactProps {
	ornaments?: FactOrnaments
	content: string
}

const Fact: FC<FactProps> = ({ ornaments, content }) => {
	const containerRef = useRef<HTMLDivElement>(null)

	// Calcula el progreso del scroll relativo a la sección
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['75% end', 'end start'],
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
	const opacityVal = useTransform(scrollYProgress, [0.5, 1], [1, 0])

	return (
		<Section className='grid h-max'>
			{/* Contenedor del Fact */}
			<motion.div
				ref={containerRef}
				className='scroll-text-reveal relative flex h-full w-full flex-col items-center justify-center'
				style={{ opacity: opacityVal }}
			>
				{/* Tijeras */}
				<div className='!mb-10 self-start pl-10'>
					{ornaments && (
						<Image
							src={ornaments.ornament1.src}
							alt='Website Ornament'
							width={ornaments.ornament1.width}
							height={ornaments.ornament1.height}
							loading='lazy'
							className={clsx(['w-96', ornaments.ornament1.className])}
						/>
					)}
				</div>
				{/* Fin de las tijeras */}

				{/* Frase o mensaje */}
				<p
					className='w-6/7 !text-fact !font-medium !tracking-tight uppercase max-md:w-8/9 max-sm:w-full'
					style={{ fontFamily: 'var(--clash-grotesk-font)' }}
				>
					<motion.span
						style={{
							backgroundSize: bgSize,
						}}
					>
						{content}
					</motion.span>
				</p>
				{/* Fin de la frase o el mensaje */}

				{/* Cinta metrica */}
				<div className='!mt-10 self-end pr-10'>
					{ornaments && (
						<Image
							src={ornaments.ornament2.src}
							alt='Website Ornament'
							width={ornaments.ornament2.width}
							height={ornaments.ornament2.height}
							loading='lazy'
							className={clsx(['w-96', ornaments.ornament2.className])}
						/>
					)}
				</div>
				{/* Fin de la cinta metrica */}
			</motion.div>
			{/* Fin del contenedor del Fact */}
		</Section>
	)
}

export default memo(Fact)
