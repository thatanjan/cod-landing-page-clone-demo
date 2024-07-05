import Image from 'next/image'

const FeaturedCard = ({
	image,
	text: { eyebrow, heading, subheading, button },
}) => {
	return (
		<div>
			<Image src={image} alt={heading} />
			<p>eyebrow text</p>
			<h2>heading 2 </h2>
			<button>cta button</button>
		</div>
	)
}

export default FeaturedCard
