'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { Dispatch, FC, memo, RefObject, SetStateAction } from 'react'
import LogoCorto from '../logos/VivezaCorto'
import { MenuItem } from './Header'
import { RiExternalLinkLine } from 'react-icons/ri'
import { motion } from 'motion/react'

interface Props {
	headerRef: RefObject<HTMLElement | null>
	isHovered: boolean
	onHover: () => void
	onBlur: () => void
	theme: 'light' | 'dark'
	items: MenuItem[]
	clipValue: string
	setIsOpen: Dispatch<SetStateAction<boolean>>
	isOpen: boolean
}

const MobileHeader: FC<Props> = ({
	headerRef,
	isHovered,
	onHover,
	onBlur,
	theme,
	items,
	clipValue,
	isOpen,
	setIsOpen,
}) => {
	return (
		<>
			<header
				className='fixed top-8 right-0 left-0 z-[51] w-full px-8 lg:hidden'
				ref={headerRef}
				onMouseEnter={onHover}
				onMouseLeave={onBlur}
			>
				<div className='relative z-[51] grid h-full min-h-12 w-full grid-cols-2 overflow-hidden'>
					<Link
						href='/'
						aria-label='Viveza Textil'
						className='w-max cursor-pointer'
					>
						<h1 className='w-max'>
							<LogoCorto
								className='logo block h-10 w-auto fill-current'
								color='normal'
							/>
						</h1>
					</Link>

					<button
						className='flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-2 self-center justify-self-end transition-all duration-200 hover:scale-105'
						onClick={() => setIsOpen(!isOpen)}
					>
						<div
							className={clsx([
								'h-[0.125rem] w-6 bg-secondary transition-all duration-200',
								{ 'translate-y-[10px] rotate-z-45': isOpen },
							])}
						></div>
						<div
							className={clsx([
								'h-[0.125rem] w-6 bg-secondary transition-all duration-200',
								{ '-rotate-z-45': isOpen },
							])}
						></div>
					</button>

					{/* Header Theme 'light' */}
					<div
						className={clsx([
							'absolute top-0 left-0 z-[53] grid h-full min-h-12 w-full grid-cols-2 overflow-hidden',
							{ 'opacity-0': (theme === 'dark' && isHovered) || isOpen },
						])}
						style={{ clipPath: clipValue }}
					>
						<Link
							href='/'
							aria-label='Viveza Textil'
							className='w-max cursor-pointer justify-self-start'
						>
							<h1 className='w-max'>
								<LogoCorto
									className='logo block h-10 w-auto fill-current'
									color='var(--color-background)'
								/>
							</h1>
						</Link>

						<button
							className='flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-2 self-center justify-self-end transition-all duration-200 hover:scale-105'
							onClick={() => setIsOpen(!isOpen)}
						>
							<div
								className={clsx([
									'h-[0.125rem] w-6 bg-white transition-all duration-200',
									{ 'translate-y-[10px] rotate-z-45': isOpen },
								])}
							></div>
							<div
								className={clsx([
									'h-[0.125rem] w-6 bg-white transition-all duration-200',
									{ '-rotate-z-45': isOpen },
								])}
							></div>
						</button>
					</div>
					{/* End Header Theme 'light' */}
				</div>
			</header>

			<motion.div
				initial={{ clipPath: 'inset(0 0 0 100%)' }}
				animate={{ clipPath: isOpen ? 'inset(0 0 0 0%)' : 'inset(0 0 0 100%)' }}
				transition={{ duration: 0.2 }}
				className='fixed top-0 left-0 z-[31] h-full w-full overflow-hidden p-[0.5rem] lg:hidden'
			>
				<nav className='flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-lg border border-secondary/10 bg-background pt-25 pb-6'>
					<motion.ul
						initial={{ translateX: '-125%', opacity: isOpen ? 1 : 0 }}
						animate={{
							translateX: isOpen ? 0 : '-125%',
							opacity: isOpen ? 1 : 0,
						}}
						transition={{ duration: 0.3, easings: ['backIn', 'backOut'] }}
						className='flex h-max w-full flex-col items-center justify-center'
					>
						{items.map(item => (
							<li
								key={item.label}
								className='h-max w-full'
							>
								<a
									href={item.href}
									className='flex h-15 w-full items-center justify-start gap-2 px-6'
								>
									{item.label}
								</a>
							</li>
						))}
						<li className='h-max w-full'>
							<a
								href='/contacto'
								className='flex !h-15 w-full items-center justify-start gap-2 px-6'
							>
								Contacto
							</a>
						</li>
					</motion.ul>

					<motion.div
						initial={{ translateY: '125%', opacity: 0 }}
						animate={{
							translateY: isOpen ? 0 : '125%',
							opacity: isOpen ? 1 : 0,
						}}
						transition={{ duration: 0.3, easings: ['backIn', 'backOut'] }}
						className='flex w-full flex-col items-center justify-center'
					>
						<h6 className='!mb-4 text-sm'>Síguenos en:</h6>
						<ul className='!mb-10 grid w-full grid-cols-2 gap-6 px-6'>
							<li className='w-full'>
								<a
									href='https://www.facebook.com/share/1A1ww9KDrU/?mibextid=wwXIfr'
									target='_blank'
									rel='noopener noreferrer'
									className='flex h-10 w-full items-center justify-center gap-2 rounded-full border-[0.09375rem] border-secondary text-sm !font-medium uppercase'
								>
									Facebook
									<RiExternalLinkLine color='var(--color-secondary)' />
								</a>
							</li>
							<li className='w-full'>
								<a
									href='https://www.instagram.com/vivezatextil'
									target='_blank'
									rel='noopener noreferrer'
									className='flex h-10 w-full items-center justify-center gap-2 rounded-full border-[0.09375rem] border-secondary text-sm !font-medium uppercase'
								>
									Instagram
									<RiExternalLinkLine color='var(--color-secondary)' />
								</a>
							</li>
						</ul>

						<span className='text-sm'>
							&copy; {new Date().getFullYear()} Viveza Textil.
						</span>
					</motion.div>
				</nav>
			</motion.div>
		</>
	)
}

export default memo(MobileHeader)
