interface Props {
	children: React.ReactNode
	className?: string
}

const MainContainer: React.FC<Props> = ({ children, className }) => {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-center bg-background ${className}`}
		>
			{children}
		</main>
	)
}

export default MainContainer
