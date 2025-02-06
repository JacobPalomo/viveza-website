'use client'

import { motion } from 'motion/react'

export default function Conocenos() {
	return (
		<section
			id='conocenos'
			className='relative bottom-0 z-10 min-h-screen w-full bg-background'
		>
			<video
				autoPlay
				loop
				muted
				playsInline
				className='absolute top-0 left-0 z-10 h-full w-full bg-background object-cover'
			>
				<source
					src='https://res.cloudinary.com/dtvpssenl/video/upload/f_auto:video,q_auto/rqoaqc7br3sxssk1shwq'
					type='video/mp4'
				/>
				Tu navegador no es compatible con el video.
			</video>

			<div className='absolute top-0 left-0 h-full w-full bg-black opacity-10' />
			<div className='relative z-10 flex h-full min-h-screen w-full flex-col items-start justify-end gap-10 p-10 text-white'>
				<div className='w-2/3 max-w-3xl max-sm:w-full'>
					<motion.h2
						initial={{
							filter: 'blur(16px)',
							transform: 'translateY(10px) scale(.85)',
						}}
						whileInView={{
							filter: 'blur(0)',
							transform: 'translateY(0) scale(1)',
						}}
						transition={{
							duration: 0.5,
							delay: 0,
							ease: 'linear',
						}}
						className='!mb-4'
					>
						Conocenos
					</motion.h2>

					<motion.p
						initial={{
							filter: 'blur(8px)',
							transform: 'translateY(40px) scale(0.85)',
						}}
						whileInView={{
							filter: 'blur(0)',
							transform: 'translateY(0) scale(1)',
						}}
						transition={{
							duration: 0.3,
							delay: 0.3,
							ease: 'linear',
						}}
						className='!text-2xl font-[490]'
					>
						En Viveza Textil, somos pioneros en el diseño, fabricación y
						comercialización de ropa interior, exterior y deportiva mediante
						tecnología Seamless de la más alta calidad.
					</motion.p>
				</div>

				<div className='grid w-2/3 max-w-3xl grid-cols-2 gap-10 max-sm:flex max-sm:w-full max-sm:flex-col'>
					<div className='border-r border-white/50 pr-10 max-sm:border-none max-sm:pr-0'>
						<motion.h3
							initial={{
								filter: 'blur(16px)',
								transform: 'translateY(10px) scale(.85)',
							}}
							whileInView={{
								filter: 'blur(0)',
								transform: 'translateY(0) scale(1)',
							}}
							transition={{
								duration: 0.5,
								delay: 0.2,
								ease: 'linear',
							}}
							className='!mb-3'
						>
							Misión
						</motion.h3>
						<motion.p
							initial={{
								filter: 'blur(8px)',
								transform: 'translateY(20px) scale(0.85)',
							}}
							whileInView={{
								filter: 'blur(0)',
								transform: 'translateY(0) scale(1)',
							}}
							transition={{
								duration: 0.5,
								delay: 0.2,
								ease: 'linear',
							}}
							className='text-justify'
						>
							Ofrecer pendas que cumplan con los más altos estándares del
							mercado global, mientras marcamos tendencia con soluciones
							innovadoras en moda.
						</motion.p>
					</div>

					<div>
						<motion.h3
							initial={{
								filter: 'blur(16px)',
								transform: 'translateY(10px) scale(.85)',
							}}
							whileInView={{
								filter: 'blur(0)',
								transform: 'translateY(0) scale(1)',
							}}
							transition={{
								duration: 0.5,
								delay: 0.2,
								ease: 'linear',
							}}
							className='!mb-3'
						>
							Visión
						</motion.h3>
						<motion.p
							initial={{
								filter: 'blur(8px)',
								transform: 'translateY(20px) scale(0.85)',
							}}
							whileInView={{
								filter: 'blur(0)',
								transform: 'translateY(0) scale(1)',
							}}
							transition={{
								duration: 0.5,
								delay: 0.2,
								ease: 'linear',
							}}
							className='text-justify'
						>
							Ser una empresa globalmente reconocida por la calidad de nuestros
							productos, rentabilidad y confiabilidad, liderando con innovación,
							tecnología avanzada y prácticas responsables que favorecen el
							desarrollo social y ambiental.
						</motion.p>
					</div>
				</div>
			</div>
		</section>
	)
}
