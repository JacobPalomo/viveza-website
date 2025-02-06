import Conocenos from '@/components/home/Conocenos'
import Customers from '@/components/home/Customers'
import Features from '@/components/home/Features'
import Hero from '@/components/home/hero/Hero'
import Marcas from '@/components/home/marcas/Marcas'
import Main from '@/components/ui/Main'

export default function Home() {
	return (
		<Main>
			<Hero />
			<Customers />
			<Features />
			<Conocenos />
			<Marcas />
		</Main>
	)
}
