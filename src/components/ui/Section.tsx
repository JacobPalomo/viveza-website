import { FC, memo } from 'react'
import { HeaderTheme } from '@/components/ui/header/Header'

interface SectionProps {
	className?: string
	children: React.ReactNode
	dataHeaderTheme?: HeaderTheme
}

const Section: FC<SectionProps> = ({
	children,
	className,
	dataHeaderTheme,
}) => {
	return (
		<section
			data-header-theme={dataHeaderTheme}
			className={`z-20 min-h-screen w-full bg-background px-3 pt-3 ${className}`}
		>
			<div className='relative flex h-full w-full flex-col items-center justify-center'>
				{children}
			</div>
		</section>
	)
}

export default memo(Section)
