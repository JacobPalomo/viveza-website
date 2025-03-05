'use client'

import clsx from 'clsx'
import React, { useState, useRef, useEffect, useCallback, memo } from 'react'
import {
	RiFullscreenFill,
	RiPauseMiniFill,
	RiPlayFill,
	RiVolumeMuteFill,
	RiVolumeUpFill,
	RiRestartLine,
} from 'react-icons/ri'

interface VideoPlayerProps {
	source: string
}

type OverlayAction =
	| { type: 'play' }
	| { type: 'pause' }
	| { type: 'volume'; value: number }
	| { type: 'seek'; value: number }

const VideoPlayer: React.FC<VideoPlayerProps> = ({ source }) => {
	// Referencias a elementos
	const videoContainerRef = useRef<HTMLDivElement>(null)
	const mainVideoRef = useRef<HTMLVideoElement>(null)
	const offscreenVideoRef = useRef<HTMLVideoElement>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const progressBarRef = useRef<HTMLDivElement>(null)
	const volumeSliderRef = useRef<HTMLDivElement>(null)

	// Estados para manejo del video y miniaturas
	const [duration, setDuration] = useState<number>(0)
	const [currentTime, setCurrentTime] = useState<number>(0)
	const [previewSrc, setPreviewSrc] = useState<string>('')
	const [hoverX, setHoverX] = useState<number>(0)
	const [isDragging, setIsDragging] = useState<boolean>(false)
	const [dragTime, setDragTime] = useState<number | null>(null)
	const [isHoveringProgress, setIsHoveringProgress] = useState<boolean>(false)

	// Estados para controles del video
	const [isPlaying, setIsPlaying] = useState<boolean>(false)
	const [isEnded, setIsEnded] = useState<boolean>(false)
	const [volume, setVolume] = useState<number>(100)
	const [isMuted, setIsMuted] = useState<boolean>(false)

	// Estados para mostrar u ocultar controles y slider de volumen
	const [controlsVisible, setControlsVisible] = useState<boolean>(true)
	const [volumeSliderVisible, setVolumeSliderVisible] = useState<boolean>(false)

	// Estado para saber si se está arrastrando el slider de volumen
	const [isAdjustingVolume, setIsAdjustingVolume] = useState<boolean>(false)

	// Estado para el overlay de animación (con key única)
	const [overlay, setOverlay] = useState<
		(OverlayAction & { key: number }) | null
	>(null)
	const overlayTimeoutRef = useRef<NodeJS.Timeout | null>(null)

	// Estados para el seek acumulado
	const [initialSeekTime, setInitialSeekTime] = useState<number | null>(null)
	const [seekOffset, setSeekOffset] = useState<number>(0)
	const seekTimeoutRef = useRef<NodeJS.Timeout | null>(null)

	// Timer para ocultar los controles automáticamente
	const hideControlsTimer = useRef<NodeJS.Timeout | null>(null)

	// Reinicia el timer de ocultar controles
	const resetControlsTimer = useCallback(() => {
		if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current)
		setControlsVisible(true)
		hideControlsTimer.current = setTimeout(() => {
			setControlsVisible(false)
		}, 3000)
	}, [])

	// Función para disparar el overlay y reiniciar su animación
	const triggerOverlay = (action: OverlayAction) => {
		setOverlay(null)
		setTimeout(() => {
			setOverlay({ ...action, key: Date.now() })
			if (overlayTimeoutRef.current) clearTimeout(overlayTimeoutRef.current)
			overlayTimeoutRef.current = setTimeout(() => setOverlay(null), 800)
		}, 0)
	}

	// Función para reiniciar la secuencia de seek
	const resetSeekTimeout = () => {
		if (seekTimeoutRef.current) clearTimeout(seekTimeoutRef.current)
		seekTimeoutRef.current = setTimeout(() => {
			setInitialSeekTime(null)
			setSeekOffset(0)
			setOverlay(null)
		}, 800)
	}

	// Eventos para que los controles no se oculten cuando el mouse esté encima
	const handleControlsMouseEnter = () => {
		if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current)
	}
	const handleControlsMouseLeave = () => {
		resetControlsTimer()
	}

	// Muestra controles y reinicia el timer al mover el mouse sobre el contenedor principal
	const handleContainerMouseMove = () => {
		resetControlsTimer()
	}

	useEffect(() => {
		resetControlsTimer()
		return () => {
			if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current)
		}
	}, [resetControlsTimer])

	// Actualiza la duración y el tiempo actual
	const handleLoadedMetadata = () => {
		if (mainVideoRef.current) {
			setDuration(mainVideoRef.current.duration)
		}
	}

	const handleTimeUpdate = () => {
		if (mainVideoRef.current) {
			setCurrentTime(mainVideoRef.current.currentTime)
		}
	}

	// Detecta el fin del video
	const handleVideoEnded = () => {
		setIsEnded(true)
		setIsPlaying(false)
		triggerOverlay({ type: 'pause' })
	}

	// Permite pausar o reproducir al hacer clic sobre el video
	const handleVideoClick = () => {
		// Si el video terminó, reiniciamos
		if (isEnded && mainVideoRef.current) {
			mainVideoRef.current.currentTime = 0
			setIsEnded(false)
			mainVideoRef.current.play()
			setIsPlaying(true)
			triggerOverlay({ type: 'play' })
		} else {
			togglePlayPause()
		}
	}

	// Función para formatear el tiempo (mm:ss)
	const formatTime = (time: number): string => {
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)
		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
	}

	// Genera la miniatura usando el video off-screen y el canvas
	const generateThumbnail = (time: number) => {
		if (offscreenVideoRef.current && canvasRef.current) {
			offscreenVideoRef.current.currentTime = time
		}
	}

	const handleOffscreenSeeked = () => {
		if (offscreenVideoRef.current && canvasRef.current) {
			const canvas = canvasRef.current
			const ctx = canvas.getContext('2d')
			if (ctx) {
				canvas.width = offscreenVideoRef.current.videoWidth
				canvas.height = offscreenVideoRef.current.videoHeight
				ctx.drawImage(
					offscreenVideoRef.current,
					0,
					0,
					canvas.width,
					canvas.height,
				)
				const dataURL = canvas.toDataURL()
				setPreviewSrc(dataURL)
			}
		}
	}

	// Actualiza la miniatura y posición al mover el mouse sobre la barra (hover o drag)
	const handleProgressHover = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		if (!progressBarRef.current) return
		const rect = progressBarRef.current.getBoundingClientRect()
		const x = e.clientX - rect.left
		setHoverX(x)
		const percentage = x / rect.width
		const time = duration * percentage
		setDragTime(time)
		generateThumbnail(time)
	}

	const handleProgressMouseDown = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		setIsDragging(true)
		handleProgressHover(e)
	}

	const handleProgressMouseUp = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		if (!progressBarRef.current) return
		const rect = progressBarRef.current.getBoundingClientRect()
		const x = e.clientX - rect.left
		const percentage = x / rect.width
		const time = duration * percentage
		if (mainVideoRef.current) {
			mainVideoRef.current.currentTime = time
		}
		setIsDragging(false)
		if (!isHoveringProgress) {
			setDragTime(null)
			setPreviewSrc('')
		}
	}

	useEffect(() => {
		const handleWindowMouseUp = (e: MouseEvent) => {
			if (isDragging && progressBarRef.current) {
				const rect = progressBarRef.current.getBoundingClientRect()
				const x = e.clientX - rect.left
				const percentage = x / rect.width
				const time = duration * percentage
				if (mainVideoRef.current) {
					mainVideoRef.current.currentTime = time
				}
				setIsDragging(false)
				if (!isHoveringProgress) {
					setDragTime(null)
					setPreviewSrc('')
				}
			}
		}
		window.addEventListener('mouseup', handleWindowMouseUp)
		return () => {
			window.removeEventListener('mouseup', handleWindowMouseUp)
		}
	}, [isDragging, duration, isHoveringProgress])

	const calcPreviewLeft = () => {
		if (!progressBarRef.current) return '0px'
		return `calc(${hoverX}px - 4rem)`
	}

	// Define el ancho del indicador de progreso
	const getProgressWidth = () => {
		if (isDragging && dragTime !== null) {
			return `${(dragTime / duration) * 100}%`
		} else if (mainVideoRef.current) {
			return `${(mainVideoRef.current.currentTime / duration) * 100}%`
		}
		return '0%'
	}

	// Función para play/pause y mostrar overlay; si el video terminó se reinicia.
	const togglePlayPause = useCallback(() => {
		if (!mainVideoRef.current) return
		if (isEnded) {
			mainVideoRef.current.currentTime = 0
			setIsEnded(false)
			mainVideoRef.current.play()
			setIsPlaying(true)
			triggerOverlay({ type: 'play' })
		} else if (isPlaying) {
			mainVideoRef.current.pause()
			setIsPlaying(false)
			triggerOverlay({ type: 'pause' })
		} else {
			mainVideoRef.current.play()
			setIsPlaying(true)
			triggerOverlay({ type: 'play' })
		}
		resetControlsTimer()
	}, [isPlaying, isEnded, resetControlsTimer])

	// --- Control de Volumen Personalizado ---
	const updateVolume = (e: React.MouseEvent<HTMLDivElement>) => {
		if (volumeSliderRef.current) {
			const rect = volumeSliderRef.current.getBoundingClientRect()
			const relativeY = e.clientY - rect.top
			let newVolume = 100 - (relativeY / rect.height) * 100
			newVolume = Math.max(0, Math.min(newVolume, 100))
			setVolume(newVolume)
			if (mainVideoRef.current) {
				mainVideoRef.current.volume = newVolume / 100
			}
			// No se modifica isMuted automáticamente al arrastrar el slider.
			triggerOverlay({ type: 'volume', value: Math.round(newVolume) })
		}
	}

	const handleVolumeSliderMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		setIsAdjustingVolume(true)
		updateVolume(e)
		e.stopPropagation()
	}

	const handleVolumeSliderMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (isAdjustingVolume) {
			updateVolume(e)
		}
		e.stopPropagation()
	}

	const handleVolumeSliderMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
		if (isAdjustingVolume) {
			updateVolume(e)
			setIsAdjustingVolume(false)
		}
		e.stopPropagation()
	}

	// --- Fin Control de Volumen Personalizado ---
	const toggleMute = useCallback(() => {
		if (!mainVideoRef.current) return
		if (isMuted) {
			mainVideoRef.current.muted = false
			setIsMuted(false)
			if (volume === 0) {
				setVolume(50)
				mainVideoRef.current.volume = 0.5
			}
			triggerOverlay({ type: 'volume', value: 50 })
		} else {
			mainVideoRef.current.muted = true
			setIsMuted(true)
			setVolume(0)
			triggerOverlay({ type: 'volume', value: 0 })
		}
		resetControlsTimer()
	}, [isMuted, volume, resetControlsTimer])

	const toggleFullScreen = useCallback(() => {
		if (!videoContainerRef.current) return
		if (!document.fullscreenElement) {
			videoContainerRef.current.requestFullscreen()
		} else {
			document.exitFullscreen()
		}
		resetControlsTimer()
	}, [resetControlsTimer])

	// --- Atajos de teclado ---
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			const activeTag = document.activeElement?.tagName
			if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') return

			switch (e.key) {
				case ' ':
					e.preventDefault()
					togglePlayPause()
					break
				case 'ArrowUp':
					e.preventDefault()
					setVolume((prev) => {
						const newVol = Math.min(prev + 10, 100)
						if (mainVideoRef.current) {
							mainVideoRef.current.volume = newVol / 100
						}
						if (newVol > 0) setIsMuted(false)
						triggerOverlay({ type: 'volume', value: Math.round(newVol) })
						return newVol
					})
					break
				case 'ArrowDown':
					e.preventDefault()
					setVolume((prev) => {
						const newVol = Math.max(prev - 10, 0)
						if (mainVideoRef.current) {
							mainVideoRef.current.volume = newVol / 100
						}
						if (newVol === 0) setIsMuted(true)
						triggerOverlay({ type: 'volume', value: Math.round(newVol) })
						return newVol
					})
					break
				case 'ArrowLeft':
					e.preventDefault()
					if (mainVideoRef.current) {
						if (initialSeekTime === null) {
							setInitialSeekTime(mainVideoRef.current.currentTime)
						}
						const base = initialSeekTime ?? mainVideoRef.current.currentTime
						const newOffset = seekOffset - 10
						let newTime = base + newOffset
						if (newTime < 0) {
							newTime = 0
						}
						mainVideoRef.current.currentTime = newTime
						setCurrentTime(newTime)
						setSeekOffset(newOffset)
						triggerOverlay({ type: 'seek', value: newOffset })
						if (seekTimeoutRef.current) clearTimeout(seekTimeoutRef.current)
						seekTimeoutRef.current = setTimeout(() => {
							setInitialSeekTime(null)
							setSeekOffset(0)
							setOverlay(null)
						}, 800)
					}
					break
				case 'ArrowRight':
					e.preventDefault()
					if (mainVideoRef.current) {
						if (initialSeekTime === null) {
							setInitialSeekTime(mainVideoRef.current.currentTime)
						}
						const base = initialSeekTime ?? mainVideoRef.current.currentTime
						const newOffset = seekOffset + 10
						let newTime = base + newOffset
						if (newTime > duration) {
							newTime = duration
						}
						mainVideoRef.current.currentTime = newTime
						setCurrentTime(newTime)
						setSeekOffset(newOffset)
						triggerOverlay({ type: 'seek', value: newOffset })
						if (seekTimeoutRef.current) clearTimeout(seekTimeoutRef.current)
						seekTimeoutRef.current = setTimeout(() => {
							setInitialSeekTime(null)
							setSeekOffset(0)
							setOverlay(null)
						}, 800)
					}
					break
				case 'm':
				case 'M':
					e.preventDefault()
					toggleMute()
					break
				default:
					break
			}
			resetControlsTimer()
		}
		window.addEventListener('keydown', handleKeyDown)
		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [
		duration,
		togglePlayPause,
		toggleMute,
		resetControlsTimer,
		initialSeekTime,
		seekOffset,
	])

	return (
		<div
			ref={videoContainerRef}
			onMouseMove={handleContainerMouseMove}
			className={`relative mx-auto w-full bg-black select-none ${
				controlsVisible ? '' : 'cursor-none'
			}`}
		>
			{/* Video principal con onClick para pausar o reproducir y onEnded para detectar fin */}
			<video
				ref={mainVideoRef}
				src={source}
				onClick={handleVideoClick}
				onLoadedMetadata={handleLoadedMetadata}
				onTimeUpdate={handleTimeUpdate}
				onEnded={handleVideoEnded}
				onContextMenu={(e) => e.preventDefault()}
				preload='auto'
				className='!pointer-events-auto h-full w-full object-cover'
			/>

			{/* Elementos ocultos para miniaturas */}
			<video
				ref={offscreenVideoRef}
				src={source}
				onLoadedMetadata={handleLoadedMetadata}
				onSeeked={handleOffscreenSeeked}
				preload='metadata'
				className='!hidden'
			/>
			<canvas
				ref={canvasRef}
				className='!hidden'
			/>

			{/* Overlay de animación para atajos */}
			{overlay && (
				<div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
					{overlay.type === 'play' && (
						<div className='animate-pulse-scale text-6xl text-white'>
							<RiPlayFill size={80} />
						</div>
					)}
					{overlay.type === 'pause' && (
						<div className='animate-pulse-scale text-6xl text-white'>
							<RiPauseMiniFill size={80} />
						</div>
					)}
					{overlay.type === 'volume' && (
						<div className='animate-pulse-scale text-4xl text-white'>
							{overlay.value}%
						</div>
					)}
					{overlay.type === 'seek' && (
						<div className='animate-pulse-scale text-4xl text-white'>
							{overlay.value >= 0 ? `+${overlay.value}s` : `${overlay.value}s`}
						</div>
					)}
				</div>
			)}

			{/* Controles superpuestos con transición de opacidad */}
			<div
				onMouseEnter={handleControlsMouseEnter}
				onMouseLeave={handleControlsMouseLeave}
				className={clsx([
					'pointer-events-none absolute inset-0 flex w-full items-end justify-center transition-opacity duration-500',
					{ 'opacity-0': !controlsVisible },
				])}
			>
				{/* Degradado para mejorar la visibilidad de los controles */}
				<div
					className='absolute top-0 left-0 z-[1] h-full w-full'
					style={{
						backgroundImage:
							'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)',
					}}
				/>

				{/* Contenedor interactivo de controles (se le activa pointer-events) */}
				<div className='pointer-events-auto z-[2] !mb-8 flex w-full items-end justify-between gap-2 px-10'>
					{/* Controles: Play/Pause o Reiniciar si terminó */}
					<button
						onClick={togglePlayPause}
						className='z-[2] text-white'
					>
						{isEnded ? (
							<RiRestartLine size={24} />
						) : isPlaying ? (
							<RiPauseMiniFill size={32} />
						) : (
							<RiPlayFill size={32} />
						)}
					</button>

					<div className='relative z-[2] flex h-max w-full translate-y-4 flex-col justify-end gap-2 px-5'>
						{/* Barra de progreso personalizada */}
						<div
							ref={progressBarRef}
							className='relative z-[2] h-1.5 w-full cursor-pointer rounded bg-gray-700/20'
							onMouseDown={handleProgressMouseDown}
							onMouseMove={handleProgressHover}
							onMouseUp={handleProgressMouseUp}
							onMouseEnter={() => setIsHoveringProgress(true)}
							onMouseLeave={() => {
								setIsHoveringProgress(false)
								setPreviewSrc('')
								setDragTime(null)
							}}
						>
							<div
								className='h-1.5 rounded bg-white'
								style={{ width: getProgressWidth() }}
							></div>

							{(isHoveringProgress || isDragging) && previewSrc && (
								<>
									{/* Miniatura de vista previa */}
									<div
										className='absolute bottom-10 w-32'
										style={{ left: calcPreviewLeft() }}
									>
										<img
											src={previewSrc}
											alt='Vista previa'
											className='w-full rounded border'
										/>
									</div>
									{/* Tiempo de avance, posicionado arriba de la barra de progreso */}
									<div
										className='absolute -top-6 flex w-32 justify-center'
										style={{ left: calcPreviewLeft() }}
									>
										<span className='rounded px-1 text-xs text-white'>
											{dragTime !== null ? formatTime(dragTime) : formatTime(0)}
										</span>
									</div>
								</>
							)}
						</div>

						{/* Tiempo actual / Duración */}
						<div className='z-[2] flex w-full items-center justify-between'>
							<div className='text-xs text-white'>
								{formatTime(currentTime)}
							</div>
							<div className='text-xs text-white'>{formatTime(duration)}</div>
						</div>
					</div>

					{/* Controles: Mute/Unmute (con slider personalizado) y Full Screen */}
					<div className='pointer-events-auto z-[2] flex items-center justify-center gap-5'>
						<div className='flex items-end justify-center gap-5'>
							{/* Contenedor para Mute/Unmute y slider de volumen personalizado */}
							<div
								className='relative flex h-max w-max flex-col items-center gap-2'
								onMouseEnter={() => setVolumeSliderVisible(true)}
							>
								{volumeSliderVisible && (
									<div
										className='hidden h-max w-max'
										ref={volumeSliderRef}
										onMouseDown={handleVolumeSliderMouseDown}
										onMouseMove={handleVolumeSliderMouseMove}
										onMouseUp={handleVolumeSliderMouseUp}
										onMouseLeave={handleVolumeSliderMouseUp}
									>
										{/* Contenedor del slider (fondo y barra de volumen) */}
										<div className='h-18 w-1.5 overflow-hidden rounded bg-gray-700/20'>
											<div
												className='h-full w-full origin-bottom bg-white'
												style={{ transform: `scaleY(${volume / 100})` }}
											/>
										</div>
									</div>
								)}

								<button
									onClick={toggleMute}
									className='relative z-20 flex items-center justify-center text-white'
								>
									{isMuted ? (
										<RiVolumeMuteFill size={24} />
									) : (
										<RiVolumeUpFill size={24} />
									)}
								</button>
							</div>

							<button
								onClick={toggleFullScreen}
								className='z-[2] text-white'
							>
								<RiFullscreenFill size={24} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default memo(VideoPlayer)
