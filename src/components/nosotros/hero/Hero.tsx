'use client'

import dynamic from 'next/dynamic'
import { memo } from 'react'

const Background = dynamic(
	() => import('@/components/nosotros/hero/Background'),
	{ ssr: false },
)
const Text = dynamic(() => import('@/components/nosotros/hero/Text'), {
	ssr: false,
})

const Hero = () => {
	return (
		<section
			data-header-theme='dark'
			className='background relative flex h-screen w-full flex-col items-center justify-center max-md:flex-col-reverse'
		>
			<Background />
			<Text />
		</section>
	)
}

export default memo(Hero)
