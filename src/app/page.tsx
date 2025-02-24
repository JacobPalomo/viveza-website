import { metadata } from '@/app/metadata'
import Main from '@/components/ui/Main'
import Hero from '@/components/home/hero/Hero'
import Features from '@/components/home/features/Features'
import Nosotros from '@/components/home/Nosotros'
import Marcas from '@/components/home/Marcas'
// import Fact from '@/components/home/Fact'

export { metadata }

export default function Home() {
	return (
		<Main>
			<Hero />

			<div
				className='relative'
				data-header-theme='black'
			>
				{/* <Fact /> */}
				<Features />
			</div>

			<Nosotros />
			<Marcas />
		</Main>
	)
}
