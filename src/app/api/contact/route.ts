import { contactEmailTemplate } from '@/mail/contact.template'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
	try {
		const { name, lastname, email, message } = await req.json()

		// Configurar transporte de Nodemailer
		const transporter = nodemailer.createTransport({
			service: 'Gmail', // Servicio SMTP
			auth: {
				user: process.env.SMTP_EMAIL,
				pass: process.env.SMTP_PASSWORD,
			},
		})

		// Configurar contenido del correo
		const mailOptions = {
			from: `"${name} ${lastname}" <${email}>`,
			to: process.env.CONTACT_EMAIL,
			subject: `Nuevo mensaje de ${name} ${lastname}`,
			text: message,
			html: contactEmailTemplate(name, lastname, email, message),
		}

		// Enviar correo
		await transporter.sendMail(mailOptions)

		return NextResponse.json(
			{ success: true, message: 'Correo enviado correctamente' },
			{ status: 200 },
		)
	} catch (error) {
		console.error('Error enviando el correo:', error)
		return NextResponse.json(
			{ success: false, message: 'Error enviando el correo' },
			{ status: 500 },
		)
	}
}
