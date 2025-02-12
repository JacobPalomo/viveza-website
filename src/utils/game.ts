import { Scene, Game, Types, AUTO, Math as PhaserMath, Physics } from 'phaser'

const domain = process.env.NEXT_PUBLIC_DOMAIN

class LaMaquinaDescontrolada extends Scene {
	private machine!: Phaser.GameObjects.Image
	private clothes!: Physics.Arcade.Group
	private missedCount: number = 0
	private missedText!: Phaser.GameObjects.Text
	private score: number = 0
	private scoreText!: Phaser.GameObjects.Text
	private pauseButton!: Phaser.GameObjects.Image
	private dropSpeed: number = 200
	private dropDelay: number = 1000
	private dropEvent!: Phaser.Time.TimerEvent

	constructor() {
		super({ key: 'LaMaquinaDescontrolada' })
	}

	preload() {
		// Cargar imágenes en pixel art
		this.load.image(
			'background',
			`https://viveza-website.vercel.app/game/pixel_factory.png`,
		)
		this.load.image(
			'machine',
			`https://viveza-website.vercel.app/game/pixel_sewing_machine.png`,
		)
		this.load.image(
			'defective_tshirt',
			`https://viveza-website.vercel.app/game/pixel_defective_tshirt.png`,
		)
		this.load.image(
			'tshirt',
			`https://viveza-website.vercel.app/game/pixel_tshirt.png`,
		)
		this.load.image(
			'defective_leggings',
			`https://viveza-website.vercel.app/game/pixel_defective_leggings.png`,
		)
		this.load.image(
			'leggings',
			`https://viveza-website.vercel.app/game/pixel_leggings.png`,
		)
		this.load.image(
			'defective_underwear',
			`https://viveza-website.vercel.app/game/pixel_defective_underwear.png`,
		)
		this.load.image(
			'underwear',
			`https://viveza-website.vercel.app/game/pixel_underwear.png`,
		)
		this.load.image(
			'pause_button',
			`https://viveza-website.vercel.app/game/pause_button.png`,
		)
		this.load.image(
			'pause_button_pressed',
			`https://viveza-website.vercel.app/game/pause_button_pressed.png`,
		)
	}

	create() {
		// Fondo
		this.add.image(400, 300, 'background')

		// Máquina de coser
		this.machine = this.add.image(400, 100, 'machine')

		// Grupo de prendas defectuosas
		this.clothes = this.physics.add.group()

		// Reiniciar ganancias, contador de prendas caídas, velocidad de caída y retraso de caída
		this.score = 0
		this.missedCount = 0
		this.dropSpeed = 200
		this.dropDelay = 1000

		// Evento para generar prendas
		this.dropEvent = this.time.addEvent({
			delay: this.dropDelay,
			callback: this.dropCloth,
			callbackScope: this,
			loop: true,
		})

		// Evento para aumentar la velocidad de caída cada 30 segundos
		this.time.addEvent({
			delay: 30000,
			callback: this.increaseDropSpeed,
			callbackScope: this,
			loop: true,
		})

		// Evento para reducir el retraso de caída cada 15 segundos
		this.time.addEvent({
			delay: 15000,
			callback: this.decreaseDropDelay,
			callbackScope: this,
			loop: true,
		})

		// Contador de prendas caídas
		this.missedText = this.add.text(20, 20, 'Errores en la producción: 0', {
			fontSize: '24px',
			color: '#fff',
		})

		// Puntaje del jugador
		this.scoreText = this.add.text(20, 50, 'Ganancias: $0', {
			fontSize: '24px',
			color: '#fff',
		})

		// Botón de pausa
		this.pauseButton = this.add.image(750, 50, 'pause_button').setInteractive()

		this.pauseButton.on('pointerdown', () => {
			this.pauseButton.setTexture('pause_button_pressed')
		})

		this.pauseButton.on('pointerup', () => {
			this.scene.pause()
			this.scene.launch('PauseMenu', { score: this.score })
			this.pauseButton.setTexture('pause_button')
		})

		// Mostrar tutorial si es la primera vez
		if (!localStorage.getItem('tutorialShown')) {
			this.scene.pause()
			this.scene.launch('Tutorial')
		}
	}

