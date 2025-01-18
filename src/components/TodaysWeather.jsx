import { HourlyWeather } from "./HourlyWeather"
import { TodaysForecast } from "./TodaysForecast"
import axios from "axios"
import { useEffect, useState } from "react"

export const TodaysWeather = (props) => {
  const {fetchWeather, location, apiURL, hourlyWeather, weatherData, setWeatherData} = props
  
  function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
  useEffect(() => {
    fetchWeather()
  }, [location])
  return (
    <>
    <div className="todays-weather-container">
        <h1 className="title">Today's Weather</h1>
        {weatherData && weatherData.location ?
          <p className="your-location"><i className="fa-solid fa-location-dot"></i>
            {capitalizeFirstLetter(`${location}, ${weatherData.location.country}`)} 
          </p> :
          <p className="loading-data-location loading">Loading weather data...</p>
          }
        <div className="temp-circle">
          {
            weatherData && weatherData.current ? 
            <h1 className="temp-num">
              {Math.floor(weatherData.current.temp_c)}
            </h1> :
              <p className="loading-data-temp loading">Loading weather data...</p>
          }
        </div>
        {<TodaysForecast
          hourlyWeather={hourlyWeather}
          weatherData={weatherData}
          setWeatherData={setWeatherData}/>}
    </div>
    </>
  )
}