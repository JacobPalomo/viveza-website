import Link from 'next/link'

export interface FooterLinkProps {
	href: string
	label: string
	external?: boolean
}

const FooterLink: React.FC<FooterLinkProps> = ({
	label,
	href,
	external = false,
}) => {
	return (
		<Link
			href={href}
			rel={external ? 'noopener noreferrer' : ''}
			target={external ? '_blank' : ''}
			className='flex min-h-10 w-full items-center justify-start hover:underline hover:underline-offset-2 active:opacity-75'
		>
			{label}
		</Link>
	)
}

export default FooterLink
