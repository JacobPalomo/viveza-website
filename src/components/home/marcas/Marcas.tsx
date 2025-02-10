import Image from 'next/image'
import CasmiLogo from '@/components/ui/Logos/Casmi'
import KinisLogo from '@/components/ui/Logos/Kinis'
import TiafLogo from '@/components/ui/Logos/Tiaf'
import Marca from './Marca'

export default function Marcas() {
	const cookiesAccepted =
		typeof window !== 'undefined' &&
		localStorage.getItem('cookiesAccepted') === 'true'

	return (
		<section
			id='marcas'
			className='!mt-20 grid grid-cols-2 grid-rows-2 gap-1 bg-background p-10 max-md:flex max-md:flex-col max-md:gap-10'
		>
			<div className='flex h-[50vh] flex-col items-start justify-center gap-5 rounded-3xl rounded-b-none bg-sky-950 p-20 max-md:h-auto max-md:rounded-b-3xl max-md:p-10'>
				<h2 className='text-white'>Nuestras Marcas</h2>
				<p className='text-justify text-white'>
					Nos enorgullece ofrecer productos que combinan{' '}
					<strong>innovación</strong>, <strong>calidad</strong> y diseño a
					través de nuestras marcas insignia: <strong>Casmi</strong>,{' '}
					<strong>Kinis</strong> y <strong>TIAF</strong>. Cada una está diseñada
					para satisfacer necesidades específicas, abarcando desde{' '}
					<strong>ropa interior </strong>
					femenina hasta <strong>ropa deportiva</strong> de alto rendimiento.
				</p>
			</div>

			{/* CASMI */}
			<Marca
				id='casmi'
				className='!mt-20 rounded-tl-none rounded-b-none max-md:!mt-0 max-md:rounded-3xl'
				Logo={
					<CasmiLogo
						color='#E02881'
						size={56}
					/>
				}
				backgroundImage={
					<Image
						src='/api/cloudinary?url=f_auto,q_auto/io2c1wefedel21big8vi'
						alt='Casmi Background'
						width={736}
						height={980}
						quality={100}
						loading='lazy'
						aria-hidden='true'
						unoptimized={!cookiesAccepted}
						className='absolute top-0 z-[1] h-auto w-full object-cover max-md:h-full'
					/>
				}
				title='Comodidad y Moda para Todas'
				description='Casmi es sinónimo de versatilidad. Ofrecemos soluciones para aquellas mujeres que buscan diseños funcionales y vanguardistas'
				tags={[
					{
						label: 'Seamless',
						backgroundColor: '#f1cad9',
						textColor: '#E02881',
					},
					{
						label: 'Tendencias',
						backgroundColor: '#f1cad9',
						textColor: '#E02881',
					},
					{
						label: 'Aplicaciones innovadoras',
						backgroundColor: '#f1cad9',
						textColor: '#E02881',
					},
				]}
			/>
			{/* End CASMI */}

			{/* KINIS */}
			<Marca
				id='kinis'
				className='!-mt-20 rounded-t-none rounded-br-none max-md:!mt-0 max-md:rounded-3xl'
				Logo={
					<KinisLogo
						color='#DB7D8B'
						size={56}
					/>
				}
				backgroundImage={
					<Image
						src='/api/cloudinary?url=f_auto,q_auto/ob919n1kv8jm1hpevmcn'
						alt='Kinis Background'
						width={736}
						height={736}
						quality={100}
						loading='lazy'
						aria-hidden='true'
						unoptimized={!cookiesAccepted}
						className='absolute top-0 z-[1] h-auto w-full object-cover max-md:h-full'
					/>
				}
				title='Estilo y Confort para la Mujer Moderna'
				description='Kinis es una marca que redefine la ropa interior femenina, ofreciendo productos que combinan tecnología seamless, comodidad y estilo.'
				tags={[
					{
						label: 'Básicos diarios',
						backgroundColor: '#F4D0D7',
						textColor: '#C04A64',
					},
					{
						label: 'Estilo sexy',
						backgroundColor: '#F4D0D7',
						textColor: '#C04A64',
					},
					{
						label: 'Control y modelado',
						backgroundColor: '#F4D0D7',
						textColor: '#C04A64',
					},
				]}
			/>
			{/* End KINIS */}

			{/* TIAF */}
			<Marca
				id='tiaf'
				className='rounded-t-none max-md:!mt-0 max-md:rounded-3xl'
				Logo={
					<TiafLogo
						color='#BF9F6B'
						size={56}
					/>
				}
				backgroundImage={
					<Image
						src='/api/cloudinary?url=f_auto,q_auto/mqopn4nevglbesjzysxh'
						alt='TIAF Background'
						width={5192}
						height={3466}
						quality={100}
						loading='lazy'
						aria-hidden='true'
						unoptimized={!cookiesAccepted}
						className='absolute top-0 z-[1] h-full w-full object-cover'
					/>
				}
				title='Rendimiento y Estilo'
				description='TIAF se especializa en ropa interior y deportiva, con un enfoque en funcionalidad y tecnología. También tiene su linea KIDS.'
				tags={[
					{
						label: 'Seamless Sport',
						backgroundColor: '#F0EFE7',
						textColor: '#695830',
					},
					{
						label: 'Ropa interior',
						backgroundColor: '#F0EFE7',
						textColor: '#695830',
					},
					{
						label: 'Línea infantil',
						backgroundColor: '#F0EFE7',
						textColor: '#695830',
					},
				]}
			/>
			{/* End TIAF */}
		</section>
	)
}
