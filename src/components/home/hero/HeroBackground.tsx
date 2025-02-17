import Image from 'next/image'
import { memo } from 'react'

const HeroBackground = () => (
	<Image
		src={`/api/cdn?url=/f_avif,q_90/hero`}
		alt='background image'
		width={2667}
		height={4000}
		priority
		className='absolute top-0 right-0 left-0 z-0 aspect-video h-full min-h-screen w-auto min-w-full object-cover object-[right_42%] max-md:h-[150%] max-sm:h-full'
	/>
)

export default memo(HeroBackground)
