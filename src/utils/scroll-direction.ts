import { useState, useEffect, useRef } from 'react'
import { useScroll } from 'motion/react'

export type ScrollDirection = 'up' | 'down'

export const useScrollDirection = (): ScrollDirection => {
	const { scrollY } = useScroll()
	const [scrollDirection, setScrollDirection] =
		useState<ScrollDirection>('down')
	const prevScrollY = useRef(0)

	useEffect(() => {
		// Suscribirse a los cambios de scroll
		const unsubscribe = scrollY.on('change', latest => {
			if (latest > prevScrollY.current) {
				setScrollDirection('down')
			} else if (latest < prevScrollY.current) {
				setScrollDirection('up')
			}
			prevScrollY.current = latest
		})

		return () => unsubscribe()
	}, [scrollY])

	return scrollDirection
}
