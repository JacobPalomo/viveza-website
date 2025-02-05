import Conocenos from '@/components/sections/Conocenos'
import Customers from '@/components/sections/Customers'
import Features from '@/components/sections/Features'
import Hero from '@/components/sections/Hero/Hero'
import Marcas from '@/components/sections/marcas/Marcas'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center bg-background'>
			<Hero />
			<Customers />
			<Features />
			<Conocenos />
			<Marcas />
		</main>
	)
}
