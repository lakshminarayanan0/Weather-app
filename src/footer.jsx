import React from 'react'

function Footer({name}) {
    const year=new Date()
  return (
    <div className=' footer p-2  text-white text-center'>
        <p className='footerContent'>{name} &copy;{year.getFullYear()} || All rights reserved. </p>
    </div>
  )
}

export default Footer