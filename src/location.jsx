import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Location({ lat, lon, timezone, region, country, name }) {
  console.log(lat, lon);
  const containerStyle = {
    width: '100%',
    height: '100%'
  };
  const center = {
    lat: parseFloat(lat) || 0,
    lng: parseFloat(lon) || 0
  }
  if (!Number.isFinite(center.lat) || !Number.isFinite(center.lng)) {
    return (
      <div className='container-fluid fw-bold text-light p-3'>
        <div className='row'>
          <div className='details col-sm-7 text-left d-flex justify-content-center align-items-start flex-column '>
            <p>Invalid coordinates</p>
          </div>
          <div className='map col-sm-5 border'>Map</div>
        </div>
      </div>
    );
  }

  return (
    <div className='container-fluid fw-bold text-light p-3'>
      <div className="row">
        <div className="details col-sm-12 col-md-6 text-left d-flex justify-content-center align-items-start flex-column ">
          <span>Latitude: {lat}</span>
          <span>Longitude: {lon}</span>
          <span>Location: {name}</span>
          <span>Region: {region}</span>
          <span>Country: {country}</span>
          <span>Timezone: {timezone}</span>
        </div>
        <div className="map col-sm-12 col-md-6 border">
          <LoadScript googleMapsApiKey='YOUR_API_KEY'>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  )
}

export default Location;
