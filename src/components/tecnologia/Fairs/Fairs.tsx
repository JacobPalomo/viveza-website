import { FC, memo } from 'react'
import Section from '@/components/ui/Section'
import Title from '@/components/ui/Title'
import Fair from './Fair'

const FairsSection: FC = () => {
	return (
		<Section
			dataHeaderTheme='dark'
			className='!h-screen'
		>
			<div className='flex h-full w-4/7 flex-col items-center justify-center gap-10 max-md:w-6/7'>
				<Title
					label='FERIAS INTERNACIONALES'
					title='Referentes del cambio'
					alignment='center'
				/>
				<p className='text-center'>
					Para brindar excelencia en la industria textil, participamos en ferias
					internacionales (<strong>ITMA</strong>, <strong>Colombiatex</strong>,{' '}
					<strong>Exintex</strong> y <strong>Canton Fair</strong>), donde
					adquirimos maquinaria de última generación y detectamos tendencias
					innovadoras, lo que nos permite ofrecer soluciones avanzadas y
					eficientes.
				</p>
			</div>

			<div className='flex w-full items-center justify-between max-md:grid max-md:grid-cols-3'>
				<Fair
					imgSrc='https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/tech/fairs/itma.avif'
					imgAlt='International Textile Machinery Exhibition ITMA'
					imgWidth={3036}
					imgHeight={2209}
					title={
						<span>
							International Textile Machinery Exhibition ITMA (
							<strong>Milán</strong>)
						</span>
					}
				/>
				<Fair
					imgSrc='https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/tech/fairs/colombiatex.avif'
					imgAlt='Colombiatex de las Américas'
					imgWidth={1500}
					imgHeight={1000}
					title={
						<span>
							Colombiatex de las Américas (<strong>Colombia</strong>)
						</span>
					}
				/>
				<Fair
					imgSrc='https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/tech/fairs/canton.avif'
					imgAlt='Canton Fair'
					imgWidth={2000}
					imgHeight={1200}
					title={
						<span>
							Canton Fair (<strong>China</strong>)
						</span>
					}
				/>
			</div>
		</Section>
	)
}

export default memo(FairsSection)
