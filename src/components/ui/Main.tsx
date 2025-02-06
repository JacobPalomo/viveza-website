interface Props {
	children: React.ReactNode
}

const MainContainer: React.FC<Props> = ({ children }) => {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center bg-background'>
			{children}
		</main>
	)
}

export default MainContainer
