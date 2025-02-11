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
		<div className='sticky top-0'>
			<section className='relative flex min-h-screen w-full items-center justify-center bg-background max-md:flex-col-reverse'>
				<HeroBackground />
				<HeroText />
			</section>
		</div>
	)
}

export default memo(Hero)
