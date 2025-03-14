import Hero from '@/components/tecnologia/hero/Hero'
import Main from '@/components/ui/Main'
import Fact from '@/components/tecnologia/Fact'
import Video from '@/components/tecnologia/Video'
import Fairs from '@/components/tecnologia/Fairs/Fairs'
import Section from '@/components/ui/Section'

export default function Technology() {
	return (
		<Main>
			<Hero />
			<Fact />
			<Video />
			<Fairs />
		</Main>
	)
}
