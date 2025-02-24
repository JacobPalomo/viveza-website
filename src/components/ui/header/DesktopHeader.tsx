import clsx from 'clsx'
import Link from 'next/link'
import { FC, memo, RefObject } from 'react'
import { RiArrowRightUpLine } from 'react-icons/ri'
import Logo from '../logos/VivezaCorto'
import HeaderLink from './Link'
import HeaderNav from './Nav'
import { MenuItem } from './Header'

interface Props {
	headerRef: RefObject<HTMLElement | null>
	isHovered: boolean
	onHover: () => void
	onBlur: () => void
	theme: 'light' | 'dark'
	items: MenuItem[]
	clipValue: string
}

const DesktopHeader: FC<Props> = ({
	headerRef,
	isHovered,
	onHover,
	onBlur,
	theme,
	items,
	clipValue,
}) => {
	return (
		<header
			className='fixed top-8 right-0 left-0 z-[51] w-full px-12 max-lg:hidden'
			ref={headerRef}
			onMouseEnter={onHover}
			onMouseLeave={onBlur}
		>
			<div className='relative z-[51] grid h-full min-h-12 w-full grid-cols-[1fr_2fr_1fr] overflow-hidden lg:px-8'>
				<Link
					href='/'
					aria-label='Viveza Textil'
					className='w-max cursor-pointer'
				>
					<h1 className='w-max'>
						<Logo
							className='logo block h-10 w-auto fill-current'
							color='normal'
						/>
					</h1>
				</Link>

				<HeaderNav
					className={clsx([
						'text-secondary',
						{
							'opacity-0': theme === 'light' && isHovered,
						},
					])}
				>
					{items.map(item => (
						<HeaderLink
							key={item.label}
							href={item.href}
							className={theme === 'light' && isHovered ? 'opacity-0' : ''}
						>
							{item.label}
						</HeaderLink>
					))}
				</HeaderNav>

				<Link
					href='/contacto'
					className={clsx([
						'flex h-max w-max items-center justify-end gap-2 self-center justify-self-end rounded-full border-[1.5px] border-secondary py-1 pr-2 pl-3 text-base text-secondary transition-all transition-discrete duration-200 hover:scale-105 active:scale-100',
						{
							'opacity-0': theme === 'light' && isHovered,
						},
					])}
				>
					<span className='uppercase'>Contacto</span>

					<RiArrowRightUpLine
						size={24}
						color='var(--color-secondary)'
					/>
				</Link>

				{/* Header Theme 'light' */}
				<div
					className={clsx([
						'absolute top-0 left-0 z-[53] grid h-full min-h-12 w-full grid-cols-[1fr_2fr_1fr] overflow-hidden lg:px-8',
						{ 'opacity-0': theme === 'dark' && isHovered },
					])}
					style={{ clipPath: clipValue }}
				>
					<Link
						href='/'
						aria-label='Viveza Textil'
						className='w-max cursor-pointer'
					>
						<h1 className='w-max'>
							<Logo
								className='logo block h-10 w-auto fill-current'
								color='white'
							/>
						</h1>
					</Link>

					<HeaderNav className='text-white'>
						{items.map(item => (
							<HeaderLink
								key={item.label}
								href={item.href}
								className={theme === 'dark' && isHovered ? 'opacity-0' : ''}
							>
								{item.label}
							</HeaderLink>
						))}
					</HeaderNav>

					<Link
						href='/contacto'
						className='flex h-max w-max items-center justify-end gap-2 self-center justify-self-end rounded-full border-[1.5px] border-white py-1 pr-2 pl-3 text-base text-white transition-all transition-discrete duration-200 hover:scale-105 active:scale-100'
					>
						<span className='uppercase'>Contacto</span>

						<RiArrowRightUpLine
							size={24}
							color='white'
						/>
					</Link>
				</div>
				{/* End Header Theme 'light' */}
			</div>
		</header>
	)
}

export default memo(DesktopHeader)
