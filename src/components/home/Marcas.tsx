'use client'

import CasmiLogo from '@/components/ui/logos/Casmi'
import KinisLogo from '@/components/ui/logos/Kinis'
import TiafLogo from '@/components/ui/logos/Tiaf'
import TitleTag from '@/components/ui/TitleTag'
import ParallaxImage from '@/components/ui/ParallaxImage'
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

type Section = 'intro' | 'tiaf' | 'kinis' | 'casmi'

interface MarcasProps {
	timestamp: string
}

export default function Marcas({ timestamp }: MarcasProps) {
	// Referencia a la sección para mapear el scroll en X
	const sectionRef = useRef<HTMLElement>(null)
	// Referencia al contenedor del texto para centrarlo inicialmente
	const textRef = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start start', 'end end'],
	})

	// Calculamos el offset inicial en X para centrar el contenedor de texto
	const [initialX, setInitialX] = useState(0)
	useEffect(() => {
		if (textRef.current) {
			const elementWidth = textRef.current.offsetWidth
			const viewportWidth = window.innerWidth
			setInitialX((viewportWidth - elementWidth) / 2)
		}
	}, [textRef.current])

	/**
	 * Mapeamos el scroll para que:
	 * - Cuando scrollYProgress = 0, el texto tenga x = initialX - 96 (cerca de centrado)
	 * - Cuando scrollYProgress = 0.1, el texto tenga x = 0 (alineado a la izquierda)
	 */
	const animatedX = useTransform(scrollYProgress, [0, 0.1], [initialX - 96, 0])

	// Estados para el contenido cambiante
	const [activeSection, setActiveSection] = useState<Section>('intro')
	const [displayedSection, setDisplayedSection] = useState<Section>('intro')
	// Estado auxiliar para saber si al menos una imagen está intersectando
	const [hasIntersecting, setHasIntersecting] = useState(false)

	// Refs para cada contenedor de imagen
	const refTiaf = useRef<HTMLDivElement | null>(null)
	const refKinis = useRef<HTMLDivElement | null>(null)
	const refCasmi = useRef<HTMLDivElement | null>(null)

	// IntersectionObserver para detectar qué imagen se encuentra en vista y actualizar activeSection
	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.25,
		}
		const observer = new IntersectionObserver((entries) => {
			const intersectingEntries = entries.filter(
				(entry) => entry.isIntersecting,
			)
			if (intersectingEntries.length > 0) {
				setHasIntersecting(true)
				// Seleccionamos el entry con mayor ratio de intersección
				const bestEntry = intersectingEntries.reduce((prev, curr) =>
					prev.intersectionRatio > curr.intersectionRatio ? prev : curr,
				)
				if (bestEntry.target === refTiaf.current) {
					setActiveSection('tiaf')
				} else if (bestEntry.target === refKinis.current) {
					setActiveSection('kinis')
				} else if (bestEntry.target === refCasmi.current) {
					setActiveSection('casmi')
				}
			} else {
				setHasIntersecting(false)
			}
		}, options)

		if (refTiaf.current) observer.observe(refTiaf.current)
		if (refKinis.current) observer.observe(refKinis.current)
		if (refCasmi.current) observer.observe(refCasmi.current)

		return () => observer.disconnect()
	}, [])

	// Suscribirse a scrollYProgress para actualizar activeSection si no hay imagen intersectando
	useEffect(() => {
		const unsubscribe = scrollYProgress.onChange((progress) => {
			if (!hasIntersecting) {
				if (progress < 0.1) {
					setActiveSection('intro')
				} else if (progress > 0.9) {
					setActiveSection('casmi')
				}
			}
		})
		return () => unsubscribe()
	}, [scrollYProgress, hasIntersecting])

	// Actualizamos displayedSection con un retardo (300ms) para que se ejecute la animación
	useEffect(() => {
		if (activeSection !== displayedSection) {
			const timeout = setTimeout(() => {
				setDisplayedSection(activeSection)
			}, 300)
			return () => clearTimeout(timeout)
		}
	}, [activeSection, displayedSection])

	// Función que retorna el contenido según la sección que se muestra
	const getContent = () => {
		switch (displayedSection) {
			case 'tiaf':
				return {
					title: (
						<TiafLogo
							color='var(--color-tiaf)'
							className='!mb-1'
						/>
					),
					subtitle: 'Descubre la innovación de TIAF',
					description: 'Aquí va la descripción exclusiva para TIAF...',
				}
			case 'kinis':
				return {
					title: (
						<KinisLogo
							color='var(--color-kinis)'
							className='!mb-1'
						/>
					),
					subtitle: 'Descubre la energía de KINIS',
					description: 'Aquí va la descripción exclusiva para KINIS...',
				}
			case 'casmi':
				return {
					title: (
						<CasmiLogo
							color='var(--color-casmi)'
							className='!mb-1'
						/>
					),
					subtitle: 'Descubre la elegancia de CASMI',
					description: 'Aquí va la descripción exclusiva para CASMI...',
				}
			default:
				return {
					title: 'MARCAS',
					subtitle: 'Descubre nuestra esencia',
					description: (
						<span>
							Nos enorgullece ofrecer productos que combinan{' '}
							<strong>innovación</strong>, <strong>calidad</strong> y diseño a
							través de nuestras marcas insignia: <strong>Casmi</strong>,{' '}
							<strong>Kinis</strong> y <strong>TIAF</strong>. Cada una está
							diseñada para satisfacer necesidades específicas, abarcando desde{' '}
							<strong>ropa interior </strong>
							femenina hasta <strong>ropa deportiva</strong> de alto
							rendimiento.
						</span>
					),
				}
		}
	}

	const { title, subtitle, description } = getContent()

	// Variantes para el efecto de entrada/salida del texto (blur y fade)
	const textVariants = {
		initial: { opacity: 0, filter: 'blur(4px)' },
		animate: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.3 } },
		exit: { opacity: 0, filter: 'blur(4px)', transition: { duration: 0.3 } },
	}

	return (
		<section
			id='marcas'
			ref={sectionRef}
			className='relative grid min-h-screen w-full grid-cols-2 grid-rows-4'
		>
			{/* Contenedor del texto */}
			<div className='relative col-start-1 col-end-2 row-start-1 row-end-5 justify-self-center'>
				<motion.div
					ref={textRef}
					style={{ x: animatedX }}
					className='sticky top-[20%] flex w-lg flex-col items-start justify-center gap-10 py-30'
				>
					<AnimatePresence mode='wait'>
						<motion.div
							key={displayedSection}
							variants={textVariants}
							initial='initial'
							animate='animate'
							exit='exit'
						>
							<div className='flex w-full flex-col items-start justify-center gap-2'>
								<TitleTag>{title}</TitleTag>
								<h2 className='!text-5xl !font-normal text-secondary max-md:!text-4xl max-sm:!text-3xl'>
									{subtitle}
								</h2>
							</div>
							<p className='!mt-6 text-justify'>{description}</p>
						</motion.div>
					</AnimatePresence>
				</motion.div>
			</div>

			{/* Contenedores de las imágenes */}
			<div
				ref={refTiaf}
				className='col-start-2 col-end-3 row-start-2 row-end-3 h-screen w-full'
			>
				<ParallaxImage
					src={`/api/cdn?url=/v${timestamp}/f_avif,q_auto/bg-tiaf`}
					alt='TIAF'
					width={3838}
					height={5176}
					className='h-screen w-full'
				/>
			</div>
			<div
				ref={refKinis}
				className='col-start-2 col-end-3 row-start-3 row-end-4 h-screen w-full'
			>
				<ParallaxImage
					src={`/api/cdn?url=/v${timestamp}/f_avif,q_auto/bg-kinis`}
					alt='KINIS'
					width={3858}
					height={5272}
					className='h-screen w-full'
				/>
			</div>
			<div
				ref={refCasmi}
				className='col-start-2 col-end-3 row-start-4 row-end-5 h-screen w-full'
			>
				<ParallaxImage
					src={`/api/cdn?url=/v${timestamp}/f_avif,q_auto/bg-casmi`}
					alt='CASMI'
					width={3839}
					height={5176}
					className='h-screen w-full'
				/>
			</div>
		</section>
	)
}
