'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'motion/react'
import Input from '@/components/ui/Input'
import Form from '@/components/ui/Form'
import InputGroup from '@/components/ui/InputGroup'
import Textarea from '@/components/ui/Textarea'
import FormButton from '@/components/ui/FormButton'

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
})

// TODO - Configurar formulario en la api de NextJS para enviar el correo con `nodemailer` con un correo configurado especificamente para enviar correos a los demas desde aquí.
export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	})

	const [success, setSuccess] = useState<boolean>(false)

	async function onSubmit(data: FormData) {
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			})

			const result = await response.json()

			if (!response.ok) {
				throw new Error(result.message || 'Error al enviar el mensaje')
			}

			// Mostrar la palomita y limpiar el formulario
			setSuccess(true)
			reset()

			// Después de 2 segundos, volvemos el botón a su estado original
			setTimeout(() => setSuccess(false), 2000)
		} catch (error) {
			console.error(error)
			alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.')
		}
	}

	return (
		<section className='z-10 flex flex-col items-center'>
			<h2 className='!mb-40 max-w-1/2 !text-6xl max-md:!text-5xl max-sm:max-w-full max-sm:px-8 max-sm:!text-5xl'>
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
			</h2>

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

				<FormButton
					isSubmitting={isSubmitting}
					success={success}
				>
					Enviar mensaje
				</FormButton>
			</Form>

			<p className='!mt-10 max-sm:px-9'>
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
