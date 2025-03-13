import { FC, memo } from 'react'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

const values = [
	'Innovación',
	'Colaboración',
	'Adaptabilidad',
	'Orientación al Cliente',
	'Diversidad',
	'Responsabilidad Social',
	'Transparencia',
]

const CoreValues: FC = () => {
	const { ref, inView } = useInView({
		triggerOnce: false,
		threshold: 0.1, // El componente se considera visible cuando al menos un 10% es visible
	})

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, filter: 'blur(8px)' }}
			whileInView={{ opacity: 1, filter: 'blur(0)' }}
			className='absolute right-0 z-20 w-[100vh] translate-x-[35%] -rotate-90 transform overflow-hidden bg-background max-sm:right-auto max-sm:bottom-10 max-sm:rotate-0'
		>
			<motion.div
				className='flex items-center gap-6 px-4 whitespace-nowrap'
				animate={inView ? { x: ['0%', '-50%'] } : { x: '0%' }} // Detiene la animación cuando no es visible
				transition={{
					repeat: inView ? Infinity : 0, // La animación solo se repite si es visible
					repeatType: 'loop',
					ease: 'linear',
					duration: 10,
				}}
			>
				{[...values, ...values].map((value, index) => (
					<span
						key={index}
						className='tracking-wider uppercase'
					>
						{value}
					</span>
				))}
			</motion.div>
		</motion.div>
	)
}

export default memo(CoreValues)
