interface Props {
	children: React.ReactNode
	divisorColor?: string
	textColor?: string
	className?: string
}

const TitleTag: React.FC<Props> = ({
	children,
	divisorColor,
	textColor,
	className,
}) => {
	return (
		<div
			className={`!mb-3 flex flex-col items-start justify-center gap-1 ${className}`}
		>
			<p
				className={`!text-sm !tracking-widest ${!textColor && 'text-secondary'}`}
				style={textColor ? { color: textColor } : {}}
			>
				{children}
			</p>
			<div
				className={`h-[1.5px] w-12 ${!divisorColor && 'bg-secondary'}`}
				style={divisorColor ? { backgroundColor: divisorColor } : {}}
				aria-hidden
			></div>
		</div>
	)
}

export default TitleTag
