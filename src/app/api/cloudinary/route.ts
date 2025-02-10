import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	try {
		// Obtener la URL de la imagen desde la query (?url=...)
		const { searchParams } = new URL(req.url)
		const url = searchParams.get('url')
		const type = searchParams.get('type')

		if (!url) {
			return NextResponse.json(
				{ error: 'Falta la URL de la imagen' },
				{ status: 400 },
			)
		}

		// Construir la URL completa de Cloudinary
		const cloudinaryURL = `https://res.cloudinary.com/dtvpssenl/${type || 'image'}/upload/${url}`

		// Hacer la solicitud a Cloudinary sin cookies
		const response = await fetch(cloudinaryURL, {
			headers: {
				'Cache-Control': 'public, max-age=31536000, immutable', // Cache a largo plazo
			},
		})

		// Verificar si la imagen existe
		if (!response.ok) {
			return NextResponse.json(
				{ error: 'No se pudo obtener la imagen' },
				{ status: response.status },
			)
		}

		// Crear la respuesta sin cookies
		const res = new NextResponse(response.body, {
			status: response.status,
			headers: {
				'Content-Type': response.headers.get('Content-Type') || 'image/webp',
				'Cache-Control': 'public, max-age=31536000, immutable',
				'Access-Control-Allow-Origin': '*', // Permite uso en cualquier dominio
				'Set-Cookie': '', // Elimina cookies
			},
		})

		return res
	} catch (error) {
		console.error('Error al servir imagen de Cloudinary:', error)
		return NextResponse.json({ error: 'Error interno' }, { status: 500 })
	}
}
