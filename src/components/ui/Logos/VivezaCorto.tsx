interface Props {
	className?: string
	color?: string
}

const Logo: React.FC<Props> = ({ className, color = 'black' }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 512 512'
			aria-labelledby='viveza-svg-title'
			role='img'
			focusable='false'
			fill={color}
			className={`${className}`}
		>
			<title id='viveza-svg-title'>
				Viveza Textil - Ropa Seamless y Deportiva
			</title>

			<circle
				cx='324.66'
				cy='126.72'
				r='27.02'
				transform='translate(-20.43 77.98) rotate(-13.28)'
			/>

			<path d='M435.4,182.34c-23.8,59.07-52.87,112.68-76.2,171.59-7.6-29.15-16.94-57.36-25.23-84.54l-44.77,73.84c4.85,13.88,19.54,55.47,23.14,69.03v.04c28.6-.23,49.73-.54,82.95,0,37.33-78.49,76.24-154.11,116.12-229.96-38.18.47-40.23.43-76.01,0Z' />

			<polygon points='198.93 179.7 118.31 301.87 63.61 183.58 .59 183.58 114.16 404.47 224 237.84 250.94 237.84 146.41 408.93 214.08 408.38 351.91 179.7 198.93 179.7' />
		</svg>
	)
}

export default Logo
