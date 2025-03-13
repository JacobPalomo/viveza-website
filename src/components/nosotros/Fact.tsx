import { FC, memo } from 'react'
import Fact from '@/components/ui/Fact'

const ornaments = {
	ornament1: {
		src: 'https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/us/fact/ornament-corta-hilos.avif',
		width: 557,
		height: 273,
	},
	ornament2: {
		src: 'https://5iqutjjvwavjp1v7.public.blob.vercel-storage.com/us/fact/ornament-carrete-hilo.avif',
		width: 470,
		height: 345,
		className: '!w-72',
	},
}

const NosotrosFact: FC = () => {
	return (
		<Fact
			ornaments={ornaments}
			content='Una prenda seamless no tiene costuras que la detengan. Fluye con total libertad, se adapta al cuerpo y permite moverse sin restricciones. Esa es nuestra esencia: una historia de renacimiento, evolución constante, sin fronteras y sin miedo al cambio.'
		/>
	)
}

export default memo(NosotrosFact)
