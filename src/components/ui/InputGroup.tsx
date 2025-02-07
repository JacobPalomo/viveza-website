interface Props {
	children: React.ReactNode
}

const InputGroup: React.FC<Props> = ({ children }) => {
	return (
		<div className='flex w-full items-start justify-between gap-4 max-sm:flex-col max-sm:gap-6'>
			{children}
		</div>
	)
}

export default InputGroup
