import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

export function HourlyWeather(props) {
  const { weatherData } = props;

  // Log the weather data for debugging
  console.log(weatherData);

  const hourlyForecast = weatherData && weatherData.forecast && 
    weatherData.forecast.forecastday[0] ? 
    weatherData.forecast.forecastday[0].hour : 
    [];

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
  };

  return (
    <div className="slider-container">
      {hourlyForecast.length > 0 ? (
        <Slider {...settings}>
          {hourlyForecast.map((hour, index) => (
            <div key={index} className="card-wrapper">
              <div className="hour-temp">
              <span>{hour.time.split(" ")[1]}</span>
                <span>{Math.floor(hour.temp_c)} deg</span>
                </div>
              <div className="chance-container">
                {hour.temp_c < 1 || hour.chance_of_snow > 0 ?
                  <span>
                    <i className='fa-solid fa-snowflake'></i>
                    <span>{hour.chance_of_snow}%</span>
                  </span> :
                  <span>
                    <i className='fa-solid fa-droplet'></i>
                    <span>{hour.chance_of_rain}%</span>
                  </span>}
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="card-wrapper">No data available</div>
      )}
    </div>
  );
}