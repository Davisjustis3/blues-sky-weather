export function PopLocationInfo(props) {
  const {cityWeather, index} = props
  return (
    <div className={`pop-temp-container pop-container-${index}`}>
      <div className="pop-city-temp">{Math.floor(cityWeather.temp_c)}°C</div>
        <div className="info-container">
            <div className="feels-like-container">
                <span>{cityWeather.last_updated.split(" ")[1]}</span>
                <p className="feels-like">Feels like: {Math.floor(cityWeather.feelslike_c)}°C</p>
                <span>High: {Math.floor(cityWeather.temp_c + 2)}°C</span>
                <span>Low: {Math.floor(cityWeather.temp_c - 2)}°C</span>
          <span>{}</span>
            </div>
            <div className="weather-icon">
                <img className="image-icon" src={cityWeather.condition.icon} alt="weather condition" />
            </div>
        </div>
    </div>
  )
}