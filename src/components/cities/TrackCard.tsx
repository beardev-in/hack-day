'use-client'

import React from 'react'

interface TrackCardProps {
  trackName: string;
  trackDescription: string;
}

const TrackCard: React.FC<TrackCardProps> = ({ trackName, trackDescription }) => {
  return (
    <div className="p-5 bg-custom-gradient gap-2 h-[208px] sm:h-[220px] w-full sm:w-[318px] border border-gray-600 rounded-xl">
      <h1 className="text-[20px] sm:text-[24px] font-semibold">{trackName}</h1>
      <p className="text-[16px] sm:text-[18px] text-[#A5A5A5]">
        {trackDescription}
      </p>
    </div>
  )
}

export default TrackCard
