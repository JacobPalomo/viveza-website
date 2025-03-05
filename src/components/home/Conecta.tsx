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
							'linear-gradient(to bottom, oklch(0.98 0 0 / 0) 0%, oklch(0.98 0 0 / 1) 1%);',
					}}
				>
					<source src='/api/cdn?type=video&url=/f_auto:video,q_auto/desktop-social-video' />
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
					<source src='/api/cdn?type=video&url=/f_auto:video,q_auto/ipad-social-video' />
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
					<source src='/api/cdn?type=video&url=/f_auto:video,q_auto/iphone-social-video' />
					El video no es compatible con tu navegador
				</video>
			</div>
		</Section>
	)
}

export default memo(Conecta)
