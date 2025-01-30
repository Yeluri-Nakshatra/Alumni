import React from 'react'
import UpComing from './UpComing'
import PastReunions from './PastReunions'
const Reunion = () => {
  return (
    <div className='flex flex-col gap-4 mt-[110px]'>
      <UpComing/>
      <PastReunions/>

    </div>
  )
}

export default Reunion