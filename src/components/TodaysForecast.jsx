import { HourlyWeather } from "./HourlyWeather"

export function TodaysForecast(props) {
  const { weatherData, popularLocations} = props
  return (
    <div className="todays-forecast">
            {< HourlyWeather
                weatherData={weatherData}
              />}
    </div>
  )
}