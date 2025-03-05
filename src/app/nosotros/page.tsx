import Main from '@/components/ui/Main'
import Hero from '@/components/nosotros/hero/Hero'
import Philosophy from '@/components/nosotros/Philosophy'
import Video from '@/components/nosotros/Video'

export default function NosotrosPage() {
	return (
		<Main>
			<Hero />
			<div
				data-header-theme='light'
				className='relative w-full'
			>
				<Philosophy />
				<Video />
			</div>
		</Main>
	)
}
