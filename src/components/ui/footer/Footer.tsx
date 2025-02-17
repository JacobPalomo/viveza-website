import { CallToAction } from './CallToAction'
import FooterList from './LinkList'
import Link from 'next/link'
import KinisLogo from '@/components/ui/logos/Kinis'
import TiafLogo from '@/components/ui/logos/Tiaf'
import CasmiLogo from '@/components/ui/logos/Casmi'
import VivezaLogo from '@/components/ui/logos/Viveza'

export function Footer() {
	return (
		<footer className='flex min-h-[50vh] w-full flex-col items-center justify-center gap-10 bg-sky-950 bg-[url("/api/cdn?url=f_avif,q_auto/bg-footer")] bg-cover pt-40 text-white'>
			<CallToAction />

			<hr className='h-[1px] w-3/4 bg-white opacity-25' />

			<section className='w-full px-20 max-md:hidden'>
				<div className='!mb-15 grid w-full grid-cols-2'>
					<div className='flex w-max flex-col items-start justify-end'>
						<Link
							href='/'
							aria-label='Viveza Textil'
							className='!mb-10 h-10'
						>
							<VivezaLogo size={56} />
						</Link>

						<div className='flex w-full items-start justify-center gap-15 opacity-65'>
							<TiafLogo
								size={24}
								color='white'
							/>
							<KinisLogo
								size={24}
								color='white'
							/>
							<CasmiLogo
								size={24}
								color='white'
							/>
						</div>
					</div>

					<div className='grid w-full grid-cols-2'>
						<FooterList
							id={1}
							label='Páginas'
							links={[
								{
									href: '/',
									label: 'Inicio',
								},
								{
									href: '/#conocenos',
									label: 'Conocenos',
								},
								{
									href: '/#marcas',
									label: 'Marcas',
								},
								{
									href: 'https://blog.viveza-sport.com/',
									label: 'Blog',
									external: true,
								},
								{
									href: '/contacto',
									label: 'Contacto',
								},
							]}
						/>

						<FooterList
							id={2}
							label='Conecta'
							links={[
								{
									href: 'https://www.facebook.com/share/1A1ww9KDrU/?mibextid=wwXIfr',
									label: 'Facebook',
								},
								{
									href: 'https://www.instagram.com/vivezatextil',
									label: 'Instagram',
								},
							]}
						/>
					</div>
				</div>

				<div className='grid w-full grid-cols-4'>
					<FooterList
						id={3}
						label='Contacto'
						links={[
							{
								href: 'tel:+525512345678',
								label: '+52 55 1234 5678',
							},
							{
								href: 'mailto:contacto@viveza-sport.com',
								label: 'contacto@viveza-sport.com',
							},
						]}
					/>
				</div>
			</section>

			<section className='w-full px-6 min-md:hidden'>
				<div className='!my-20 grid w-full grid-cols-1 gap-20'>
					<FooterList
						id={1}
						label='Páginas'
						links={[
							{
								href: '/',
								label: 'Inicio',
							},
							{
								href: '/#conocenos',
								label: 'Conocenos',
							},
							{
								href: '/#marcas',
								label: 'Marcas',
							},
							{
								href: 'https://blog.viveza-sport.com/',
								label: 'Blog',
								external: true,
							},
							{
								href: '/contacto',
								label: 'Contacto',
							},
						]}
					/>

					<FooterList
						id={2}
						label='Conecta'
						links={[
							{
								href: 'https://www.facebook.com/share/1A1ww9KDrU/?mibextid=wwXIfr',
								label: 'Facebook',
							},
							{
								href: 'https://www.instagram.com/vivezatextil',
								label: 'Instagram',
							},
						]}
					/>
					<FooterList
						id={3}
						label='Contacto'
						links={[
							{
								href: 'tel:+525512345678',
								label: '+52 55 1234 5678',
							},
							{
								href: 'mailto:contacto@viveza-sport.com',
								label: 'contacto@viveza-sport.com',
							},
						]}
					/>
				</div>

				<div className='flex w-full flex-col items-start justify-end'>
					<Link
						href='/'
						aria-label='Viveza Textil'
						className='!mb-10 h-10'
					>
						<VivezaLogo size={56} />
					</Link>

					<div className='flex w-full items-start justify-start gap-10'>
						<TiafLogo
							size={40}
							color='white'
						/>
						<KinisLogo
							size={40}
							color='white'
						/>
						<CasmiLogo
							size={40}
							color='white'
						/>
					</div>
				</div>
			</section>

			<section className='py-5'>
				<h6 className='text-sm !font-normal'>
					&copy; {new Date().getFullYear()} Viveza Textil.
				</h6>
			</section>
		</footer>
	)
}
