import React from 'react'
import {FaCloudSunRain} from 'react-icons/fa'

function Header({title}) {
  return (
    <div className='header container-fluid text-center '>
        <h1 className='title fw-bold text-uppercase'><FaCloudSunRain className='icon'/>{title}</h1>
    </div>
  )
 
}

export default Header