'use client'

import { FormEventHandler } from 'react'
import { motion } from 'motion/react'

interface Props {
	className?: string
	onSubmit?: FormEventHandler<HTMLFormElement>
	children: React.ReactNode
}

const Form: React.FC<Props> = ({ className, onSubmit, children }) => {
	return (
		<motion.form
			initial={{ opacity: 0, filter: 'blur(10px)' }}
			animate={{ opacity: 1, filter: 'blur(0px)' }}
			transition={{ duration: 0.3, delay: 1 }}
			onSubmit={onSubmit}
			className={`flex h-full w-1/2 flex-col items-start justify-center gap-6 max-md:w-3/4 max-sm:w-full max-sm:px-10 ${className}`}
		>
			{children}
		</motion.form>
	)
}

export default Form
