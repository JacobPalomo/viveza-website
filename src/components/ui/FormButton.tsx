import clsx from 'clsx'
import { motion } from 'motion/react'
import { IconCheck, IconLoader2 } from '@tabler/icons-react'

interface Props {
	isSubmitting: boolean
	success: boolean
	children: React.ReactNode
}

const FormButton: React.FC<Props> = ({ isSubmitting, success, children }) => {
	return (
		<motion.button
			type='submit'
			disabled={isSubmitting || success}
			whileHover={isSubmitting || success ? {} : { scale: 1.05 }}
			whileTap={isSubmitting || success ? {} : { scale: 0.9 }}
			className={clsx([
				'flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-[#00aae2] px-3 py-2 font-bold transition-colors duration-200',
				{ 'bg-[#00aae2]/50': isSubmitting },
			])}
		>
			{success ? (
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{
						type: 'spring',
						stiffness: 260,
						damping: 20,
					}}
				>
					<IconCheck
						size={32}
						color='var(--color-cyan-950)'
					/>
				</motion.div>
			) : isSubmitting ? (
				<IconLoader2
					size={32}
					color='var(--color-cyan-950)'
					className='animate-spin'
				/>
			) : (
				<span className='text-base font-semibold text-cyan-950'>
					{children}
				</span>
			)}
		</motion.button>
	)
}

export default FormButton
