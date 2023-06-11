import React from 'react'

function Weather({text,code,icon}) {
  const iconImg=icon;
  console.log(icon);
  return (
    <div className='weather container p-3 border text-center text-white'>
       <div>
       <h1>weather Condition</h1>
        
        <h3>{text}</h3>
       </div>
        <div className=' img container'><img className='img-fluid' src={`${iconImg}`}alt="Weather" /></div>
    </div>
  )
}

export default Weather