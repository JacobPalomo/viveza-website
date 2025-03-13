import { FC, memo } from 'react'
import Title from '@/components/ui/Title'
import Section from '@/components/ui/Section'

const Conecta: FC = () => {
	return (
		<Section className='py-10'>
			<div className='m-auto w-1/2 max-md:w-9/10 max-sm:w-full'>
				<Title
					label='Conecta'
					title='¡No olvides seguirnos en nuestras redes!'
					alignment='center'
				/>
			</div>

			<div className='m-auto !mt-10 w-3/5 max-md:hidden'>
				<video
					className='w-full'
					autoPlay
					loop
					muted
					style={{
						maskImage:
							'linear-gradient(to bottom, oklch(0.98 0 0 / 0) 0%, oklch(0.98 0 0 / 1) 1%)',
					}}
				>
					<source src='https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/home/social-desktop.mp4' />
					El video no es compatible con tu navegador
				</video>
			</div>
			<div className='m-auto !mt-10 hidden w-3/5 max-md:block max-sm:hidden'>
				<video
					className='w-full'
					autoPlay
					loop
					muted
				>
					<source src='https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/home/social-tablet.mp4' />
					El video no es compatible con tu navegador
				</video>
			</div>
			<div className='m-auto !mt-10 hidden w-full max-sm:block'>
				<video
					className='h-[40rem] w-full'
					autoPlay
					loop
					muted
				>
					<source src='https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/home/social-mobile.mp4' />
					El video no es compatible con tu navegador
				</video>
			</div>
		</Section>
	)
}

export default memo(Conecta)
