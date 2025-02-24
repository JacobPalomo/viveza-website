'use client'

import dynamic from 'next/dynamic'
import { memo } from 'react'

const HeroBackground = dynamic(
	() => import('@/components/home/hero/HeroBackground'),
	{ ssr: false },
)
const HeroText = dynamic(() => import('@/components/home/hero/HeroText'), {
	ssr: false,
})

const Hero = () => {
	return (
		<section
			data-header-theme='light'
			className='relative flex min-h-screen w-full items-center justify-center bg-background max-md:flex-col-reverse'
		>
			<HeroBackground />
			<HeroText />
		</section>
	)
}

export default memo(Hero)
