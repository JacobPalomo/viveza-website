import { metadata } from '@/app/metadata'
import Main from '@/components/ui/Main'
import Hero from '@/components/home/hero/Hero'
import Features from '@/components/home/Features'
import Nosotros from '@/components/home/Nosotros'
import Marcas from '@/components/home/Marcas'
import Fact from '@/components/home/Fact'
import Conecta from '@/components/home/Conecta'

export { metadata }

export default function Home() {
	return (
		<Main>
			<Hero />

			<div
				className='relative h-full w-full'
				data-header-theme='dark'
			>
				<Fact />
				<Features />
			</div>

			<div
				className='relative h-full w-full'
				data-header-theme='light'
			>
				<Nosotros />
				<Marcas />
			</div>

			<Conecta />
		</Main>
	)
}
