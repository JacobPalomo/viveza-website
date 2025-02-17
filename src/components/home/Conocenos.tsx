'use client'

import { motion } from 'motion/react'
import TitleTag from '../ui/TitleTag'
import Link from 'next/link'
import { RiArrowRightUpLine } from 'react-icons/ri'

export default function Conocenos() {
	return (
		<section
			id='conocenos'
			className='relative z-10 min-h-screen w-full bg-background'
		>
			<video
				autoPlay
				loop
				muted
				playsInline
				className='absolute top-0 left-0 z-10 h-full w-full bg-background object-cover'
			>
				<source
					src='/api/cdn?type=video&url=f_auto:video,q_auto/video-bg-conocenos'
					type='video/mp4'
				/>
				Tu navegador no es compatible con el video.
			</video>

			<div className='absolute top-0 left-0 h-full w-full bg-black opacity-10' />
			<div className='relative z-10 flex h-full min-h-screen w-full flex-col items-start justify-end gap-10 p-10 text-white'>
				<div className='w-2/3 max-w-3xl max-sm:w-full'>
					<div className='!mb-5 flex w-full flex-col items-start justify-center gap-2'>
						<motion.div
							initial={{
								scale: 0.85,
								translateY: 40,
								opacity: 0,
								filter: 'blur(8px)',
							}}
							whileInView={{
								scale: 1,
								translateY: 0,
								filter: 'blur(0)',
								opacity: 1,
							}}
							transition={{ duration: 0.3, delay: 0, ease: 'linear' }}
						>
							<TitleTag
								textColor='#fff'
								divisorColor='#fff'
							>
								NOSOTROS
							</TitleTag>
						</motion.div>
						<motion.h2
							initial={{
								filter: 'blur(16px)',
								transform: 'translateY(10px) scale(.85)',
								opacity: 0,
							}}
							whileInView={{
								filter: 'blur(0)',
								transform: 'translateY(0) scale(1)',
								opacity: 1,
							}}
							transition={{
								duration: 0.3,
								delay: 0.1,
								ease: 'linear',
							}}
							className='!text-5xl !font-normal text-white max-md:!text-4xl max-sm:!text-3xl'
						>
							El origen de la comodidad
						</motion.h2>
					</div>

					<motion.p
						initial={{
							filter: 'blur(8px)',
							transform: 'translateY(40px) scale(0.85)',
							opacity: 0,
						}}
						whileInView={{
							filter: 'blur(0)',
							transform: 'translateY(0) scale(1)',
							opacity: 1,
						}}
						transition={{
							duration: 0.3,
							delay: 0.2,
							ease: 'linear',
						}}
						className='text-justify'
					>
						En Viveza Textil, con más de 20 años de experiencia, somos pioneros
						en el diseño, fabricación y comercialización de ropa interior,
						exterior y deportiva mediante tecnología Seamless de la más alta
						calidad.
					</motion.p>
				</div>

				<motion.div
					initial={{
						scale: 0.85,
						filter: 'blur(8px)',
						translateY: 40,
						opacity: 0,
					}}
					whileInView={{
						filter: 'blur(0)',
						translateY: 0,
						scale: 1,
						opacity: 1,
					}}
					transition={{
						duration: 0.3,
						delay: 0.3,
						ease: 'linear',
					}}
				>
					<motion.div
						initial={{
							scale: 1,
						}}
						whileHover={{
							scale: 1.05,
							originX: 0,
						}}
						whileTap={{ scale: 0.975, originX: 0 }}
					>
						<Link
							href='/nosotros'
							className='flex h-max w-max items-center justify-end gap-2 rounded-full border-[1.5px] border-white py-1 pr-2 pl-3 text-base'
						>
							<span className='uppercase'>Más sobre nosotros</span>

							<RiArrowRightUpLine
								size={24}
								color='white'
							/>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
