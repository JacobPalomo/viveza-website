interface Props {
	title: React.ReactNode
	description: string
	image: React.ReactNode
	className?: string
}

const Feature: React.FC<Props> = ({ title, description, image, className }) => {
	return (
		<div
			className={`sticky top-0 flex min-h-screen flex-col justify-center gap-4 rounded-[21px] max-md:min-h-screen ${className}`}
		>
			<div className='absolute right-0 bottom-20 left-0 z-10 w-full text-white'>
				<h3 className='w-full pt-6 pl-6 !text-4xl'>{title}</h3>
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
