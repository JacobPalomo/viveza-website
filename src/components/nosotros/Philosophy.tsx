import Card from '@/components/ui/Card'

export default function Philosophy() {
	return (
		<section className='relative top-0 grid grid-cols-2 gap-3 p-3 !pt-3 max-md:grid-cols-1 max-sm:gap-2 max-sm:p-2'>
			<Card
				label={'Misión'}
				title={'Compromiso esencial'}
				description={'Hilo con hilo tejemos historias en cada prenda.'}
				alignment='center'
				imageSrc='https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/us/card-mision.avif'
				imageWidth={4823}
				imageHeight={7227}
				imageAlt={'backgroundMision'}
			/>
			<Card
				label={'Visión'}
				title={'El futuro que imaginamos'}
				description={
					'Trascender en el meraco mexicano, evolucionando de la maono de nuetras prendas, redefiniendo el confort y contagiando movimiento.'
				}
				alignment='center'
				imageSrc='https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/us/card-vision.avif'
				imageWidth={3599}
				imageHeight={5393}
				imageAlt={'backgrounVision'}
			/>
		</section>
	)
}
