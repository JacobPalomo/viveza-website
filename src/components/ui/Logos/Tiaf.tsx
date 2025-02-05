interface Props {
	color?: string
	size?: number
}

const TiafLogo: React.FC<Props> = ({ color, size = 40 }) => {
	const aspectRatio = 107.04 / 142.67
	const width = size * aspectRatio

	return (
		<svg
			width={width}
			height={size}
			aria-labelledby='tiaf-svg-title'
			role='img'
			focusable='false'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 107.04 142.67'
			fill={color}
		>
			<title id='tiaf-svg-title'>TIAF</title>
			<g>
				<g>
					<polygon points='49.92 89.07 35.72 89.07 71.24 53.43 106.84 89.03 92.48 89.03 71.23 67.81 66.36 72.6 82.78 89.03 68.44 89.02 59.22 79.81 49.92 89.07' />
					<polygon points='0 89.05 60.39 28.65 42.56 10.85 53.34 0 106.85 53.43 95.99 64.28 71.19 39.49 21.51 89 0 89.05' />
					<g>
						<path d='M26.31,106.96v5.78h-9.52v29.93h-7.16v-29.93H.11v-5.78h26.19Z' />
						<path d='M39.56,106.96v35.71h-7.16v-35.71h7.16Z' />
						<path d='M69.38,135.86h-14.22l-2.35,6.8h-7.52l12.84-35.76h8.34l12.84,35.76h-7.57l-2.35-6.8ZM67.44,130.13l-5.17-14.94-5.17,14.94h10.33Z' />
						<path d='M107.04,106.96v5.78h-14.89v9.16h12.93v5.68h-12.93v15.09h-7.16v-35.71h22.05Z' />
					</g>
				</g>
			</g>
		</svg>
	)
}

export default TiafLogo
