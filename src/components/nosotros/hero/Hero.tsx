'use client'

import dynamic from 'next/dynamic'
import { memo, useRef } from 'react'
import CoreValues from '@/components/nosotros/hero/CoreValues'

const Background = dynamic(
	() => import('@/components/nosotros/hero/Background'),
	{ ssr: false },
)
const Text = dynamic(() => import('@/components/nosotros/hero/Text'), {
	ssr: false,
})

const Hero = () => {
	const containerRef = useRef<HTMLElement>(null)

	return (
		<section
			ref={containerRef}
			className='relative flex h-screen w-full flex-col items-center justify-center overflow-hidden'
		>
			<Background containerRef={containerRef} />

			<CoreValues />

			<Text />
		</section>
	)
}

export default memo(Hero)
