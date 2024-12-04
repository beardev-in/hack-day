import Map from './Map'

const Hack$Day = () => {
  return (
    <div className='gap_section flex flex-col gap-4 min-h-[279.06px]'>
      <div className='w-full flex items-center justify-center'>
        <h1 className='monasans text-[32px] font-semibold'>Hack $Day Global</h1>
      </div>
      <div className='text-[14px]'>
        <p>Join a transformative hackathon journey where creativity and technology merge to tackle meaningful challenges.Problem Statement: Innovate solutions for pressing issues in sustainability, fintech, and healthcare. Target Domains: AI, Blockchain, IoT, and Green Technology.</p>
      </div>
      {/* Map section */}
      <div className='w-full flex justify-between flex-wrap'>
        <Map />
        <Map />
        <Map />
        <Map />
        <Map />
        <Map />
      </div>
    </div>
  )
}

export default Hack$Day
