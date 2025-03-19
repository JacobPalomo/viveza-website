import { FC, memo } from 'react'
import Section from '@/components/ui/Section'
import Title from '@/components/ui/Title'
import Image from 'next/image'

const PerformanceFabrics: FC = () => {
	return (
		<Section
			dataHeaderTheme='dark'
			className='pb-3 max-md:pt-10'
		>
			<div className='grid grid-cols-2 max-md:grid-cols-1'>
				<div className='flex flex-col items-start justify-center gap-6 px-8 max-md:pb-10'>
					<Title
						title='Prendas que respiran contigo'
						label='FRESH FIT'
						alignment='center'
					/>

					<p className='text-center'>
						<strong>Fresh Fit</strong> es nuestra innovadora tecnología para
						prendas deportivas que acelera la evaporación del sudor,
						manteniéndote fresco y seco durante tus entrenamientos más
						exigentes. Su avanzado tejido transpirable regula la temperatura y
						mejora tu confort para que rindas al máximo.
					</p>
				</div>

				<Image
					src='https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/tech/performance-fabrics/freshfit.gif'
					alt='Fresh Fit GIF'
					width={2409}
					height={3248}
					loading='lazy'
					className='h-section-content h-full w-full object-cover'
				/>
			</div>

			<div className='grid grid-cols-2 max-md:!mt-10 max-md:grid-cols-1'>
				<Image
					src='https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/tech/performance-fabrics/seamless.gif'
					alt='Seamless GIF'
					width={3208}
					height={4319}
					loading='lazy'
					className='h-section-content h-full w-full object-cover max-md:row-start-2'
				/>

				<div className='flex flex-col items-start justify-center gap-6 px-8 max-md:pb-10 max-md:text-center'>
					<Title
						title='Prendas que respiran contigo'
						label='SEAMLESS'
						alignment='center'
					/>

					<p className='text-center'>
						Nuestra tecnología <strong>Seamless</strong> crea prendas deportivas
						sin costuras que brindan una sensación excepcional de suavidad,
						libertad de movimiento y confort. Diseñadas para adaptarse
						perfectamente a tu cuerpo, eliminan roces y molestias, permitiéndote
						entrenar cómodamente y sin distracciones.
					</p>
				</div>
			</div>
		</Section>
	)
}

export default memo(PerformanceFabrics)
