import Hero from '@/components/tecnologia/hero/Hero'
import Main from '@/components/ui/Main'
import Fact from '@/components/tecnologia/Fact'
import Video from '@/components/tecnologia/Video'
import Fairs from '@/components/tecnologia/Fairs/Fairs'
import PerformanceFabrics from '@/components/tecnologia/PerformanceFabrics'

export default function Technology() {
	return (
		<Main>
			<Hero />
			<Fact />
			<Fairs />
			<Video />
			<PerformanceFabrics />
		</Main>
	)
}
