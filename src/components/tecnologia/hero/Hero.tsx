'use client'

import { FC, memo, useRef } from 'react'
import dynamic from 'next/dynamic'

const Background = dynamic(
	() => import('@/components/tecnologia/hero/Background'),
	{ ssr: false },
)

const Text = dynamic(() => import('@/components/tecnologia/hero/Text'), {
	ssr: false,
})

const Hero: FC = () => {
	const containerRef = useRef<HTMLElement>(null)

	return (
		<section
			ref={containerRef}
			data-header-theme='light'
			className='relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background max-md:flex-col-reverse'
		>
			<Background containerRef={containerRef} />
			<Text />
		</section>
	)
}

export default memo(Hero)
