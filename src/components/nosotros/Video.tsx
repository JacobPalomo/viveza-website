'use client'

export default function Video() {
	return (
		<section
			id='conocenos'
			className='relative z-10 min-h-screen w-full bg-background px-3 pb-3'
		>
			<video
				autoPlay
				loop
				muted
				playsInline
				preload='auto'
				poster='https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/us/video.thumbnail.avif'
				className='relative z-10 aspect-video h-screen w-full bg-background object-cover'
			>
				<source
					src='https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/us/video.mp4'
					type='video/mp4'
				/>
				Tu navegador no es compatible con el video.
			</video>
			{/* <div className='absolute top-0 left-0 z-[9] h-screen w-full px-3 pb-3'>
				// Fallback imagen si el video no se puede cargar
				<Image
					src='/api/cdn?type=video&url=f_avif,q_90/video-bg-conocenos'
					alt='Fallback video image'
					width={1800}
					height={1012}
					loading='lazy'
					className='aspect-video h-full w-full object-cover'
					aria-hidden
				/>
			</div> */}
		</section>
	)
}
