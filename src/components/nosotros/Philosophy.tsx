import Card from '@/components/ui/Card'

export default function Philosophy() {
	return (
		<section className='relative top-0 grid grid-cols-2 gap-3 p-3 !pt-3 max-md:grid-cols-1 max-sm:gap-2 max-sm:p-2'>
			<Card
				label={'Misión'}
				title={'Compromiso esencial'}
				description={'Hilo con hilo tejemos historias en cada prenda.'}
				titlePosition='center'
				image='/api/cdn?url=v1740500560/mision.avif'
				width={4823}
				height={7227}
				alt={'backgroundMision'}
			/>
			<Card
				label={'Visión'}
				title={'El futuro que imaginamos'}
				description={
					'Trascender en el meraco mexicano, evolucionando de la maono de nuetras prendas, redefiniendo el confort y contagiando movimiento.'
				}
				titlePosition='center'
				image='/api/cdn?url=v1740500585/vision.avif'
				width={3599}
				height={5393}
				alt={'backgrounVision'}
			/>
		</section>
	)
}
