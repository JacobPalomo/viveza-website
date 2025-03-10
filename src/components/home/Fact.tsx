import { FC, memo } from 'react'
import Fact from '../ui/Fact'

const ornaments = {
	ornament1: {
		src: 'https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/home/ornament-tijeras.avif',
		width: 673,
		height: 233,
	},
	ornament2: {
		src: 'https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/home/ornament-cinta-metrica.avif',
		width: 1392,
		height: 693,
	},
}

const HomeFact: FC = () => {
	return (
		<Fact
			ornaments={ornaments}
			content='Los expertos en moda entienden que la dedicación al detalle es
						clave. Esa es la diferencia entre nosotros y los que simplemente
						siguen tendencias.'
		/>
	)
}

export default memo(HomeFact)
