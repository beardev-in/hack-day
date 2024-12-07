'use-client'

import Map from './Map'

const Hack$Day = () => {
  return (
    <div className='gap_section flex flex-col gap-4 min-h-[279.06px]'>
      <div className='w-full flex items-center justify-center'>
        <h1 className='monasans text-[32px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold'>
          Hack $Day Global
        </h1>
      </div>
      <div className='text-[14px] text-center'>
        <p className='text-[14px] sm:text-[16px] text-[#D2D2D2]'>
          Join a transformative hackathon journey where creativity and technology merge to tackle meaningful challenges.
          Problem Statement: Innovate solutions for pressing issues in sustainability, fintech, and healthcare. Target Domains: AI, Blockchain, IoT, and Green Technology.
        </p>
      </div>
      {/* Map section */}
      <div className="w-full flex items-center justify-between mt-4 flex-col lg:flex-row">
        <div className="w-full max-h-screen overflow-y-auto">
          <Map />
        </div>
      </div>
    </div>
  )
}

export default Hack$Day
