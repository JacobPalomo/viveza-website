import Link from 'next/link'

interface Props {
	href: string
	children: React.ReactNode
	className?: string
}

const HeaderLink: React.FC<Props> = ({ children, href, className }) => {
	return (
		<li className='h-full'>
			<Link
				href={href}
				className={`flex h-full items-center justify-center px-3 text-base tracking-widest uppercase transition-all transition-discrete duration-200 group-hover:opacity-65 hover:scale-105 hover:!opacity-100 active:scale-100 ${className}`}
			>
				{children}
			</Link>
		</li>
	)
}

export default HeaderLink
