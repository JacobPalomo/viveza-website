import Button from '../../ui/Button'

export function CallToAction() {
	return (
		<section>
			<div className='flex w-full flex-col items-center gap-10'>
				<div className='flex flex-col items-center'>
					<h6 className='leading-[1]'>¿Quieres experimientar la diferencia?</h6>
					<p className='font-clash-grotesk !text-6xl font-semibold max-sm:!text-5xl'>
						¡Comencemos!
					</p>
				</div>

				<Button>Ponerse en contacto</Button>
			</div>
		</section>
	)
}
