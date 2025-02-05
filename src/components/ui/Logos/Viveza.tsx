interface Props {
	size?: number
	className?: string
}

const VivezaLogo: React.FC<Props> = ({ size = 40, className }) => {
	const aspectRatio = 575.8 / 80.6
	const width = size * aspectRatio

	return (
		<svg
			width={width}
			height={size}
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
			x='0'
			y='0'
			aria-labelledby='viveza-logo-svg-title'
			role='img'
			focusable={false}
			viewBox='0 0 575.8 80.6'
			style={{ background: 'new 0 0 575.8 80.6' }}
			xmlSpace='preserve'
			className={`${className}`}
		>
			<title id='viveza-logo-svg-title'>
				Viveza Textil - Ropa interior y deportiva
			</title>
			<g id='Capa_1-2'>
				<path
					d='M373.6 25.9v8.4h-16.5v46.4H347V34.2h-16.5v-8.4s43.1 0 43.1.1zm41 0V34h-24.3v15.2h19.1V57h-19.1v15.5h24.3v8.1h-34.5V25.9h34.5zm22 26.5-17.5-26.6h10.1c.7 0 1.2.1 1.5.3.3.2.6.5.9.9l12.5 20.1c.1-.3.3-.7.4-1 .1-.3.3-.6.5-1l11.4-18c.5-.9 1.3-1.4 2.2-1.4h9.8L450.7 52l18.1 28.6h-10.2c-.7 0-1.2-.2-1.6-.5-.4-.3-.8-.8-1-1.2l-12.7-21c-.1.3-.2.6-.3.8-.1.3-.2.5-.4.7l-12.1 19.4c-.3.4-.6.8-1 1.2-.4.4-.9.6-1.5.6h-9.5l18.1-28.2zm76.8-26.5v8.4H497v46.4h-10.2V34.2h-16.5v-8.4c-.1 0 43.1 0 43.1.1zm17.9 54.7h-10.2V25.9h10.2v54.7zm22.5-8.4h21.9v8.4h-32.1V25.9h10.2v46.3z'
					fill='#FFFFFF'
				/>
				<path
					fill='#28A9E0'
					style={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
					d='M83.6 0c3.8 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.2-7 7-7'
				/>
				<path
					fill='#28a9e0'
					d='M131.3 80.2c1.9-19.5 3-39.9 3.1-59.3 12.9.1 35.2.1 48.5 0-.2 3.4-.6 9.1-.7 13-11.8-.5-18.9-.5-29.4-.1-.2 3.3-.4 6.6-.5 10 9.4.2 12.3.2 24.9-.2-.3 3.7-.5 8.1-.8 13.2-10.6-.1-14.9-.2-25 .2-.2 3.5-.4 7.1-.5 10.6 9.2 0 19.4-.1 29.9-.7-.3 4.3-.6 8.7-.9 13.3-15.1-.2-33-.1-48.6 0m-51.2.4c-.9-3.5-4.7-14.2-6-17.8l11.6-19c2.1 7 4.6 14.3 6.5 21.8 6-15.2 13.5-29 19.7-44.3 9.2.1 9.8.1 19.6 0-10.3 19.6-20.3 39.1-30 59.3-8.6-.1-14.1 0-21.4 0z'
				/>
				<path
					fill='#28A9E0'
					style={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
					d='M0 21.6h16.3l14.1 30.5 20.8-31.5h39.4l-35.5 59-17.5.1 27-44.1h-7l-28.3 43zm315 57.9h-17l-14.2-30.9-20.8 32-17.8-.2 39.7-59.6z'
				/>
				<path
					fill='#28A9E0'
					style={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
					d='m309.4 68.6 5.6 10.9 11.7-9.9-5.2-9.9z'
				/>
				<path
					fill='#28a9e0'
					d='M188 80.2c.3-6 .5-10.4.5-13.2l2.6-2.5c.3-.4 3-3.2 8-8.6l14.4-15.6c1.7-1.9 3.6-4.1 5.9-6.7h-12.8c-4.6 0-9.4.2-14.5.5.3-3.1.4-6.5.4-10.2 0-.7 0-1.6-.1-2.8 8.2.1 16.9.1 26.2.1s17.8 0 24.7-.1c-.2 3-.3 5.4-.4 7.2l-.2 5.8-2.5 2.4c-.4.4-.8.8-1.2 1.3l-27.2 29.7H224l12-.2h12.5l-8.4 13.1c-9.2-.1-17.6-.1-25.1-.1h-21.1l-5.9-.1z'
				/>
				<linearGradient
					id='SVGID_1_'
					gradientUnits='userSpaceOnUse'
					x1='69.241'
					y1='52.16'
					x2='63.77'
					y2='55.707'
					gradientTransform='matrix(1 0 0 -1 0 82)'
				>
					<stop
						offset='.11'
						style={{ stopColor: '#157198', stopOpacity: 0 }}
					/>
					<stop
						offset='.35'
						style={{ stopColor: '#157198', stopOpacity: 0.32 }}
					/>
					<stop
						offset='.63'
						style={{ stopColor: '#157198', stopOpacity: 0.63 }}
					/>
					<stop
						offset='.85'
						style={{ stopColor: '#157198', stopOpacity: 0.83 }}
					/>
					<stop
						offset='1'
						style={{ stopColor: '#157198', stopOpacity: 0.9 }}
					/>
				</linearGradient>
				<path
					style={{
						fillRule: 'evenodd',
						clipRule: 'evenodd',
						fill: 'url(#SVGID_1_)',
					}}
					d='M69 20.5h6.3l-10.7 15h-6.9z'
				/>
				<linearGradient
					id='SVGID_00000078025680135909886530000001684220399262025142_'
					gradientUnits='userSpaceOnUse'
					x1='288.712'
					y1='-119.838'
					x2='271.908'
					y2='-129.616'
					gradientTransform='matrix(.8853 -.465 -.5068 -.965 6.5 79.383)'
				>
					<stop
						offset='.26'
						style={{ stopColor: '#157198', stopOpacity: 0 }}
					/>
					<stop
						offset='.75'
						style={{ stopColor: '#157198', stopOpacity: 0.63 }}
					/>
					<stop
						offset='1'
						style={{ stopColor: '#157198', stopOpacity: 0.9 }}
					/>
				</linearGradient>
				<path
					style={{
						fillRule: 'evenodd',
						clipRule: 'evenodd',
						fill: 'url(#SVGID_00000078025680135909886530000001684220399262025142_)',
					}}
					d='M326.7 69.6 315 79.5l-5.6-10.9 12.1-8.9z'
				/>
			</g>
		</svg>
	)
}

export default VivezaLogo