	dropCloth() {
		const x = PhaserMath.Between(200, 600)
		const clothTypes = [
			'defective_tshirt',
			'defective_leggings',
			'defective_underwear',
			'tshirt',
			'leggings',
			'underwear',
		]
		const randomCloth = clothTypes[PhaserMath.Between(0, clothTypes.length - 1)]

		const cloth = this.clothes.create(x, 150, randomCloth)
		cloth.setVelocityY(this.dropSpeed)
		cloth.setInteractive()

		cloth.on('pointerdown', () => {
			cloth.destroy() // Eliminar prenda al hacer clic
			if (randomCloth.startsWith('defective')) {
				this.score += 10 // Incrementar puntaje
			} else {
				this.score -= 15 // Restar puntaje
			}
			this.scoreText.setText('Ganancias: $' + this.score)
		})
	}

	increaseDropSpeed() {
		this.dropSpeed += 50
	}

	decreaseDropDelay() {
		this.dropDelay = Math.max(200, this.dropDelay - 100)
		this.dropEvent.remove(false)
		this.dropEvent = this.time.addEvent({
			delay: this.dropDelay,
			callback: this.dropCloth,
			callbackScope: this,
			loop: true,
		})
	}

	update() {
		this.clothes.children.iterate((cloth) => {
			if (cloth && (cloth as Phaser.Physics.Arcade.Image).y > 550) {
				cloth.destroy()
				if (
					(cloth as Phaser.Physics.Arcade.Image).texture.key.startsWith(
						'defective',
					)
				) {
					this.missedCount++
					this.missedText.setText(
						'Errores en la producción: ' + this.missedCount,
					)
					this.score -= 10 // Restar puntaje por prenda mala caída
				} else {
					this.score += 5 // Sumar puntaje por prenda buena caída
				}
				this.scoreText.setText('Ganancias: $' + this.score)

				if (this.missedCount >= 3) {
					this.checkHighScore()
					this.scene.pause()
					this.scene.launch('GameOver', { score: this.score })
				}
				return false
			}
			return true
		})
	}

	checkHighScore() {
		const highScore = localStorage.getItem('highScore')
		if (!highScore || this.score > parseInt(highScore)) {
			localStorage.setItem('highScore', this.score.toString())
		}
	}
}

class MainMenu extends Scene {
	private highScoreText!: Phaser.GameObjects.Text

	constructor() {
		super({ key: 'MainMenu' })
	}

	preload() {
		this.load.image(
			'background',
			`https://viveza-website.vercel.app/game/pixel_factory.png`,
		)
		this.load.image(
			'play_button',
			`https://viveza-website.vercel.app/game/play_button.png`,
		)
		this.load.image(
			'play_button_pressed',
			`https://viveza-website.vercel.app/game/play_button_pressed.png`,
		)
		this.load.image(
			'game_title',
			`https://viveza-website.vercel.app/game/title_game.png`,
		)
	}

	create() {
		this.add.image(400, 300, 'background')
		this.add.image(400, 150, 'game_title').setDisplaySize(600, 200) // Ajustar tamaño del título del juego
		const playButton = this.add.image(400, 300, 'play_button').setInteractive()

		playButton.on('pointerdown', () => {
			playButton.setTexture('play_button_pressed')
		})

		playButton.on('pointerup', () => {
			playButton.setTexture('play_button')
			setTimeout(() => this.scene.start('LaMaquinaDescontrolada'), 1000)
		})

		const highScore = localStorage.getItem('highScore') || '0'
		this.highScoreText = this.add
			.text(400, 400, 'Mayores Ganancias: $' + highScore, {
				fontSize: '24px',
				color: '#fff',
			})
			.setOrigin(0.5)
	}
}

class PauseMenu extends Scene {
	private continueButton!: Phaser.GameObjects.Text
	private exitButton!: Phaser.GameObjects.Text
	private highScoreText!: Phaser.GameObjects.Text
	private pauseTitle!: Phaser.GameObjects.Text

	constructor() {
		super({ key: 'PauseMenu' })
	}

	create(data: { score: number }) {
		this.cameras.main.setBackgroundColor('rgba(0, 0, 0, 0.5)')

		this.pauseTitle = this.add
			.text(400, 200, 'Juego en Pausa', {
				fontSize: '40px',
				color: '#fff',
			})
			.setOrigin(0.5)

		this.continueButton = this.add
			.text(400, 300, 'Continuar', {
				fontSize: '32px',
				color: '#fff',
			})
			.setOrigin(0.5)
			.setInteractive()

		this.continueButton.on('pointerdown', () => {
			this.scene.stop()
			this.scene.resume('LaMaquinaDescontrolada')
		})

		this.exitButton = this.add
			.text(400, 350, 'Salir', {
				fontSize: '32px',
				color: '#fff',
			})
			.setOrigin(0.5)
			.setInteractive()

		this.exitButton.on('pointerdown', () => {
			this.checkHighScore(data.score)
			this.scene.stop('LaMaquinaDescontrolada')
			this.scene.start('MainMenu')
		})

		const highScore = localStorage.getItem('highScore') || '0'
		this.highScoreText = this.add
			.text(780, 20, 'Mayores Ganancias: $' + highScore, {
				fontSize: '24px',
				color: '#fff',
			})
			.setOrigin(1, 0)
	}

