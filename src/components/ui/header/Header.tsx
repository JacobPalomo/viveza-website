'use client'

import Link from 'next/link'
import Logo from '@/components/ui/Logos/VivezaCorto'
import HeaderLink from '@/components/ui/header/Link'
import HeaderNav from '@/components/ui/header/Nav'
import {
	IconArrowNarrowRight,
	IconBrandLine,
	IconBrandMedium,
	IconHome,
	IconMenu4,
	IconNotebook,
	IconTelescope,
	IconX,
} from '@tabler/icons-react'
import HeaderBackdrop from './Backdrop'
import { useState } from 'react'
import { motion } from 'motion/react'

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)

	const sidebarVariants = {
		open: {
			clipPath: `circle(2000px at 110% 0px)`,
			transition: {
				type: 'spring',
				stiffness: 30,
				restDelta: 2,
			},
		},
		closed: {
			clipPath: 'circle(20px at 110% 0px)',
			transition: {
				delay: 0.2,
				type: 'spring',
				stiffness: 400,
				damping: 40,
			},
		},
	}

	return (
		<>
			{/* Desktop header */}
			<header className='absolute top-0 max-md:hidden'>
				<div className='flex items-center justify-between p-6 lg:px-8'>
					<Link
						href='/'
						aria-label='Viveza Textil'
						className='fixed top-8 right-0 left-0 z-50 !ml-12 w-max cursor-pointer'
					>
						<h1 className='w-max'>
							<Logo className='block h-10 w-auto fill-current' />
						</h1>
					</Link>
					<div
						className='fixed top-8 right-0 left-0 z-40 grid min-h-12 w-full grid-cols-[1fr_2fr_1fr] px-12 text-white'
						style={{ mixBlendMode: 'difference' }}
					>
						<HeaderNav>
							<HeaderLink href='/#hero'>Inicio</HeaderLink>
							<HeaderLink href='/#conocenos'>Conócenos</HeaderLink>
							<HeaderLink href='/#marcas'>Marcas</HeaderLink>
							<HeaderLink href='https://blog.vivezasport.com'>Blog</HeaderLink>
						</HeaderNav>

						<Link
							href='/contacto'
							className='col-start-3 col-end-4 flex h-full w-full items-center justify-end gap-2 self-center justify-self-end text-base'
						>
							<span className='uppercase'>Contacto</span>

							<IconArrowNarrowRight />
						</Link>
					</div>
				</div>
			</header>
			{/* End Desktop Header */}

			{/* Tablet & Mobile Header */}
			<header className='absolute top-0 min-md:hidden'>
				<div className='flex items-center justify-between p-4'>
					<Link
						href='/'
						aria-label='Viveza Textil'
						className='fixed top-8 right-0 left-0 z-50 !ml-8 w-max cursor-pointer'
					>
						<h1>
							<Logo
								className='block h-10 w-auto fill-current'
								color={isOpen ? 'white' : 'normal'}
							/>
						</h1>
					</Link>

					<div
						className='fixed top-8 right-0 left-0 z-40 grid w-full grid-cols-2 px-6 text-white'
						style={{ mixBlendMode: 'difference' }}
					>
						<button
							className='col-start-2 col-end-3 self-center justify-self-end p-2'
							onClick={() => setIsOpen(!isOpen)}
						>
							{!isOpen ? <IconMenu4 size={35} /> : <IconX size={35} />}
						</button>
					</div>
				</div>

				<motion.nav
					initial={false}
					animate={isOpen ? 'open' : 'closed'}
					variants={sidebarVariants}
					className='fixed top-0 right-0 bottom-0 z-30 h-max w-full border-b-2 border-white/75 bg-gradient-to-b from-primary from-5% to-transparent p-8 pt-30 backdrop-blur-md'
				>
					<ul className='!space-y-8 text-lg text-cyan-950'>
						<li>
							<Link
								href='/'
								onClick={() => setIsOpen(false)}
								className='flex w-full items-center gap-2 hover:underline'
							>
								<IconHome /> Inicio
							</Link>
						</li>
						<li>
							<Link
								href='/#conocenos'
								onClick={() => setIsOpen(false)}
								className='flex w-full items-center gap-2 hover:underline'
							>
								<IconTelescope /> Conócenos
							</Link>
						</li>
						<li>
							<Link
								href='/#marcas'
								onClick={() => setIsOpen(false)}
								className='flex w-full items-center gap-2 hover:underline'
							>
								<IconBrandMedium /> Marcas
							</Link>
						</li>
						<li>
							<Link
								href='https://blog.vivezasport.com'
								onClick={() => setIsOpen(false)}
								className='flex w-full items-center gap-2 hover:underline'
							>
								<IconNotebook /> Blog
							</Link>
						</li>
						<li>
							<Link
								href='/contacto'
								onClick={() => setIsOpen(false)}
								className='flex w-full items-center gap-2 hover:underline'
							>
								<IconBrandLine />
								Contacto
							</Link>
						</li>
					</ul>
				</motion.nav>
			</header>
			{/* End Tablet & Mobile Header */}

			<HeaderBackdrop />
		</>
	)
}
