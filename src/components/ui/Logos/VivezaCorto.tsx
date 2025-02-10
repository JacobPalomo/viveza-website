interface Props {
	className?: string
	color?: string | 'normal'
}

const Logo: React.FC<Props> = ({ className, color = 'normal' }) => {
	return (
		<>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
				viewBox='0 0 326.7 80.6'
				role='img'
				focusable='false'
				className={`${className}`}
			>
				<path
					className='cls-1'
					fillRule='evenodd'
					fill={color === 'normal' ? '#28a9e0' : color}
					d='M83.6,0a7,7,0,1,1-7,7,7,7,0,0,1,7-7'
				/>
				<path
					className='cls-2'
					fill={color === 'normal' ? '#28a9e0' : color}
					d='M131.3,80.2c1.9-19.5,3-39.9,3.1-59.3,12.9.1,35.2.1,48.5,0-.2,3.4-.6,9.1-.7,13-11.8-.5-18.9-.5-29.4-.1-.2,3.3-.4,6.6-.5,10,9.4.2,12.3.2,24.9-.2-.3,3.7-.5,8.1-.8,13.2-10.6-.1-14.9-.2-25,.2-.2,3.5-.4,7.1-.5,10.6,9.2,0,19.4-.1,29.9-.7-.3,4.3-.6,8.7-.9,13.3-15.1-.2-33-.1-48.6,0'
				/>
				<path
					className='cls-2'
					fill={color === 'normal' ? '#28a9e0' : color}
					d='M80.1,80.6c-.9-3.5-4.7-14.2-6-17.8l11.6-19c2.1,7,4.6,14.3,6.5,21.8,6-15.2,13.5-29,19.7-44.3,9.2.1,9.8.1,19.6,0-10.3,19.6-20.3,39.1-30,59.3-8.6-.1-14.1,0-21.4,0Z'
				/>
				<polygon
					className='cls-1'
					fill={color === 'normal' ? '#28a9e0' : color}
					fillRule='evenodd'
					points='0 21.6 16.3 21.6 30.4 52.1 51.2 20.6 90.6 20.6 55.1 79.6 37.6 79.7 64.6 35.6 57.6 35.6 29.3 78.6 0 21.6'
				/>
				<polygon
					className='cls-1'
					fill={color === 'normal' ? '#28a9e0' : color}
					fillRule='evenodd'
					points='315 79.5 298 79.5 283.8 48.6 263 80.6 245.2 80.4 284.9 20.8 315 79.5'
				/>
				<polygon
					className='cls-1'
					fill={color === 'normal' ? '#28a9e0' : color}
					fillRule='evenodd'
					points='309.4 68.6 315 79.5 326.7 69.6 321.5 59.7 309.4 68.6'
				/>
				<path
					className='cls-2'
					fill={color === 'normal' ? '#28a9e0' : color}
					d='M188,80.2c.3-6,.5-10.4.5-13.2l2.6-2.5c.3-.4,3-3.2,8-8.6l14.4-15.6c1.7-1.9,3.6-4.1,5.9-6.7H206.6c-4.6,0-9.4.2-14.5.5.3-3.1.4-6.5.4-10.2,0-.7,0-1.6-.1-2.8,8.2.1,16.9.1,26.2.1s17.8,0,24.7-.1c-.2,3-.3,5.4-.4,7.2l-.2,5.8-2.5,2.4a15.38,15.38,0,0,0-1.2,1.3L211.8,67.5H224l12-.2h12.5l-8.4,13.1c-9.2-.1-17.6-.1-25.1-.1H193.9l-5.9-.1Z'
				/>
				<polygon
					className='cls-3'
					fill='url(#gradient1)'
					fillRule='evenodd'
					points='69.05 20.6 75.43 20.6 64.59 35.6 57.6 35.6 69.05 20.6'
				/>
				<polygon
					className='cls-4'
					fillRule='evenodd'
					fill='url(#gradient2)'
					points='326.7 69.6 315 79.5 309.4 68.6 321.5 59.7 326.7 69.6'
				/>

				<defs>
					<linearGradient
						id='gradient1'
						x1='69.37'
						y1='577.95'
						x2='63.74'
						y2='574.3'
						gradientTransform='translate(0 -548)'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							offset='0.11'
							stopColor={color === 'normal' ? '#157198' : 'rgba(0, 0, 0, 0.15)'}
							stopOpacity='0'
						/>
						<stop
							offset='0.35'
							stopColor={color === 'normal' ? '#157198' : 'rgba(0, 0, 0, 0.15)'}
							stopOpacity='0.32'
						/>
						<stop
							offset='0.63'
							stopColor={color === 'normal' ? '#157198' : 'rgba(0, 0, 0, 0.15)'}
							stopOpacity='0.63'
						/>
						<stop
							offset='0.85'
							stopColor={color === 'normal' ? '#157198' : 'rgba(0, 0, 0, 0.15)'}
							stopOpacity='0.83'
						/>
						<stop
							offset='1'
							stopColor={color === 'normal' ? '#157198' : 'rgba(0, 0, 0, 0.15)'}
							stopOpacity='0.9'
						/>
					</linearGradient>
					<linearGradient
						id='gradient2'
						x1='125.66'
						y1='831.07'
						x2='108.85'
						y2='840.85'
						gradientTransform='matrix(0.89, -0.47, 0.51, 0.96, -209.59, -682.77)'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							offset='0.26'
							stopColor={color === 'normal' ? '#157198' : 'rgba(0, 0, 0, 0.15)'}
							stopOpacity='0'
						/>
						<stop
							offset='0.75'
							stopColor={color === 'normal' ? '#157198' : 'rgba(0, 0, 0, 0.15)'}
							stopOpacity='0.63'
						/>
						<stop
							offset='1'
							stopColor={color === 'normal' ? '#157198' : 'rgba(0, 0, 0, 0.15)'}
							stopOpacity='0.9'
						/>
					</linearGradient>
				</defs>
			</svg>
		</>
	)
}

export default Logo
