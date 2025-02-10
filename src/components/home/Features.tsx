import Image from 'next/image'

export default function Features() {
	const cookiesAccepted =
		typeof window !== 'undefined' &&
		localStorage.getItem('cookiesAccepted') === 'true'

	return (
		<section className='relative z-20 grid min-h-screen w-full grid-cols-3 grid-rows-4 gap-1 bg-background p-10 max-md:flex max-md:flex-col max-md:gap-10 max-md:px-4 max-md:py-10'>
			<div className='sticky top-36 bottom-10 col-start-1 col-end-2 row-start-1 row-end-3 flex flex-col justify-center gap-4 rounded-[21px] bg-white p-6 shadow-lg max-md:relative max-md:top-[inherit] max-md:bottom-[inherit]'>
				<h3 className='!text-4xl'>
					Calidad <span className='text-primary'>Premium</span>
				</h3>
				<p>Procesos innovadores con tecnología avanzada en textiles.</p>
				<Image
					src='/api/cloudinary?url=f_auto,q_auto/l5rjcpugltsoo5fhijkk'
					alt='Imagen que ejemplifica la calidad y textura de nuestra ropa'
					width={720}
					height={900}
					aria-hidden='true'
					quality={100}
					loading='lazy'
					unoptimized={!cookiesAccepted}
					className='h-full rounded-xl object-cover brightness-[175%]'
				/>
			</div>

			<div className='sticky top-36 col-start-2 col-end-3 row-start-2 row-end-4 flex flex-col justify-center gap-4 rounded-[21px] bg-white p-6 shadow-lg max-md:relative max-md:top-[inherit] max-md:bottom-[inherit]'>
				<h3 className='!text-4xl'>
					Diseño <span className='text-primary'>sin Costuras</span>
				</h3>
				<p>Ropa diseñada para la máxima comodidad y frescura.</p>
				<Image
					src='/api/cloudinary?url=f_auto,q_auto/fmdzdecolmwngsrdhsu2'
					alt='Imagen que muestra el diseño de nuestra ropa'
					width={860}
					height={1147}
					aria-hidden='true'
					quality={100}
					loading='lazy'
					unoptimized={!cookiesAccepted}
					className='h-full rounded-xl object-cover brightness-110'
				/>
			</div>

			<div className='sticky top-36 col-start-3 col-end-4 row-start-3 row-end-5 flex flex-col justify-center gap-4 rounded-[21px] bg-white p-6 shadow-lg max-md:relative max-md:top-[inherit] max-md:bottom-[inherit]'>
				<h3 className='!text-4xl'>
					Equipo <span className='text-primary'>Dedicado</span>
				</h3>
				<p>Un equipo apasionado que crea productos de alto rendimiento.</p>
				<Image
					src='/api/cloudinary?url=f_auto,q_auto/jvskeccuqt0l8vl6r2y9'
					alt='Imagen que muestra nuestro equipo de trabajo'
					width={860}
					height={574}
					aria-hidden='true'
					quality={100}
					loading='lazy'
					unoptimized={!cookiesAccepted}
					className='h-full rounded-xl object-cover brightness-110'
				/>
			</div>
		</section>
	)
}
