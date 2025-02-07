export function contactEmailTemplate(
	name: string,
	lastname: string,
	email: string,
	message: string,
) {
	return `
		<!DOCTYPE html>
		<html lang="es">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Nuevo Mensaje de Contacto</title>
		</head>
		<body style="font-family: Arial, sans-serif; background-color: #f5f7fa; padding: 20px; font-size: 18px; margin: 0;">
			<table style="max-width: 600px; background: white; padding: 40px; margin: 20px auto; border-radius: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); width: 100%;">
				<tr>
					<td style="text-align: center;">
						<img src="https://res.cloudinary.com/dtvpssenl/image/upload/f_auto,q_auto/fghxcuct3ikkjceiit3u" alt="Logo Viveza Textil" width="200" height="auto" style="margin-bottom: 20px;">
					</td>
				</tr>
				<tr>
					<td style="border-top: 1.5px solid rgba(4, 53, 77, 0.15); padding-top: 20px;">
						<h2 style="color: #00aae2; font-size: 24px; text-align: center; line-height: 44px; margin: 0; text-transform: uppercase;">Nuevo mensaje de contacto</h2>
					</td>
				</tr>
				<tr>
					<td style="padding-top: 20px;">
						<strong style="color: #00aae2;">De:</strong>
						<p style="background: #f2f9fc; padding: 8px; border: 1.5px solid #00aae2; border-radius: 8px;">${name} ${lastname}</p>
					</td>
				</tr>
				<tr>
					<td>
						<strong style="color: #00aae2;">Correo:</strong>
						<p style="background: #f2f9fc; padding: 8px; border: 1.5px solid #00aae2; border-radius: 8px;">${email}</p>
					</td>
				</tr>
				<tr>
					<td>
						<strong style="color: #00aae2;">Mensaje:</strong>
						<p style="background: #f2f9fc; padding: 8px; border: 1.5px solid #00aae2; border-radius: 8px;">${message}</p>
					</td>
				</tr>
				<tr>
					<td style="text-align: center; padding-top: 20px;">
						<a href="mailto:${email}?subject=Re: Tu mensaje a Viveza Textil" 
							style="width: 100%; box-sizing: border-box; background-color: #00aae2; color: white; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-size: 16px; display: inline-block; font-weight: bold;">
							Responder
						</a>
					</td>
				</tr>
			</table>
			<footer style="text-align: center; font-size: 14px; color: #999;">
				<p>Este mensaje fue enviado desde el <i>formulario de contacto</i> de <a href="http://localhost:3000" target="_blank" style="color: #00aae2;">Viveza Textil</a>.</p>		
			</footer>
		</body>
		</html>
	`
}
