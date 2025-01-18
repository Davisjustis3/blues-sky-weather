import { TodaysWeather } from "./TodaysWeather"

export const Hero = (props) => {
  const { location, fetchWeather, changeLocation, apiKey, apiURL, setWeatherData, weatherData, popularLocations, hourlyWeather, dayTempAvg } = props
  return (
    <div className="hero">
      {<TodaysWeather
        location={location}
        fetchWeather={fetchWeather}
        changeLocation={changeLocation}
        apiKey={apiKey}
        apiURL={apiURL}
        setWeatherData={setWeatherData}
        weatherData={weatherData}
        popularLocations={popularLocations}
        hourlyWeather={hourlyWeather}
        dayTempAvg={dayTempAvg} />}
    </div>
  )
}