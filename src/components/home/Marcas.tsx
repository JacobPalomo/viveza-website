'use client'

import { FC, memo, ReactNode, useEffect, useRef } from 'react'
import { motion } from 'motion/react'

// Swiper
import 'swiper/css'
import 'swiper/css/parallax'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { Swiper as SwiperType } from 'swiper'
import { Autoplay, Parallax, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import CasmiLogo from '@/components/ui/logos/Casmi'
import KinisLogo from '@/components/ui/logos/Kinis'
import TiafLogo from '@/components/ui/logos/Tiaf'
import Section from '@/components/ui/Section'
import Image from 'next/image'

interface Slide {
	logo: ReactNode
	slogan: string
	photo: string
	background?: string
	description: ReactNode | string
}

// Contenido de cada slide
const slides: Slide[] = [
	{
		logo: (
			<TiafLogo
				color='white'
				size={48}
			/>
		),
		slogan: 'Eleva tu ritmo',
		photo:
			'https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/home/card-tiaf.avif',
		description: (
			<span>
				TIAF se especializa en ropa deportiva e interior, con un enfoque en
				funcionalidad y tecnología. Su catálogo incluye diversas líneas, como{' '}
				<strong>Menswear</strong>, <strong>Womenswear</strong> y{' '}
				<strong>Kids</strong>.
			</span>
		),
	},
	{
		logo: (
			<KinisLogo
				color='white'
				size={48}
			/>
		),
		slogan: 'Sensualidad en movimiento',
		photo:
			'https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/home/card-kinis.avif',
		description:
			'KINIS redefine la ropa interior femenina con diseños que combinan tecnología seamless, comodidad y estilo.',
	},
	{
		logo: (
			<CasmiLogo
				color='white'
				size={48}
			/>
		),
		slogan: 'Libertad de estilo',
		photo:
			'https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/home/card-casmi.avif',
		description:
			'Casmi es sinónimo de versatilidad. Diseñamos prendas para mujeres que buscan comodidad sin renunciar a la innovación y la funcionalidad.',
	},
]

const Marcas: FC = () => {
	const swiperRef = useRef<SwiperType | null>(null)
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (swiperRef.current && swiperRef.current.autoplay) {
						if (entry.isIntersecting) {
							swiperRef.current.autoplay.start()
						} else {
							swiperRef.current.autoplay.stop()
						}
					}
				})
			},
			{ threshold: 0.5 },
		)
		if (containerRef.current) {
			observer.observe(containerRef.current)
		}
		return () => {
			if (containerRef.current) {
				observer.unobserve(containerRef.current)
			}
		}
	}, [])

	return (
		<div ref={containerRef}>
			<Section className='h-screen'>
				<Swiper
					onSwiper={(swiper) => {
						swiperRef.current = swiper
					}}
					modules={[Parallax, Autoplay, Pagination]}
					pagination={{ clickable: true, dynamicBullets: true }}
					parallax={true}
					slidesPerView={1}
					spaceBetween={0}
					loop
					grabCursor
					autoplay={{ delay: 3000, disableOnInteraction: false }}
					speed={2000}
					watchSlidesProgress={true}
					onTouchStart={(swiper) => {
						swiper.params.speed = 500
					}}
					onTouchEnd={(swiper) => {
						setTimeout(() => {
							swiper.params.speed = 2000
						}, 500)
					}}
					onMouseDown={() => {
						swiperRef.current!.params.speed = 500
					}}
					onMouseUp={() => {
						setTimeout(() => {
							swiperRef.current!.params.speed = 2000
						}, 500)
					}}
					className='relative flex h-full w-full items-center justify-center'
				>
					{slides.map((slide, index) => (
						<SwiperSlide
							key={index}
							className='relative h-full w-full'
							style={{ willChange: 'transform' }}
						>
							<Image
								loading='lazy'
								fill
								src={slide.photo}
								alt={slide.slogan}
								className='pointer-events-none h-full w-full object-cover object-center'
							/>

							<div className='absolute top-0 right-0 left-0 h-full w-full bg-gradient-to-t from-black/35 from-0% to-black/0 to-100%' />

							<motion.div
								initial={{ opacity: 0, filter: 'blur(8px)' }}
								whileInView={{ filter: 'blur(0)', opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.1 }}
								className='absolute bottom-10 left-1/2 z-10 flex w-4/7 -translate-x-1/2 flex-col items-center justify-center gap-6 p-4 text-center text-white max-md:w-6/7 max-sm:w-full max-sm:p-3.5'
							>
								<div
									data-swiper-parallax='-50%'
									className='block'
								>
									{slide.logo}
								</div>
								<div className='flex flex-col items-center justify-center gap-2'>
									<h2 data-swiper-parallax='-75%'>{slide.slogan}</h2>
									<div
										className='text-center'
										data-swiper-parallax='-100%'
									>
										{slide.description}
									</div>
								</div>
							</motion.div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className='swiper-pagination' />
			</Section>
		</div>
	)
}

export default memo(Marcas)
