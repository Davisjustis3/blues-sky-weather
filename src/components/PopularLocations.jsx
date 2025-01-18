import { useState, useEffect } from "react"
import { PopLocationInfo } from "./PopLocationInfo";
export function PopularLocations(props) {
  const {popularLocations} = props
  const [weatherData, setWeatherData] = useState({});

  const apiKey = '5b47535472ad45dbb5b00954251001'

  useEffect(() => {
    // Function to fetch weather data for a single city
    const fetchWeatherForCity = async (city) => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&hourly=1`
        );
        const weather = await response.json();
        setWeatherData((prevData) => ({
          ...prevData,
          [city]: weather.current, // Store only the 'current' weather for the city
        }));
      } catch (error) {
        console.error(`Error fetching weather data for ${city}:`, error);
      }
    };
    popularLocations.forEach((location) => {
      fetchWeatherForCity(location.city);
    });
  }, [popularLocations]);
  return (
    <>
      {popularLocations.map((location, index) => {
        const cityWeather = weatherData[location.city];
        return cityWeather ? (
          <div
            key={index}
            className={`popular-city ${location.city}`}
            style={{
              backgroundImage: `url(${location.image})`,
            }}
          >
            <h4 className="pop-loc-title">{location.city}</h4>
            {<PopLocationInfo cityWeather={cityWeather} index={index} />}
          </div>
        ) : (
          <div key={index} className="popular-city">
            Loading data for {location.city}...
          </div>
        );
      })}
    </>
  );
}