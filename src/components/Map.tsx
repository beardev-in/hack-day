import React from 'react'
import IndiaLogo from '../../public/India.svg';
import Image from 'next/image';

const Map = () => {
  return (
    <div className='flex flex-col items-center'>
      <p>India</p>
      <Image src={IndiaLogo} alt="Country_Image" className='bg-transparent'/>
      <p>Feb 18-19</p>
    </div>
  )
}

export default Map
