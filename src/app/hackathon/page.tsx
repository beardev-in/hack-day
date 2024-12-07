import Cities from '@/components/cities/Cities'
import Hack$Day from '@/components/Hack$Day'
import HeroSection from '@/components/HeroSection'
import React from 'react'

const Hackthon = () => {
  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <div className="w-full">
        <Hack$Day/>
        <Cities/>
      </div>
    </div>
  )
}

export default Hackthon
