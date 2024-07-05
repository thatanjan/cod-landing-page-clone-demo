import FeaturedCard from './FeaturedCard'
import blackcellImage from '../../../public/featured/blackcell.webp'

const featuredData = [
	{
		image: blackcellImage,
		text: {
			eyebrow: 'call of duty',
			heading: 'blackcell',
			subheading:
				'Unlock the new Stasis Operator alongside other digitized Skins and Weapon Blueprints',
			button: 'Level UP',
		},
	},
]

const Featured = () => {
	return (
		<div>
			{featuredData.map(data => (
				<FeaturedCard key={data.text.heading} {...data} />
			))}
		</div>
	)
}

export default Featured
