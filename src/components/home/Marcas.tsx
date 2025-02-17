'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react'

import CasmiLogo from '@/components/ui/logos/Casmi'
import KinisLogo from '@/components/ui/logos/Kinis'
import TiafLogo from '@/components/ui/logos/Tiaf'
import TitleTag from '@/components/ui/TitleTag'
import ParallaxImage from '@/components/ui/ParallaxImage'

type Section = 'intro' | 'tiaf' | 'kinis' | 'casmi'

/* ──────────────────────────────────────────────────────────────── */
/*                         VERSIÓN DESKTOP                          */
/* ──────────────────────────────────────────────────────────────── */
function MarcasDesktop() {
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
	}, [])

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
		const unsubscribe = scrollYProgress.on('change', (progress) => {
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
					subtitle: 'Superación sin límites',
					description: (
						<span>
							TIAF se especializa en ropa deportiva e interior, con un enfoque
							en funcionalidad y tecnología. Su catálogo incluye diversas
							líneas, como <strong>Menswear</strong>,{' '}
							<strong>Womenswear</strong> y <strong>Kids</strong>.
						</span>
					),
				}
			case 'kinis':
				return {
					title: (
						<KinisLogo
							color='var(--color-kinis)'
							className='!mb-1'
						/>
					),
					subtitle: 'Sensualidad en movimiento',
					description:
						'KINIS redefine la ropa interior femenina con diseños que combinan tecnología seamless, comodidad y estilo.',
				}
			case 'casmi':
				return {
					title: (
						<CasmiLogo
							color='var(--color-casmi)'
							className='!mb-1'
						/>
					),
					subtitle: 'Libertad de estilo',
					description:
						'Casmi es sinónimo de versatilidad. Diseñamos prendas para mujeres que buscan comodidad sin renunciar a la innovación y la funcionalidad.',
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
							hasta <strong>ropa deportiva</strong> de alto rendimiento.
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
			// Esta versión se muestra solo en pantallas md en adelante
			className='relative hidden min-h-screen w-full grid-cols-2 grid-rows-4 md:grid'
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
								<h3 className='!text-5xl !font-normal text-secondary max-md:!text-4xl max-sm:!text-3xl'>
									{subtitle}
								</h3>
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
					src={`/api/cdn?url=/f_avif,q_90/bg-tiaf`}
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
					src={`/api/cdn?url=/f_avif,q_90/bg-kinis`}
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
					src={`/api/cdn?url=/f_avif,q_90/bg-casmi`}
					alt='CASMI'
					width={3839}
					height={5176}
					className='h-screen w-full'
				/>
			</div>
		</section>
	)
}

