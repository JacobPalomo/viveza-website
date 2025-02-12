'use client'

import React, { Suspense } from 'react'
import Main from '@/components/ui/Main'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const Game = dynamic(() => import('@/components/Game'), { ssr: false })

export default function NotFound() {
	console.log('NotFound component rendered')

	return (
		<Main className='before-radial-mask-image pt-70 pb-20'>
			<div className='z-10 !mb-10 flex flex-col items-center justify-center gap-1'>
				<p className='!text-sm !tracking-widest'>ERROR 404</p>
				<div className='h-[1.5px] w-12 bg-primary'></div>
				<h1 className='z-10 mb-4 text-4xl font-bold'>Página no encontrada</h1>

				<Link
					href='/'
					className='!mt-10 cursor-pointer underline underline-offset-4'
				>
					Regresar al inicio
				</Link>
			</div>

			<Suspense
				fallback={
					<div className='z-10 h-[600px] w-screen animate-pulse bg-red-500' />
				}
			>
				<Game />
			</Suspense>
		</Main>
	)
}
