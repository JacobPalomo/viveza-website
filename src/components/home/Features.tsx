import Image from 'next/image'
import Feature from './features/Feature'

export default function Features() {
	const cookiesAccepted =
		typeof window !== 'undefined' &&
		localStorage.getItem('cookiesAccepted') === 'true'

	return (
		<section className='relative z-20 grid min-h-screen w-full grid-cols-3 grid-rows-4 max-md:grid-cols-1 max-md:grid-rows-3'>
			<Feature
				key={'feature-1'}
				className='bottom-10 col-start-1 col-end-2 row-start-1 row-end-3 max-md:row-end-2'
				title={
					<>
						Calidad <span className='text-primary'>Premium</span>
					</>
				}
				description='Procesos innovadores con tecnología avanzada en textiles.'
				image={
					<Image
						src='/api/cdn?url=f_avif,q_auto/calidad'
						alt='Imagen que ejemplifica la calidad y textura de nuestra ropa'
						width={720}
						height={900}
						aria-hidden='true'
						quality={100}
						loading='lazy'
						unoptimized={!cookiesAccepted}
						className='h-screen object-cover brightness-[175%]'
					/>
				}
			/>

			<Feature
				key={'feature-2'}
				className='col-start-2 col-end-3 row-start-2 row-end-4 max-md:col-start-1 max-md:col-end-2 max-md:row-start-2 max-md:row-end-3'
				title={
					<>
						Diseño <span className='text-primary'>sin Costuras</span>
					</>
				}
				description='Ropa diseñada para la máxima comodidad y frescura.'
				image={
					<Image
						src='/api/cdn?url=f_avif,q_auto/diseno-sin-costuras'
						alt='Imagen que muestra el diseño de nuestra ropa'
						width={860}
						height={1147}
						aria-hidden='true'
						quality={100}
						loading='lazy'
						unoptimized={!cookiesAccepted}
						className='h-screen object-cover brightness-110'
					/>
				}
			/>

			<Feature
				key={'feature-3'}
				className='col-start-3 col-end-4 row-start-3 row-end-5 max-md:col-start-1 max-md:col-end-2 max-md:row-start-3 max-md:row-end-4'
				title={
					<>
						Equipo <span className='text-primary'>Dedicado</span>
					</>
				}
				description='Un equipo apasionado que crea productos de alto rendimiento.'
				image={
					<Image
						src='/api/cdn?url=f_avif,q_auto/equipo'
						alt='Imagen que muestra nuestro equipo de trabajo'
						width={860}
						height={574}
						aria-hidden='true'
						quality={100}
						loading='lazy'
						unoptimized={!cookiesAccepted}
						className='h-screen object-cover brightness-110'
					/>
				}
			/>
		</section>
	)
}
