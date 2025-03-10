import { FC, memo } from 'react'

interface SectionProps {
	className?: string
	children: React.ReactNode
}

const Section: FC<SectionProps> = ({ children, className }) => {
	return (
		<section
			className={`z-20 min-h-screen w-full bg-background px-3 pt-3 ${className}`}
		>
			<div className='relative flex h-full w-full flex-col items-center justify-center'>
				{children}
			</div>
		</section>
	)
}

export default memo(Section)
