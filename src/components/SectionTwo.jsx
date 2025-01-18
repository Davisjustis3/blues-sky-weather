import { PopularLocations } from "./PopularLocations";

export function SectionTwo(props) {
  const {changeLocation, weatherData, popularLocations} = props
  
  
  return (
    <div id="popular-locations" className="popular-city-section">
      {<PopularLocations
          changeLocation={changeLocation}
          key={location.city}
          popularLocations={popularLocations}
          location={location.city}
          image={location.image}
          weatherData={weatherData}/>}
    </div>
  )
}