import React, { useState} from 'react';
const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState('');

  const handleInputChange =(event)=>{
    setLocation(event.target.value);
  };
   


   const fetchWeatherData =()=>{
        const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/current?lat=37.81021&lon=-122.42282&timezone=auto&language=en&units=auto';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '17a53942a4msh13dd365d4c54af8p153920jsn7bdc2d7928b0',
                'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
            }
        };
    
    fetch(url,options) 
    .then((res)=> res.json())
    .then((data)=>{ return setWeatherData(data), console.log(data);
        })
        .catch((error)=>console.error(error))
};
    return (<div className="App">
          <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={handleInputChange}
      />
      <button onClick={fetchWeatherData}>get weather</button>
      {weatherData && (
        <div>
          <h2>weather for : {location}</h2>
          <h3>Current Temperature: {weatherData.current.temperature}°C</h3>
          <h1>{weatherData.timezone}</h1>
        </div>
      )}

    </div>  );
}
 
export default Weather;