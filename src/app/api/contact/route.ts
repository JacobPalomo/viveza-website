import { contactEmailTemplate } from '@/mail/contact.template'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
	try {
		const { name, lastname, email, message, hCaptchaToken } = await req.json()

		if (!hCaptchaToken) {
			return NextResponse.json(
				{ success: false, message: 'Captcha no verificado' },
				{ status: 400 },
			)
		}

		const secretKey = process.env.HCAPTCHA_SECRET_KEY
		const verifyUrl = 'https://api.hcaptcha.com/siteverify'

		const formData = new URLSearchParams()
		formData.append('secret', secretKey as string)
		formData.append('response', hCaptchaToken)

		const hCaptchaResponse = await fetch(verifyUrl, {
			method: 'POST',
			body: formData,
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		})

		const hCaptchaData = await hCaptchaResponse.json()

		if (!hCaptchaData.success) {
			return NextResponse.json(
				{ success: false, message: 'Captcha inválido' },
				{ status: 400 },
			)
		}

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
