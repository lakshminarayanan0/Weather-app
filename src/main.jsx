import React from 'react'
import Location from './location'
import Weather from './weather'
import Info from './info'


function Main({response}) {
 
        if (!response) {
          return null; // Return null or a loading indicator if the response is not available yet
        }

  const {location,current}=response
  const {region,name,tz_id,lat,lon,country}=location
  const {condition,humidity,temp_c,wind_kph,temp_f,wind_mph,is_day}=current
  const {text,code,icon}=condition
  console.log(location);
  console.log(condition);
  return (
    <div className='container-fluid'>
        
        <Location lat={lat} lon={lon} name={name} region={region} timezone={tz_id} country={country}/>
        <Weather text={text} code={code} icon={icon}/>
        <Info humidity={humidity} tempC={temp_c} tempF={temp_f} windKPH={wind_kph} windMPH={wind_mph} isDay={is_day}/>
      
    </div>
  )
}

export default Main