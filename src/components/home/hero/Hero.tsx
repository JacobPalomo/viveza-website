'use client'

import dynamic from 'next/dynamic'
import { memo, useRef } from 'react'

const HeroBackground = dynamic(
	() => import('@/components/home/hero/HeroBackground'),
	{ ssr: false },
)
const HeroText = dynamic(() => import('@/components/home/hero/HeroText'), {
	ssr: false,
})

const Hero = () => {
	const containerRef = useRef<HTMLElement>(null)

	return (
		<section
			ref={containerRef}
			data-header-theme='light'
			className='relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background max-md:flex-col-reverse'
		>
			<HeroBackground containerRef={containerRef} />
			<HeroText />
		</section>
	)
}

export default memo(Hero)
