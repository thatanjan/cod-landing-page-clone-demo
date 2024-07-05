'use client'
import Image from 'next/image'

const logoLinks = [
  'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/activision-logo.png',
  'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/treyarch-logo.png',
  'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/shg-logo.png',
  'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/high-moon-logo.png',
  'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/digital-legends-logo.png',
  'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/atvi-shanghai-logo.png',
  'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/infinity-ward-logo.png',
  'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/raven-logo.png',
  'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/solid-state-logo.png',
  'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/demonware-logo.png',
  'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/studio-logos/beenox-logo.png',
]

const FooterCompanyLogo = () => {
  return (
    <div className='flex flex-wrap justify-center gap-6 mt-8'>
      {logoLinks.map((logoLink, index) => (
        <Image
          key={index}
          src={logoLink}
          alt='company logo'
          className='h-auto w-36 object-contain'
          width={100}
          height={100}
          // loader={({ src }) => src}
        />
      ))}
    </div>
  )
}

export default FooterCompanyLogo
