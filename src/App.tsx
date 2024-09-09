import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GeoLocation from './services/services/api/geoLocationData'
import WeatherData from './services/services/api/weatherData'
import Weather from './components/weather'

function App() {

  return (
    <div className="App">
      <Weather/>
    </div>
  )
}

export default App

//geo api: https://geocoding-api.open-meteo.com/v1/search?name=Antioch -> longitude and latitude
//weather api: https://api.open-meteo.com/v1/forecast?latitude=38.0049&longitude=-121.8058&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,cloud_cover,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&forecast_days=1