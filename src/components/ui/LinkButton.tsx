'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

interface Props {
	children: React.ReactNode
	href: string
	className?: string
}

const LinkButton: React.FC<Props> = ({ children, href, className }) => {
	return (
		<motion.div
			whileHover={{ scale: 1.05, originX: 0 }}
			whileTap={{ scale: 0.9, originX: 0 }}
		>
			<motion.div
				initial={{ scale: 0, originY: 1, originX: 0.2 }}
				animate={{ scale: 1 }}
				transition={{
					duration: 0.3,
					delay: 0.15,
					type: 'spring',
					stiffness: 200,
					damping: 16,
				}}
			>
				<Link
					href={href}
					className={`!w-[max-content] cursor-pointer rounded-lg bg-primary px-6 py-3 font-medium text-white ${className}`}
				>
					{children}
				</Link>
			</motion.div>
		</motion.div>
	)
}

export default LinkButton
