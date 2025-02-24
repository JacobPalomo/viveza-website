import Link from 'next/link'
import { CSSProperties } from 'react'

interface Props {
	href: string
	children: React.ReactNode
	className?: string
	style?: CSSProperties
}

const HeaderLink: React.FC<Props> = ({ children, href, className, style }) => {
	return (
		<li
			className='h-full'
			style={style}
		>
			<Link
				href={href}
				className={`flex h-full items-center justify-center px-3 tracking-widest uppercase transition-all transition-discrete duration-200 group-hover:opacity-65 hover:scale-105 hover:!opacity-100 active:scale-100 ${className}`}
			>
				{children}
			</Link>
		</li>
	)
}

export default HeaderLink