	checkHighScore(score: number) {
		const highScore = localStorage.getItem('highScore')
		if (!highScore || score > parseInt(highScore)) {
			localStorage.setItem('highScore', score.toString())
		}
	}
}

class GameOver extends Scene {
	private retryButton!: Phaser.GameObjects.Text
	private exitButton!: Phaser.GameObjects.Text
	private messageText!: Phaser.GameObjects.Text
	private scoreText!: Phaser.GameObjects.Text

	constructor() {
		super({ key: 'GameOver' })
	}

	create(data: { score: number }) {
		this.cameras.main.setBackgroundColor('rgba(0, 0, 0, 0.5)')

		const highScore = localStorage.getItem('highScore') || '0'
		if (data.score > parseInt(highScore)) {
			this.messageText = this.add
				.text(400, 200, '¡Felicidades Aumentaste tus Ganancias!', {
					fontSize: '32px',
					color: '#fff',
				})
				.setOrigin(0.5)
			localStorage.setItem('highScore', data.score.toString())
		} else {
			this.messageText = this.add
				.text(400, 200, 'Has dejado perder la producción :(', {
					fontSize: '32px',
					color: '#fff',
				})
				.setOrigin(0.5)
		}

		this.scoreText = this.add
			.text(400, 250, 'Ganancias: $' + data.score, {
				fontSize: '24px',
				color: '#fff',
			})
			.setOrigin(0.5)

		this.retryButton = this.add
			.text(400, 350, 'Reintentar', {
				fontSize: '32px',
				color: '#fff',
			})
			.setOrigin(0.5)
			.setInteractive()

		this.retryButton.on('pointerdown', () => {
			this.scene.stop('GameOver')
			this.scene.stop('LaMaquinaDescontrolada')
			this.scene.start('LaMaquinaDescontrolada')
		})

		this.exitButton = this.add
			.text(400, 400, 'Salir', {
				fontSize: '32px',
				color: '#fff',
			})
			.setOrigin(0.5)
			.setInteractive()

		this.exitButton.on('pointerdown', () => {
			this.scene.stop('GameOver')
			this.scene.stop('LaMaquinaDescontrolada')
			this.scene.start('MainMenu')
		})
	}
}

class Tutorial extends Scene {
	private continueButton!: Phaser.GameObjects.Text

	constructor() {
		super({ key: 'Tutorial' })
	}

	create() {
		this.cameras.main.setBackgroundColor('rgba(0, 0, 0, 0.5)')

		this.add
			.text(400, 100, '¡Bienvenido supervisor!', {
				fontSize: '32px',
				color: '#fff',
				wordWrap: { width: 700, useAdvancedWrap: true },
			})
			.setOrigin(0.5)

		this.add
			.text(
				400,
				300,
				'Una de las maquinas se ha vuelto loca y derrepente saca prendas defectuosas. Tu trabajo es hacer clic en las prendas defectuosas para no dejarlas entrar al pedido. \n\n Deja que las prendas buenas caigan para que entren al pedido. \n\n Con tener 3 errores en la producción serás despedido.',
				{
					fontSize: '24px',
					color: '#fff',
					wordWrap: { width: 700, useAdvancedWrap: true },
				},
			)
			.setOrigin(0.5)

		this.continueButton = this.add
			.text(400, 500, 'Continuar', {
				fontSize: '32px',
				color: '#fff',
			})
			.setOrigin(0.5)
			.setInteractive()

		this.continueButton.on('pointerdown', () => {
			localStorage.setItem('tutorialShown', 'true')
			this.scene.stop()
			this.scene.resume('LaMaquinaDescontrolada')
		})
	}
}

const config: Types.Core.GameConfig = {
	type: AUTO,
	width: 800,
	height: 600,
	physics: { default: 'arcade' },
	scene: [MainMenu, LaMaquinaDescontrolada, PauseMenu, GameOver, Tutorial],
}

export function startGame(containerId: string) {
	new Game({ ...config, parent: containerId })
}
