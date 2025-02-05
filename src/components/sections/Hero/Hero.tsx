import Link from 'next/link'
import MobileVideo from './MobileVideo'

export default function Hero() {
	return (
		<section className='before-radial-mask-image flex min-h-screen w-full flex-col items-center justify-center bg-background max-md:flex-col-reverse'>
			<MobileVideo />

			<div className='max-sm: absolute top-[50%] right-[10%] z-10 flex w-1/3 -translate-y-[50%] flex-col gap-10 max-md:right-[inherit] max-md:left-[10%] max-md:w-1/2 max-sm:relative max-sm:right-auto max-sm:left-auto max-sm:w-full max-sm:px-6'>
				<h2 className='!text-6xl max-md:!text-5xl max-sm:!text-4xl'>
					Ropa que fluye contigo, porque{' '}
					<span className='text-[#00aae2]'>la comodidad no tiene bordes</span>.{' '}
					😉
				</h2>

				<Link
					href='/contacto'
					className='!w-[max-content] cursor-pointer rounded-lg !bg-[#00aae2] px-6 py-3 font-medium'
				>
					Ponerse en contacto
				</Link>
			</div>
		</section>
	)
}
