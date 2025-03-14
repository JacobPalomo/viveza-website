import { FC, memo } from 'react'
import Fact, { FactOrnaments } from '@/components/ui/Fact'

const ornaments: FactOrnaments = {
	ornament1: {
		src: 'https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/tech/ornaments/lapiz.avif',
		width: 416,
		height: 173,
		className: '!w-70 pt-10',
	},
	ornament2: {
		src: 'https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/tech/ornaments/papel-patronaje.avif',
		width: 2498,
		height: 1468,
		className: 'pb-10',
	},
}

const FactSection: FC = () => {
	return (
		<Fact
			content='Next-gen tech para una producción más agil: maquinaria de tejidos circulares que redefine la calidad y precisión. Transformamos cada paso de la producción en una experiencia más eficiente y creativa.'
			ornaments={ornaments}
		/>
	)
}

export default memo(FactSection)
