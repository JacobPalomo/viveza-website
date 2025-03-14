'use client'

import { FC, memo } from 'react'
import { motion } from 'motion/react'

const Text: FC = () => {
	return (
		<div className='absolute bottom-0 left-1/2 z-10 flex w-4/7 -translate-x-1/2 flex-col items-center gap-4 max-md:left-1/2 max-md:w-5/7 max-sm:w-full max-sm:px-8 max-sm:pb-30'>
			<motion.div
				initial={{ opacity: 0, x: -100 }}
				animate={{ opacity: 1, x: 0 }}
				className='flex flex-col items-center justify-center gap-1'
			>
				<p className='!text-sm !tracking-widest text-white'>TECNOLOGÍA</p>
				<div className='h-[1.5px] w-12 bg-white' />
			</motion.div>

			<h2 className='!mb-20 text-center !font-normal text-white max-md:!mb-5'>
				<motion.span
					initial={{ opacity: 0, filter: 'blur(8px)' }}
					animate={{ opacity: 0.75, filter: 'blur(0px)' }}
					transition={{ duration: 0.3, delay: 0.3 }}
				>
					Aquí
				</motion.span>{' '}
				<motion.span
					initial={{ opacity: 0, filter: 'blur(8px)' }}
					animate={{ opacity: 1, filter: 'blur(0px)' }}
					transition={{ duration: 0.3, delay: 0.6 }}
				>
					comienza la evolución
				</motion.span>{' '}
				<motion.span
					initial={{ opacity: 0, filter: 'blur(8px)' }}
					animate={{ opacity: 0.75, filter: 'blur(0px)' }}
					transition={{ duration: 0.3, delay: 0.9 }}
				>
					textil.
				</motion.span>
			</h2>
		</div>
	)
}

export default memo(Text)
