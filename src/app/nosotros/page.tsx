import Main from '@/components/ui/Main'
import Hero from '@/components/nosotros/hero/Hero'
import Philosophy from '@/components/nosotros/Philosophy'
import Video from '@/components/nosotros/Video'
import Fact from '@/components/nosotros/Fact'

export default function NosotrosPage() {
	return (
		<Main>
			<div
				data-header-theme='light'
				className='relative w-full'
			>
				<Hero />
				<Philosophy />
			</div>

			<Fact />
			<Video />
		</Main>
	)
}
