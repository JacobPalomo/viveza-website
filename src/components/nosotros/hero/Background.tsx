import Image from 'next/image'
import { memo } from 'react'

// TODO - crear componente Hero para reutilizar en otras páginas
const HeroBackground = () => (
	<Image
		src='https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/us/hero.avif'
		height={5745}
		width={8971}
		alt='background image'
		priority
		className='relative aspect-video h-full min-h-screen w-auto min-w-full object-cover object-[right_42%] max-md:h-[150%] max-md:object-[70%_center] max-sm:h-full'
	/>
)

export default memo(HeroBackground)
