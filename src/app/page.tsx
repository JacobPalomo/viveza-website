import { metadata } from '@/app/metadata'
import VivezaLogo from '@/components/Viveza'
import SocialLink from '@/components/SocialLink'
import Image from 'next/image'
import constructionImg from '@/../public/construction.png'

export { metadata }

export default function Home() {
	return (
		<main className="w-full h-screen bg-background gap-6 max-md:gap-10 flex flex-col justify-center items-center">
			<VivezaLogo size={48} />

			<div className="flex flex-col justify-center items-center gap-1">
				<h1 className="text-center">¡Esperanos muy pronto!</h1>
			</div>

			<Image
				src={constructionImg}
				alt="Sitio en construcción"
				className="w-full object-cover h-max"
			/>

			<div className="flex gap-6 pt-10">
				<SocialLink href="https://www.facebook.com/profile.php?id=61568565606669&mibextid=wwXIfr&rdid=O0SUSDQrkQHNOFWI">
					Facebook
				</SocialLink>
				<SocialLink href="https://instagram.com/vivezatextil">
					Instagram
				</SocialLink>
			</div>
		</main>
	)
}
