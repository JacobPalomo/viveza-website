'use client'

import { motion } from 'motion/react'

interface Props {
	children: React.ReactNode
	className?: string
}

const Button: React.FC<Props> = ({ children, className }) => {
	return (
		<motion.button
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.8 }}
			className={`cursor-pointer rounded-lg bg-white px-6 py-3 text-secondary ${className}`}
		>
			<span className='font-[500]'>{children}</span>
		</motion.button>
	)
}

export default Button
