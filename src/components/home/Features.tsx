import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

export default function Features() {
	return (
		<Section className='min-h-screen'>
			<div className='grid h-full min-h-screen w-full grid-cols-3 gap-3 max-lg:grid-cols-1'>
				<Card
					label='CALIDAD'
					imageSrc='https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/home/card-quality.avif'
					imageAlt='Imagen que ejemplifica la calidad y textura de nuestra ropa'
					imageWidth={720}
					imageHeight={900}
					title='Perfección en cada detalle'
					description='Procesos innovadores con tecnología avanzada en textiles, garantizando calidad, precisión y durabilidad en cada prenda.'
				/>

				<Card
					label='DISEÑO'
					imageSrc='https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/home/card-design.avif'
					imageAlt='Imagen que muestra el diseño de nuestra ropa'
					imageWidth={860}
					imageHeight={1147}
					title='Confort sin interrupciones'
					description='Ropa diseñada para la máxima comodidad y frescura, con telas ultraligeras y transpirables que se adaptan a tu ritmo.'
				/>

				<Card
					label='EQUIPO'
					imageSrc='https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/home/card-team.avif'
					imageAlt='Imagen que muestra nuestro equipo de trabajo'
					imageWidth={860}
					imageHeight={574}
					title='Compromiso y excelencia'
					description='Un equipo apasionado que crea productos de alto rendimiento, diseñados para acompañarte en cada desafío.'
				/>
			</div>
		</Section>
	)
}
