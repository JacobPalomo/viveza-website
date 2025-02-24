export default function HeaderBackdrop() {
	return (
		<div className='pointer-events-none fixed top-0 right-0 left-0 z-30 h-40 w-full'>
			<div className='pointer-events-none fixed top-0 z-[31] h-40 w-full'>
				<div
					className='pointer-events-none absolute inset-0'
					style={{
						backdropFilter: 'blur(0px)',
						WebkitBackdropFilter: 'blur(0px)',
					}}
				/>
				<div
					className='pointer-events-none absolute inset-0 rounded-[inherit]'
					style={{
						maskImage:
							'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 16.666666666666664%, rgba(255, 255, 255, 1) 33.33333333333333%, rgba(255, 255, 255, 0) 50%)',
						WebkitMaskImage:
							'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 16.666666666666664%, rgba(255, 255, 255, 1) 33.33333333333333%, rgba(255, 255, 255, 0) 50%)',
						backdropFilter: 'blur(1px)',
						WebkitBackdropFilter: 'blur(1px)',
					}}
				/>
				<div
					className='pointer-events-none absolute inset-0 rounded-[inherit]'
					style={{
						maskImage:
							'linear-gradient(0deg, rgba(255, 255, 255, 0) 16.666666666666664%, rgba(255, 255, 255, 1) 33.333333333333333%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 66.666666666666666%)',
						WebkitMaskImage:
							'linear-gradient(0deg, rgba(255, 255, 255, 0) 16.666666666666664%, rgba(255, 255, 255, 1) 33.333333333333333%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 66.666666666666666%)',
						backdropFilter: 'blur(2px)',
						WebkitBackdropFilter: 'blur(2px)',
					}}
				/>
				<div
					className='pointer-events-none absolute inset-0 rounded-[inherit]'
					style={{
						maskImage:
							'linear-gradient(0deg, rgba(255, 255, 255, 0) 33.333333333333333%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 66.666666666666666%, rgba(255, 255, 255, 0) 83.333333333333333%)',
						WebkitMaskImage:
							'linear-gradient(0deg, rgba(255, 255, 255, 0) 33.333333333333333%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 66.666666666666666%, rgba(255, 255, 255, 0) 83.333333333333333%)',
						backdropFilter: 'blur(4px)',
						WebkitBackdropFilter: 'blur(4px)',
					}}
				/>
				<div
					className='pointer-events-none absolute inset-0 rounded-[inherit]'
					style={{
						maskImage:
							'linear-gradient(0deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 66.666666666666666%, rgba(255, 255, 255, 1) 83.333333333333333%, rgba(255, 255, 255, 0) 100%)',
						WebkitMaskImage:
							'linear-gradient(0deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 66.666666666666666%, rgba(255, 255, 255, 1) 83.333333333333333%, rgba(255, 255, 255, 0) 100%)',
						backdropFilter: 'blur(8px)',
						WebkitBackdropFilter: 'blur(8px)',
					}}
				/>
				<div
					className='pointer-events-none absolute inset-0 rounded-[inherit]'
					style={{
						maskImage:
							'linear-gradient(0deg, rgba(255, 255, 255, 0) 66.66666666666666%, rgba(255, 255, 255, 1) 83.333333333333333%, rgba(255, 255, 255, 1) 100%, rgba(255, 255, 255, 0) 116.666666666666666%)',
						WebkitMaskImage:
							'linear-gradient(0deg, rgba(255, 255, 255, 0) 66.66666666666666%, rgba(255, 255, 255, 1) 83.333333333333333%, rgba(255, 255, 255, 1) 100%, rgba(255, 255, 255, 0) 116.666666666666666%)',
						backdropFilter: 'blur(16px)',
						WebkitBackdropFilter: 'blur(16px)',
					}}
				/>
			</div>
		</div>
	)
}
