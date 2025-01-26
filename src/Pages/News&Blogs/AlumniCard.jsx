import React from 'react'

const AlumniCard = (data) => {
  return (
    <div className='h-[400px] w-[300px] bg-red-300'>
       <img src={data.image} />
    </div>
  )
}

export default AlumniCard