/* ──────────────────────────────────────────────────────────────── */
/*                         VERSIÓN MÓVIL                           */
/* ──────────────────────────────────────────────────────────────── */
function MarcasMobile() {
	// Ref de la sección para el scroll
	const sectionRef = useRef<HTMLElement>(null)
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start start', 'end end'],
	})

	// Obtenemos el ancho y alto del viewport
	const [vw, setVw] = useState<number>(0)
	const [vh, setVh] = useState<number>(0)
	useEffect(() => {
		setVw(window.innerWidth)
		setVh(window.innerHeight)
		const handleResize = () => {
			setVw(window.innerWidth)
			setVh(window.innerHeight)
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	/**
	 * Definimos un slider horizontal:
	 * - progress = 0: x = vw (slider a la derecha, fuera de vista)
	 * - progress = 1: x = -2 * vw (última imagen en vista)
	 */
	const horizontalX = useTransform(scrollYProgress, [0, 1], [vw, -2 * vw])

	// Actualizamos la sección activa según el scroll vertical
	const [activeSection, setActiveSection] = useState<Section>('intro')
	const [displayedSection, setDisplayedSection] = useState<Section>('intro')

	useEffect(() => {
		const unsubscribe = scrollYProgress.on('change', (progress) => {
			if (progress < 0.25) {
				setActiveSection('intro')
			} else if (progress < 0.5) {
				setActiveSection('tiaf')
			} else if (progress < 0.75) {
				setActiveSection('kinis')
			} else {
				setActiveSection('casmi')
			}
		})
		return () => unsubscribe()
	}, [scrollYProgress])

	// Retardo para suavizar la animación del texto
	useEffect(() => {
		if (activeSection !== displayedSection) {
			const timeout = setTimeout(() => {
				setDisplayedSection(activeSection)
			}, 300)
			return () => clearTimeout(timeout)
		}
	}, [activeSection, displayedSection])

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
					subtitle: 'Superación sin límites',
					description: (
						<span>
							TIAF se especializa en ropa deportiva e interior, con un enfoque
							en funcionalidad y tecnología. Su catálogo incluye diversas
							líneas, como <strong>Menswear</strong>,{' '}
							<strong>Womenswear</strong> y <strong>Kids</strong>.
						</span>
					),
				}
			case 'kinis':
				return {
					title: (
						<KinisLogo
							color='var(--color-kinis)'
							className='!mb-1'
						/>
					),
					subtitle: 'Sensualidad en movimiento',
					description:
						'KINIS redefine la ropa interior femenina con diseños que combinan tecnología seamless, comodidad y estilo.',
				}
			case 'casmi':
				return {
					title: (
						<CasmiLogo
							color='var(--color-casmi)'
							className='!mb-1'
						/>
					),
					subtitle: 'Libertad de estilo',
					description:
						'Casmi es sinónimo de versatilidad. Diseñamos prendas para mujeres que buscan comodidad sin renunciar a la innovación y la funcionalidad.',
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
							<strong>Kinis</strong> y <strong>TIAF</strong>.
						</span>
					),
				}
		}
	}

	const { title, subtitle, description } = getContent()

	const textVariants = {
		initial: { opacity: 0, filter: 'blur(4px)' },
		animate: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.3 } },
		exit: { opacity: 0, filter: 'blur(4px)', transition: { duration: 0.3 } },
	}

	// Definimos la cantidad de segmentos y la altura total de la sección
	const numSegments = 4
	const sectionHeight = vh * numSegments

	return (
		<section
			id='marcas'
			ref={sectionRef}
			// Quitamos el overflow-hidden de la sección para permitir el sticky
			className='relative w-full md:hidden'
			style={{ height: sectionHeight }}
		>
			<div className='sticky top-0 h-screen pt-35'>
				{/* Texto superpuesto */}
				<div className='pointer-events-none flex h-[50%] w-full items-center justify-center'>
					<AnimatePresence mode='wait'>
						<motion.div
							key={displayedSection}
							variants={textVariants}
							initial='initial'
							animate='animate'
							exit='exit'
							className='flex-xol flex flex-col justify-center gap-4 px-6 py-10'
						>
							<div className='flex flex-col items-start gap-2'>
								<TitleTag>{title}</TitleTag>
								<h3 className='!text-3xl font-normal text-secondary'>
									{subtitle}
								</h3>
							</div>
							<p className='text-justify text-sm'>{description}</p>
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Contenedor "sticky" con overflow-hidden para recortar el slider */}
				<div className='max-h-[50%] w-full overflow-hidden'>
					<motion.div
						className='flex h-full'
						style={{ x: horizontalX }}
					>
						{/* Cada slide ocupa el ancho completo del viewport */}
						<div className='h-full min-w-screen'>
							<ParallaxImage
								src={`/api/cdn?url=/f_avif,q_auto/bg-tiaf`}
								alt='TIAF'
								width={3838}
								height={5176}
								className='h-full w-full object-cover'
							/>
						</div>
						<div className='h-full min-w-screen'>
							<ParallaxImage
								src={`/api/cdn?url=/f_avif,q_auto/bg-kinis`}
								alt='KINIS'
								width={3858}
								height={5272}
								className='h-full w-full object-cover'
							/>
						</div>
						<div className='h-full min-w-screen'>
							<ParallaxImage
								src={`/api/cdn?url=/f_avif,q_auto/bg-casmi`}
								alt='CASMI'
								width={3839}
								height={5176}
								className='h-full w-full object-cover'
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

/* ──────────────────────────────────────────────────────────────── */
/*                      COMPONENTE PRINCIPAL                      */
/* ──────────────────────────────────────────────────────────────── */
export default function Marcas() {
	return (
		<>
			<MarcasDesktop />
			<MarcasMobile />
		</>
	)
}
