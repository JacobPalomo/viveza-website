import { metadata } from '@/app/metadata'
import Conocenos from '@/components/home/Conocenos'
import Features from '@/components/home/features/Features'
import Hero from '@/components/home/hero/Hero'
import Marcas from '@/components/home/Marcas'
import Main from '@/components/ui/Main'

export { metadata }

export default function Home() {
	const timestamp = Date.now().toString()

	return (
		<Main>
			<div className='relative'>
				<Hero />
				<Features />
			</div>
			<Conocenos />
			<Marcas />
		</Main>
	)
}
