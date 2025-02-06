import {
	IconDots,
	IconHeartFilled,
	IconMessageCircle,
	IconSend,
	IconBookmark,
} from '@tabler/icons-react'
import Link from 'next/link'
import Image from 'next/image'

export default function MobileVideo() {
	return (
		<Link
			href='https://www.instagram.com/share/BAHM_4n_DK'
			target='_blank'
			rel='noopener noreferrer'
			className='max-sm:flex max-sm:items-center max-sm:justify-center'
		>
			<div className='absolute -bottom-[25%] left-[10%] -translate-y-[25%] max-md:-right-[15%] max-md:bottom-[15%] max-md:left-[inherit] max-md:max-h-1/2 max-md:-translate-y-[15%] max-sm:right-auto max-sm:-bottom-[20%] max-sm:left-auto max-sm:-translate-y-[20%]'>
				<div className='relative w-96 rounded-3xl border-[16px] border-t-[32px] border-white bg-white shadow-2xl before:absolute before:-top-4 before:left-[50%] before:h-2 before:w-2 before:-translate-[50%] before:rounded-sm before:bg-zinc-400 after:absolute after:bottom-2 after:left-[50%] after:h-1 after:w-20 after:-translate-[50%] after:rounded-sm after:bg-white after:opacity-50 after:backdrop-blur-sm'>
					<div className='absolute top-3 right-3 left-3 flex h-full flex-col justify-between before:absolute before:-top-3 before:-right-3 before:-left-3 before:z-0 before:h-20 before:rounded-t-xl before:bg-gradient-to-b before:from-black/65 before:to-black/0'>
						<div className='z-10 flex items-center justify-between'>
							<div className='flex items-center justify-center gap-2 text-sm font-semibold text-white'>
								<Image
									src='https://res.cloudinary.com/dtvpssenl/image/upload/f_auto,q_auto/rzapbwdi08ddruhmentb'
									width={512}
									height={512}
									alt='Logo Viveza Instagram'
									quality={90}
									priority
									className='h-8 w-8 rounded-full object-cover'
								/>
								<span>vivezatextil</span>
							</div>

							<IconDots
								color='white'
								size={20}
							/>
						</div>

						<div className='flex items-end justify-between pb-10 before:absolute before:-right-3 before:bottom-3 before:-left-3 before:z-0 before:h-20 before:rounded-lg before:bg-gradient-to-t before:from-black/80 before:to-transparent'>
							<div className='z-10 w-4/5'>
								<h3 className='!mb-2 text-white'>Carrera Viveza 2025</h3>
								<p className='!text-sm font-medium text-white'>
									🌟 ¡Gracias por hacer de la Carrera Viveza 2025 un éxito
									total! 🏃‍♂️🏃‍♀️
								</p>
							</div>
							<div className='z-10 !ml-4 flex w-1/5 flex-col items-center justify-center gap-4'>
								<div className='relative flex items-center gap-1 text-sm font-semibold text-white'>
									<IconHeartFilled
										color='red'
										size={24}
									/>
									<span>38</span>
								</div>

								<div className='flex items-center gap-1 text-sm font-semibold text-white'>
									<IconMessageCircle
										color='white'
										size={24}
									/>
									<span>0</span>
								</div>

								<div className='flex items-center gap-1 text-sm font-semibold text-white'>
									<IconSend
										color='white'
										size={24}
									/>
									<span>2</span>
								</div>

								<div className='flex items-center gap-1 text-sm font-semibold text-white'>
									<IconBookmark
										color='white'
										size={24}
									/>
									<span>0</span>
								</div>
							</div>
						</div>
					</div>

					<video
						width={1080}
						height={1920}
						muted
						autoPlay
						loop
						playsInline
						className='rounded-xl'
					>
						<source
							src='https://res.cloudinary.com/dtvpssenl/video/upload/f_auto:video,q_auto/aj1perv6ky6ny4nedrnx'
							type='video/webm'
						/>
						<source
							src='https://res.cloudinary.com/dtvpssenl/video/upload/f_auto:video,q_auto/aj1perv6ky6ny4nedrnx'
							type='video/mp4'
						/>
						Tu navegador no es compatible con este video.
					</video>
				</div>
			</div>
		</Link>
	)
}
