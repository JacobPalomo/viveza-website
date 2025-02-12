'use client'

import { useEffect, useRef } from 'react'
import { startGame } from '@/utils/game'

const Game = () => {
	const gameContainerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (gameContainerRef.current) {
			startGame(gameContainerRef.current.id)
		}
	}, [])

	return (
		<div
			id='game-container'
			ref={gameContainerRef}
			className='z-10 h-[600px]'
		></div>
	)
}

export default Game
