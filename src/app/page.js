import Image from 'next/image'
import hero_bg from '../../public/hero_bg.webp'
import hero_fg from '../../public/hero_fg.png'

export default function Home() {
	return (
		<main>
			<div className='relative h-[450px]'>
				<Image
					className='object-cover object-center'
					fill
					src={hero_bg}
					alt='hero background'
				/>
				<Image
					className='object-cover object-center'
					fill
					src={hero_fg}
					alt='hero background'
				/>
				{/* Hero text */}

				<div className='absolute text-white top-2 z-30'>
					<h5>wzm ----------</h5>

					<h1 className='uppercase'>Mobile just got real</h1>
					<div>
						<p>Drop into Real Call of Duty® Action with</p>
						<p>Call of Duty: Warzone™ Mobile. Available Now!</p>
					</div>
					<button className='uppercase'>Learn more</button>
				</div>
			</div>
		</main>
	)
}
