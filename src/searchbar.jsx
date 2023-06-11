import React from 'react'
import {FaSearch} from 'react-icons/fa'

function Searchbar({fetchWeather,searchInput,input,error}) {
  return (
    <div className='searchArea container-fluid d-flex flex-column justify-content-center align-items-center p-2'>
        <form action="" className='form input-group input-group-sm' onSubmit={e=>e.preventDefault()}>
            <input type="text"
            
             className='input form-control border-none bg-transparent text-white fw-bold'
             placeholder='Enter City Name'
             value={input}
             required
             autoFocus
             onChange={searchInput}
             />
             
            <button className='btn btn-outline-light border' 
            onClick={fetchWeather}
            ><FaSearch/></button>
        </form>
       <p className='me-5 text-white'>{error}</p>
    </div>
  )
}

export default Searchbar