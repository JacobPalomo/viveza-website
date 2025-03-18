import { FC, ReactNode, memo } from 'react'
import Link from 'next/link'
import { RiExternalLinkLine } from 'react-icons/ri'

interface ButtonProps {
	href: string
	children: ReactNode
}

const SocialLink: FC<ButtonProps> = ({ href, children }) => {
	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="bg-primary font-medium text-secondary flex gap-2 justify-center items-center !text-base border-[0.09375rem] border-secondary rounded-full px-4 py-1"
		>
			{children}
			<RiExternalLinkLine color="var(--color-secondary)" />
		</Link>
	)
}

export default memo(SocialLink)
