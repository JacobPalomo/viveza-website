'use client'

import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'

const ParallaxImage = ({
	src,
	alt,
	width,
	height,
	className,
	// parentRef
}: {
	src: string
	alt: string
	width: number
	height: number
	className?: string
	// parentRef: RefObject<HTMLDivElement | null>
}) => {
	const ref = useRef<HTMLDivElement>(null)
	// Usamos useScroll para obtener la posición del scroll
	const { scrollYProgress } = useScroll({ target: ref }) // 'scrollYProgress' da el progreso de scroll como valor entre 0 y 1

	// Usamos useSpring para suavizar la animación del parallax
	const y = useSpring(
		useTransform(
			scrollYProgress,
			[0, 0.25, 0.5, 0.75, 1],
			[-25, -12.5, 0, 12.5, 25],
		), // Transforma el scrollY a un valor de movimiento
		{
			restDelta: 0.5,
			stiffness: 80, // Resistencia: controla cuán rígida es la animación
			damping: 25, // Amortiguación: controla cuán suave es la animación al final
		},
	)

	return (
		<motion.div
			ref={ref}
			className={className}
			style={{
				position: 'relative',
				overflow: 'hidden',
				width: '100%',
				height: '100%', // Ajusta la altura del contenedor
				minHeight: '100vh',
			}}
		>
			<motion.div
				style={{
					y, // Aplica la transformación suavizada con useSpring
					width: '100%',
					height: '100%',
					position: 'absolute',
					top: 0,
					left: 0,
				}}
			>
				<Image
					src={src}
					alt={alt}
					width={width}
					height={height}
					loading='lazy'
					quality={90}
					style={{
						objectFit: 'cover', // La imagen cubre el área del contenedor
						width: '100%',
						height: '100%',
						scale: 1.06, // Aumentamos el scale para evitar que se vea el fondo
						transition: 'transform 0.2s ease-out', // Suaviza el efecto de escala
					}}
				/>
			</motion.div>
		</motion.div>
	)
}

export default ParallaxImage
