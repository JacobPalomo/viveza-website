'use client'

import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'motion/react'
import Input from '@/components/ui/Input'
import Form from '@/components/ui/Form'
import InputGroup from '@/components/ui/InputGroup'
import Textarea from '@/components/ui/Textarea'
import FormButton from '@/components/ui/FormButton'
import HCaptcha from '@hcaptcha/react-hcaptcha'

type FormData = z.infer<typeof schema>

// Esquema de validación con zod
const schema = z.object({
	name: z
		.string()
		.min(3, 'El nombre debe tener al menos 3 caracteres.')
		.max(60, 'El nombre no puede tener más de 60 caracteres.'),
	lastname: z
		.string()
		.min(3, 'El apellido debe tener al menos 3 caracteres.')
		.max(60, 'El nombre no puede tener más de 60 caracteres.'),
	email: z.string().email('Correo inválido'),
	message: z
		.string()
		.min(10, 'El mensaje debe tener al menos 10 caracteres.')
		.max(500, 'El mensaje no puede tener más de 500 caracteres.'),
	hCaptchaToken: z.string(),
})

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
		setValue,
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	})

	const [error, setError] = useState<string>('')
	const [success, setSuccess] = useState<boolean>(false)
	const [token, setToken] = useState<string>('')
	const captchaRef = useRef<HCaptcha>(null)

	useEffect(() => {
		if (token) {
			setValue('hCaptchaToken', token)
		}
	}, [token, setValue])

	async function onSubmit(data: FormData) {
		if (!token) {
			setError('Por favor, completa el captcha.')
			return
		}

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ ...data, hCaptchaToken: token }),
			})

			const result = await response.json()

			if (!response.ok) {
				throw new Error(result.message || 'Error al enviar el mensaje')
			}

			setSuccess(true)
			setToken('') // Resetear el token después de enviar
			captchaRef.current?.resetCaptcha() // Reiniciar el CAPTCHA

			setTimeout(() => {
				reset()
				setSuccess(false)
			}, 1500)
		} catch (error) {
			setError(
				(error as { success: boolean; message: string }).message ||
					'Hubo un error al enviar el mensaje. Inténtalo de nuevo.',
			)
		}
	}

	return (
		<section className='z-10 flex flex-col items-center'>
			<div className='z-10 flex w-1/2 -translate-y-[40%] flex-col gap-4 max-md:w-3/4 max-sm:w-full max-sm:px-10'>
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					className='flex flex-col items-start justify-center gap-1'
				>
					<p className='!text-sm !tracking-widest text-secondary'>SEAMLESS</p>
					<div className='h-[1.5px] w-12 bg-secondary'></div>
				</motion.div>

				<h2 className='!text-6xl !font-normal text-secondary max-md:!text-5xl max-sm:!text-4xl'>
					<motion.span
						initial={{ opacity: 0, filter: 'blur(8px)' }}
						animate={{ opacity: 0.75, filter: 'blur(0px)' }}
						transition={{ duration: 0.3, delay: 0.5 }}
					>
						Déjanos un mensaje
					</motion.span>{' '}
					<motion.span
						initial={{ opacity: 0, filter: 'blur(8px)' }}
						animate={{ opacity: 1, filter: 'blur(0px)' }}
						transition={{ duration: 0.3, delay: 1 }}
						className='text-primary'
					>
						nosotros nos pondremos en contacto
					</motion.span>{' '}
					<motion.span
						initial={{ opacity: 0, filter: 'blur(8px)' }}
						animate={{ opacity: 0.75, filter: 'blur(0px)' }}
						transition={{ duration: 0.3, delay: 1.5 }}
					>
						con usted.
					</motion.span>{' '}
					<motion.span
						initial={{ opacity: 0, filter: 'blur(8px)' }}
						animate={{ opacity: 1, filter: 'blur(0px)' }}
						transition={{ duration: 0.3, delay: 1.5 }}
					>
						😉
					</motion.span>
				</h2>
			</div>

			{/* <h2 className='!mb-40 max-w-1/2 !text-6xl max-md:!text-5xl max-sm:max-w-full max-sm:px-8 max-sm:!text-5xl'>
				<motion.span
					initial={{ opacity: 0, filter: 'blur(10px)' }}
					animate={{ opacity: 1, filter: 'blur(0px)' }}
					transition={{ duration: 0.3 }}
				>
					Déjanos un mensaje,
				</motion.span>{' '}
				<motion.span
					initial={{ opacity: 0, filter: 'blur(10px)' }}
					animate={{ opacity: 1, filter: 'blur(0px)' }}
					transition={{ duration: 0.3, delay: 0.5 }}
					className='text-primary'
				>
					nosotros nos pondremos en contacto contigo
				</motion.span>
				<motion.span
					initial={{ opacity: 0, filter: 'blur(10px)' }}
					animate={{ opacity: 1, filter: 'blur(0px)' }}
					transition={{ duration: 0.3, delay: 0.5 }}
				>
					. 😁
				</motion.span>
			</h2> */}

			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputGroup>
					<Input
						id='iName'
						register={register('name')}
						label='Nombre'
						type='text'
						placeholder='Jhon'
						maxLength={60}
						errorMessage={errors.name?.message}
					/>

					<Input
						id='iLastname'
						register={register('lastname')}
						label='Apellido'
						type='text'
						placeholder='Doe'
						maxLength={60}
						errorMessage={errors.lastname?.message}
					/>
				</InputGroup>

				<Input
					id='iEmail'
					label='Correo'
					register={register('email')}
					type='email'
					placeholder='jhon.doe123@email.com'
					errorMessage={errors.email?.message}
				/>

				<Textarea
					id='iMessage'
					register={register('message')}
					label='Mensaje'
					rows={10}
					cols={30}
					placeholder='Escribe tu mensaje aquí...'
					errorMessage={errors.message?.message}
					maxLength={500}
				/>

				<HCaptcha
					sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
					languageOverride='es'
					onExpire={() => setToken('')}
					onVerify={setToken}
					size='normal'
					ref={captchaRef}
					custom={true}
				/>

				<motion.p
					initial={{ opacity: 0, height: 0 }}
					animate={{
						opacity: error ? 1 : 0,
						height: error ? 'auto' : 0,
					}}
					transition={{ duration: 0.2 }}
					className='max-w-full rounded-lg px-2 text-left !text-base text-red-600'
				>
					{error}
				</motion.p>

				<FormButton
					isSubmitting={isSubmitting}
					success={success}
					disabled={!token}
				>
					Enviar mensaje
				</FormButton>
			</Form>

			<p className='!mt-10 w-1/2 max-md:w-3/4 max-sm:w-full max-sm:px-9'>
				Alternativamente puedes dejarnos un mensaje en{' '}
				<a
					href='mailto:ventas@vivezatextil.com'
					className='text-primary underline underline-offset-2'
				>
					ventas@vivezatextil.com
				</a>
			</p>
		</section>
	)
}
