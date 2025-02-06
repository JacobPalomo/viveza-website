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
				className={`flex h-full items-center justify-center px-3 text-base tracking-widest uppercase ${className}`}
			>
				{children}
			</Link>
		</li>
	)
}

export default HeaderLink
