import TitleTag from '@/components/ui/TitleTag'

interface Props {
	title: React.ReactNode
	description: string
	image: React.ReactNode
	tag: React.ReactNode
	className?: string
}

const Feature: React.FC<Props> = ({
	title,
	description,
	image,
	className,
	tag,
}) => {
	return (
		<div
			className={`sticky top-0 flex min-h-screen flex-col justify-center gap-4 rounded-[21px] max-md:min-h-screen ${className}`}
		>
			<div className='absolute right-0 bottom-20 left-0 z-10 w-full text-white'>
				<TitleTag
					className='pl-6'
					textColor='white'
					divisorColor='white'
				>
					{tag}
				</TitleTag>
				<h3 className='!mb-6 w-full pl-6'>{title}</h3>
				<p className='w-full px-6'>{description}</p>
			</div>
			<div className='h-full w-full'>
				<div className='absolute z-[9] h-full w-full bg-gradient-to-t from-black/75 to-transparent to-85%'></div>
				{image}
			</div>
		</div>
	)
}

export default Feature
