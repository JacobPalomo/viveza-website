interface Props {
	children: React.ReactNode
	className?: string
}

const HeaderNav: React.FC<Props> = ({ children, className }) => {
	return (
		<nav>
			<ul
				className={`group flex h-full list-none items-center justify-center gap-4 ${className}`}
			>
				{children}
			</ul>
		</nav>
	)
}

export default HeaderNav
