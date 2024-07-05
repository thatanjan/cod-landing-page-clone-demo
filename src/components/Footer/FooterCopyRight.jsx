import Image from 'next/image'
import React from 'react'

const FooterCopyRight = () => {
  return (
    <div className='flex flex-wrap gap-6 justify-center'>
      <Image
        src='https://imgs.callofduty.com/content/dam/atvi/global/ratings/esrb/esrb-privacy.jpg'
        width={100}
        height={100}
        alt='privace logo'
        className='h-28 w-auto object-contain'
      />

      <Image
        src='https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw3/common/ratings/esrb-mw3-en.jpg'
        width={180}
        height={105}
        alt='rating logo'
        className='h-28 w-auto object-contain'
      />
      <div className='basis-[100%]'>
        <p className='max-w-[560px] text-center  mx-auto my-0'>
          © 2024 Activision Publishing, Inc. ACTIVISION, CALL OF DUTY, CALL OF
          DUTY LEAGUE, MODERN WARFARE, CALL OF DUTY BLACK OPS, CALL OF DUTY
          WARZONE, and CALL OF DUTY VANGUARD are trademarks of Activision
          Publishing, Inc. All other trademarks and trade names are the property
          of their respective owners.
        </p>
      </div>
    </div>
  )
}

export default FooterCopyRight
