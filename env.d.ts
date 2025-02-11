declare namespace NodeJS {
	interface ProcessEnv {
		SMTP_EMAIL: string
		SMTP_PASSWORD: string
		CONTACT_EMAIL: string
		NEXT_PUBLIC_HCAPTCHA_SITE_KEY: string
		HCAPTCHA_SECRET_KEY: string
	}
}
