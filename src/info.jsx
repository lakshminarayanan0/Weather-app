import React, { useState } from 'react';
import { FaWind, FaTemperatureHigh, FaSun, FaMoon } from "react-icons/fa";
import { FiDroplet,FiRepeat } from 'react-icons/fi';

function Info({ humidity, tempC, tempF, windMPH, windKPH, isDay }) {
  const [isCelsius, setIsCelsius] = useState(true);
  const [isKPH, setIsKPH] = useState(true);

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const toggleWindSpeedUnit = () => {
    setIsKPH(!isKPH);
  };

  const temperature = isCelsius ? tempC + "°C" : tempF + "°F";
  const windSpeed = isKPH ? windKPH + " km/h" : windMPH + " mph";

  return (
    <div className='container p-3 text-white text-center border'>
      <div className="row">
        <div className="col-sm-6">
          <h3><FaWind /> Windspeed</h3>
          <h5>{windSpeed}  <button onClick={toggleWindSpeedUnit} 
          className='btn btn-outline-light'
          >
            <FiRepeat/>
          </button></h5>
         
        </div>
        <div className="col-sm-6">
          <h3><FiDroplet /> Humidity</h3>
          <h5>{humidity}%</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <h3><FaTemperatureHigh /> Temperature</h3>
          <h5>{temperature}  <button
          className='btn btn-outline-light'
           onClick={toggleTemperatureUnit}><FiRepeat/></button></h5>
         
         
        </div>
        <div className="col-sm-6">
          <h3><FaSun /> / <FaMoon /></h3>
          <h5>{isDay ? 'Day' : 'Night'}</h5>
        </div>
      </div>
    </div>
  );
}

export default Info;
