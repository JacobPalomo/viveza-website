import FooterLink, { FooterLinkProps } from './Link'

interface Props {
	id: number
	label: string
	links: FooterLinkProps[]
}

const FooterLinkList: React.FC<Props> = ({ id, label, links }) => {
	return (
		<div className='flex flex-col gap-5'>
			<div>
				<h6 className='text-xs text-white/75'>({id}.0)</h6>
				<p className='!text-base text-white/75'>{label}</p>
			</div>

			<ul>
				{links.map((link) => (
					<li key={link.href}>
						<FooterLink
							href={link.href}
							label={link.label}
							external
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default FooterLinkList
