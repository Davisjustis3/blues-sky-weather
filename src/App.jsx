import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TodaysWeather } from './components/TodaysWeather';
import axios from 'axios';
import { SectionTwo } from './components/SectionTwo';
import { useEffect, useState } from "react"
import { ArtistMonth } from './components/ArtistMonth';
import { Footer } from './components/Footer';

function App() {
  const [weatherData, setWeatherData] = useState({})
  const [location, setLocation] = useState(localStorage.getItem("Location") || 'Warsaw')
  const changeLocation = (newLocation) => {
    setLocation(newLocation);
  }
  const apiKey = '5b47535472ad45dbb5b00954251001'
  const apiURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=1&hourly=1`
  const popularLocations = [
    { city: 'Paris', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { city: 'New York', image: 'https://images.unsplash.com/photo-1503853585905-d53f628e46ac?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { city: 'Tokyo', image: 'https://images.pexels.com/photos/30159614/pexels-photo-30159614/free-photo-of-orange-train-crossing-urban-bridge-in-cityscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { city: 'Buenos Aires', image: 'https://images.unsplash.com/photo-1694560446249-240043f487bc?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { city: 'Lagos', image: 'https://images.pexels.com/photos/30187862/pexels-photo-30187862/free-photo-of-elegant-woman-relaxing-on-lagos-beach-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {
      city: 'Beijing', image: 'https://images.pexels.com/photos/2844316/pexels-photo-2844316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { city: 'Toronto', image: 'https://images.unsplash.com/photo-1484446792163-1319e6f7a38f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { city: 'Mexico City', image: 'https://images.pexels.com/photos/12179305/pexels-photo-12179305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { city: 'Cape Town', image: 'https://images.pexels.com/photos/2316746/pexels-photo-2316746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { city: 'Vienna', image: 'https://images.pexels.com/photos/161074/vienna-st-charles-s-church-downtown-church-161074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { city: 'Dubai', image: 'https://images.pexels.com/photos/356286/pexels-photo-356286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { city: 'New Delhi', image: 'https://images.unsplash.com/photo-1598328195371-16d7ba4df37f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ldyUyMGRlbGhpfGVufDB8fDB8fHwy' }]
  
  const [ error, setError ] = useState('') 
  const fetchWeather = async () => {

    try {
      const response = await axios.get(apiURL)
      setWeatherData(response.data)
      setError('')
    } catch (error) {
      console.error('Problem retrieving data:', error)
      setError('Error retreiving weather data. Please try again.');
      setWeatherData(null);
    }
  }
  
  useEffect(() => {
    console.log('Location updated:', location)
    const storedLocation = localStorage.getItem("Location");
    if (storedLocation) {
      setLocation(storedLocation); // Set state based on local storage
    }
    fetchWeather()
    
  }, [location])

  return (
    <>
      <Navbar
        fetchWeather={fetchWeather}
        changeLocation={changeLocation}
      />
      <Hero
        fetchWeather={fetchWeather}
        location={location}
        popularLocations={popularLocations}
        weatherData={weatherData}
        setWeatherData={setWeatherData}
        apiURL={apiURL}
        apiKey={apiKey}
         />
      <SectionTwo
        weatherData={weatherData}
        popularLocations={popularLocations} />
      <ArtistMonth />
      <Footer/>
    </>
  )
}
export default App