import Main from '@/components/ui/Main'
import ContactForm from '@/components/contacto/ContactForm'
import { metadata } from '@/app/contacto/metadata'

export { metadata }

export default function ContactPage() {
	return (
		<Main className='before-radial-mask-image pt-70 pb-20'>
			<ContactForm />
		</Main>
	)
}
