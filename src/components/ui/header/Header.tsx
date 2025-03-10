'use client'

import HeaderBackdrop from './Backdrop'
import {
	Dispatch,
	RefObject,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from 'react'
import { useScrollDirection } from '@/utils/scroll-direction'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

export type MenuItem = { label: string; href: string }
type ScrollDirection = 'up' | 'down'
export type HeaderTheme = 'light' | 'dark'

// Lista de enlaces del menú
const menuItems = [
	{ label: 'Inicio', href: '/' },
	{ label: 'Nosotros', href: '/nosotros' },
	{ label: 'Tecnología', href: '#' },
	{ label: 'Marcas', href: '#' },
	{ label: 'Blog', href: '#' },
]

/**
 * Calcula el nuevo valor de clip-path basado en diversos factores (theme, dirección de scroll, etc.)
 */
function getNewClipValue(
	theme: HeaderTheme,
	scrollDirection: ScrollDirection,
	bestRatio: number,
	prevClipValue: string,
	setCurrentHeaderTheme: Dispatch<SetStateAction<'dark' | 'light'>>,
): string {
	// Función auxiliar para generar el string con base en un porcentaje
	const insetVertical = (value: number) => `inset(${value}% 0px 0px 0px)`
	const insetVerticalInverse = (value: number) => `inset(0px 0px ${value}% 0px)`

	if (theme === 'light') {
		// Sección con data-header-theme="light"
		setCurrentHeaderTheme('light')
		if (scrollDirection === 'down') {
			// Bajando
			if (prevClipValue === 'inset(0% 0px 0px 0px)') {
				return insetVerticalInverse((1 - bestRatio) * 100)
			} else {
				// En casi todos los demás casos
				return insetVertical((1 - bestRatio) * 100)
			}
		} else {
			// Subiendo
			if (
				prevClipValue === 'inset(0% 0px 0px 0px)' ||
				prevClipValue === 'inset(0px 0px 0% 0px)'
			) {
				return insetVertical((1 - bestRatio) * 100)
			} else {
				return insetVerticalInverse((1 - bestRatio) * 100)
			}
		}
	} else {
		// theme === "dark"
		setCurrentHeaderTheme('dark')
		if (scrollDirection === 'down') {
			// Bajando
			if (
				prevClipValue === 'inset(0% 0px 0px 0px)' ||
				prevClipValue === 'inset(0px 0px 0% 0px)'
			) {
				return insetVerticalInverse(bestRatio * 100)
			} else {
				return insetVertical(bestRatio * 100)
			}
		} else {
			// Subiendo
			if (
				prevClipValue === 'inset(0% 0px 0px 0px)' ||
				prevClipValue === 'inset(0px 0px 0% 0px)'
			) {
				return insetVertical(bestRatio * 100)
			} else {
				return insetVerticalInverse(bestRatio * 100)
			}
		}
	}
}

/**
 * Callback principal para el IntersectionObserver.
 * Determina cuál sección se está viendo más para decidir si la cabecera es "light" o "dark" y calcular el clipPath.
 */
function handleIntersection(
	entries: IntersectionObserverEntry[],
	headerRef: RefObject<HTMLElement>,
	clipValue: string,
	setClipValue: Dispatch<SetStateAction<string>>,
	prevClipValue: string,
	setPrevClipValue: Dispatch<SetStateAction<string>>,
	scrollDirection: ScrollDirection,
	setCurrentHeaderTheme: Dispatch<SetStateAction<'dark' | 'light'>>,
) {
	if (!headerRef.current) return

	// Guardamos el clipValue anterior si estamos en uno de los valores extremos
	if (
		clipValue === 'inset(100% 0px 0px 0px)' ||
		clipValue === 'inset(0% 0px 0px 0px)' ||
		clipValue === 'inset(0px 0px 100% 0px)' ||
		clipValue === 'inset(0px 0px 0% 0px)'
	) {
		setPrevClipValue(clipValue)
	}

	const headerRect = headerRef.current.getBoundingClientRect()
	let bestEntry: IntersectionObserverEntry | null = null
	let bestRatio = 0

	entries.forEach((entry) => {
		if (!entry.isIntersecting) return

		const sectionRect = entry.boundingClientRect
		// Calculamos la parte efectiva de intersección con el header
		const intersectionHeight =
			Math.min(headerRect.bottom, sectionRect.bottom) -
			Math.max(headerRect.top, sectionRect.top)
		const ratio = Math.max(
			0,
			Math.min(1, intersectionHeight / headerRect.height),
		)

		if (ratio > bestRatio) {
			bestRatio = ratio
			bestEntry = entry
		}
	})

	if (bestEntry) {
		const sectionEl = (bestEntry as Event).target as HTMLElement
		const themeAttr = sectionEl.getAttribute('data-header-theme') as HeaderTheme

		if (themeAttr) {
			const newClip = getNewClipValue(
				themeAttr,
				scrollDirection,
				bestRatio,
				prevClipValue,
				setCurrentHeaderTheme,
			)
			setClipValue(newClip)
		}
	}
}

const getActiveHeaderRef = (
	desktopHeaderRef: RefObject<HTMLElement | null>,
	mobileHeaderRef: RefObject<HTMLElement | null>,
) => {
	if (
		desktopHeaderRef?.current &&
		window.getComputedStyle(desktopHeaderRef.current).display !== 'none'
	) {
		return desktopHeaderRef
	}
	if (
		mobileHeaderRef?.current &&
		window.getComputedStyle(mobileHeaderRef.current).display !== 'none'
	) {
		return mobileHeaderRef
	}
	return null
}

export default function Header() {
	const scrollDirection = useScrollDirection() // "up" | "down"
	const desktopHeaderRef = useRef<HTMLElement>(null)
	const mobileHeaderRef = useRef<HTMLElement>(null)

	// Estado inicial y estado anterior de clipPath
	const [clipValue, setClipValue] = useState<string>('inset(100% 0px 0px 0px)')
	const [prevClipValue, setPrevClipValue] = useState<string>(clipValue)
	const [currentHeaderTheme, setCurrentHeaderTheme] = useState<
		'light' | 'dark'
	>('light')
	const [headerIsHovered, setHeaderIsHovered] = useState<boolean>(false)
	const [isOpen, setIsOpen] = useState<boolean>(false)

	useEffect(() => {
		const activeHeaderRef = getActiveHeaderRef(
			desktopHeaderRef,
			mobileHeaderRef,
		)
		if (!activeHeaderRef || !activeHeaderRef.current) return

		const headerEl = activeHeaderRef.current
		if (!headerEl) return

		const sections = document.querySelectorAll('*[data-header-theme]')
		// Definimos el threshold con 101 valores, 0.0 -> 1.0
		const thresholds = Array.from({ length: 101 }, (_, i) => i / 100)

		const observerOptions = {
			root: null,
			threshold: thresholds,
		}

		const observer = new IntersectionObserver((entries) => {
			handleIntersection(
				entries,
				activeHeaderRef as RefObject<HTMLElement>,
				clipValue,
				setClipValue,
				prevClipValue,
				setPrevClipValue,
				scrollDirection,
				setCurrentHeaderTheme,
			)
		}, observerOptions)

		sections.forEach((section) => observer.observe(section))
		return () => {
			observer.disconnect()
		}
	}, [clipValue, scrollDirection, prevClipValue])

	return (
		<>
			<DesktopHeader
				headerRef={desktopHeaderRef}
				isHovered={headerIsHovered}
				onHover={() => setHeaderIsHovered(true)}
				onBlur={() => setHeaderIsHovered(false)}
				theme={currentHeaderTheme}
				items={menuItems}
				clipValue={clipValue}
			/>

			<MobileHeader
				headerRef={mobileHeaderRef}
				isHovered={headerIsHovered}
				onHover={() => setHeaderIsHovered(true)}
				onBlur={() => setHeaderIsHovered(false)}
				theme={currentHeaderTheme}
				items={menuItems}
				clipValue={clipValue}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>

			<HeaderBackdrop />
		</>
	)
}
