import Image from 'next/image'
import Feature from './Feature'

export default function Features() {
	return (
		<section className='relative z-20 grid min-h-screen w-full grid-cols-3 grid-rows-4 max-md:grid-cols-1 max-md:grid-rows-3'>
			<Feature
				key={'feature-1'}
				className='bottom-10 col-start-1 col-end-2 row-start-1 row-end-3 max-md:row-end-2'
				tag={<>CALIDAD</>}
				title={<>Perfección en cada detalle</>}
				description='Procesos innovadores con tecnología avanzada en textiles, garantizando calidad, precisión y durabilidad en cada prenda.'
				image={
					<Image
						src='/api/cdn?url=f_avif,q_auto/calidad'
						alt='Imagen que ejemplifica la calidad y textura de nuestra ropa'
						width={720}
						height={900}
						aria-hidden='true'
						quality={100}
						loading='lazy'
						className='h-screen object-cover brightness-[175%]'
					/>
				}
			/>

			<Feature
				key={'feature-2'}
				className='col-start-2 col-end-3 row-start-2 row-end-4 max-md:col-start-1 max-md:col-end-2 max-md:row-start-2 max-md:row-end-3'
				tag={<>DISEÑO</>}
				title={<>Confort sin interrupciones</>}
				description='Ropa diseñada para la máxima comodidad y frescura, con telas ultraligeras y transpirables que se adaptan a tu ritmo.'
				image={
					<Image
						src={`/api/cdn?url=/f_avif,q_auto/diseno-sin-costuras`}
						alt='Imagen que muestra el diseño de nuestra ropa'
						width={860}
						height={1147}
						aria-hidden='true'
						quality={100}
						loading='lazy'
						className='h-screen object-cover brightness-110'
					/>
				}
			/>

			<Feature
				key={'feature-3'}
				className='col-start-3 col-end-4 row-start-3 row-end-5 max-md:col-start-1 max-md:col-end-2 max-md:row-start-3 max-md:row-end-4'
				tag={<>EQUIPO</>}
				title={<>Compromiso y excelencia</>}
				description='Un equipo apasionado que crea productos de alto rendimiento, diseñados para acompañarte en cada desafío.'
				image={
					<Image
						src='/api/cdn?url=f_avif,q_auto/equipo'
						alt='Imagen que muestra nuestro equipo de trabajo'
						width={860}
						height={574}
						aria-hidden='true'
						quality={100}
						loading='lazy'
						className='h-screen object-cover brightness-110'
					/>
				}
			/>
		</section>
	)
}
