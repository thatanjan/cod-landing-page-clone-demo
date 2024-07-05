import FooterCompanyLogo from './FooterCompanyLogo'
import FooterCopyRight from './FooterCopyRight'

// container should be flex and center
const links = [
  'LEGAL',
  'TERMS OF USE',
  'PRIVACY POLICY',
  'CAREERS',
  'COOKIE POLICY',
  'SUPPORT',
  'CODE OF CONDUCT',
]

const FooterLinks = () => {
  return (
    <div className='flex flex-wrap gap-8 justify-center space-x-4 text-sm font-normal'>
      {links.map((link, index) => (
        <a
          key={index}
          href='#'
          className={`text-white ${index !== 0 ? "before:content-['|'] before:mr-5" : ''}`}
        >
          {link}
        </a>
      ))}
    </div>
  )
}

const Footer = () => {
  return (
    <footer className='bg-black p-12'>
      <div className='max-w-screen-xl mx-auto my-0'>
        <FooterLinks />
        <hr className='footer-divider' />
        <FooterCompanyLogo />
        <FooterCopyRight />
      </div>
    </footer>
  )
}

export default Footer
