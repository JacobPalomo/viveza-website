import { FC, memo } from 'react'

interface SectionProps {
	className?: string
	children: React.ReactNode
}

const Section: FC<SectionProps> = ({ children, className }) => {
	return (
		<section
			className={`relative z-20 flex h-full min-h-screen w-full flex-col items-center justify-center bg-background p-3 ${className}`}
		>
			{children}
		</section>
	)
}

export default memo(Section)
