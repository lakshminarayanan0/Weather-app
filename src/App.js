import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'
import Searchbar from './searchbar';
import Header from './header';
import Main from './main';
import Footer from './footer'
import { useEffect, useState } from 'react';



function App() {

  const [input,setInput]=useState('')
  const [error,setError]=useState('')
  const [isLoading,setIsLoading]=useState(false)
  const [response,setResponse]=useState(null)

  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(
  //     function(position) {
  //       const latitude = position.coords.latitude;
  //       const longitude = position.coords.longitude;
  //       console.log("Latitude:", latitude);
  //       console.log("Longitude:", longitude);
  //       fetchWeather(latitude,longitude)
  //     },
  //     function(error) {
  //       console.log("Error:", error.message);
  //     }
  //   );
  // } else {
  //   console.log("Geolocation is not supported by this browser.");
  // }
  
  
const searchInput=(e)=>{
  setInput(e.target.value)
 }

useEffect(()=>{
  console.log(input);
},[input])

  const API_KEY='37964ad7b89841b0acf113858231106'
  const city=input

  
const fetchWeather=async ()=>{
  if(input.trim()==='') {
    setError('Please Enter valid city name')
    return;
  }
 
  setIsLoading(true)
  setError(null)
  setResponse(null)


  const API_URL=`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
  try{
   
      const response = await fetch(API_URL)
      if(!response.ok) {
        throw Error('Please Enter valid city name')
      }
      const data=await response.json()
      setResponse(data)
      console.log(data);
  }
  catch(err){
  console.log(err.stack);
  setError(err.message)
  }
  finally{
    setIsLoading(false)
  }
    
}





  return (
    <div className="App container-fluid">
      <Header title={'Weather App'} />

      <Searchbar 
       fetchWeather={fetchWeather}
       input={input} 
       searchInput={searchInput} 
       error={error}
       />

     <div className='main'> 
      {isLoading?
       (<div className='loader container text-center text-white '>
        <p>
          <span className='spinner-border spinner-border-sm text-info'></span>Loading...
          </p>
          </div>):
      error ? 
      (<div className='error container d-grid justify-content-center align-items-center text-white '>
        <p>No data found</p>
        </div> ) :
      (<Main response={response}/>)}
      </div>
      <Footer name={'Fullstack Developer'}/>
 
    </div>
  );

 
}
Header.defaultProps={
  title:'Weather Web App'
}
Footer.defaultProps={
  name:'Fullstack Developer'
}
export default App;
