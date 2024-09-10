import Card from "./ui/card"
import WeatherCard from "./ui/weather-card"
import SearchBar from "./ui/searchbar"
import { useEffect, useState, useRef } from "react" 
import styled from "styled-components"
const WeatherWrapper = styled.div`
    font-family: sans-serif;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(194,252,252,1) 0%, rgba(0,212,255,1) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    border-radius: 5px;
 
`
const WeatherAttributes = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    padding: 10px;
    width: 450px;
`
export default function Weather() {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState({
        latitude: null,
        longitude: null,
        generationtime_ms: null,
        utc_offset_seconds: null,
        timezone: null,
        timezone_abbreviation: null,
        elevation: null,
        current_units: {
          time: null,
          interval: null,
          temperature_2m: null,
          relative_humidity_2m: null,
          surface_pressure: null,
          apparent_temperature: null,
          precipitation: null,
          cloud_cover: null,
          wind_speed_10m: null
        },
        current: {
          time: null,
          interval: null,
          temperature_2m: null,
          relative_humidity_2m: null,
          surface_pressure: null,
          apparent_temperature: null,
          precipitation: null,
          cloud_cover: null,
          wind_speed_10m: null
        }
    });
    const isFirstRender = useRef<boolean>(true);
    const [firstSearch, setFirstSearch] = useState(false);

    useEffect(() => {
        if(isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        console.log(weatherData);
        console.log(weatherAttributes);
    },[weatherData])
    
    const updateWeatherState = (newObject: any) => {
        setWeatherData(newObject);
    }
    
    const weatherAttributes = Object.entries(weatherData.current).map((attribute) => {
        //attribute syntax: [key, value]
        let key = Object.values(attribute)[0];
        let value = Object.values(attribute)[1];
        switch (key) {
            case "relative_humidity_2m":
                key = "humidity";
                break;
            case "surface_pressure":
                key = "pressure";
                break;
            case "apparent_temperature":
                key = "Real Feel";
                break;
            // Add more cases if you need to modify other keys
            default:
                break;
        }

        if (key !== null) return { [key]: value };
        return null;
    }).filter((attribute) => {
        //attribute syntax: {key, value}
        const key = Object.keys(attribute!)[0];
        return key !== "time" && key !== "interval" && key !== "temperature_2m";
    });
    const weatherAttributeUnits = Object.entries(weatherData.current_units).map((attribute) => {
        //attribute syntax: [key, value]
        let key = Object.values(attribute)[0];
        let value = Object.values(attribute)[1];
        switch (key) {
            case "relative_humidity_2m":
                key = "humidity";
                break;
            case "surface_pressure":
                key = "pressure";
                break;
            case "apparent_temperature":
                key = "Real Feel";
                break;
            // Add more cases if you need to modify other keys
            default:
                break;
        }

        if (key !== null) return { [key]: value };
        return null;
    }).filter((attribute) => {
        //attribute syntax: {key, value}
        const key = Object.keys(attribute!)[0];
        return key !== "time" && key !== "interval" && key !== "temperature_2m";
    });
    //use utilities to dynamically fill emojis like cold to hot emoji
    const emojis = ['💧','🔎','😡','🌧️','☁️','💨'];

    //components in brackets should not have state
    return (
        <WeatherWrapper>
            <SearchBar LocationState={{location, setLocation}} WeatherDataSetter={updateWeatherState} FirstSearchSetter={(value: any) => setFirstSearch(value)}/>
            {firstSearch ?
            <>
                <WeatherCard city={location} temperature={weatherData.current.temperature_2m! + weatherData.current_units.temperature_2m} weather="image attribute (in progress)"/>
                <WeatherAttributes>
                    {weatherAttributes.map((attribute, index) => 
                        <Card title={Object.keys(attribute!)[0]} result={Object.values(attribute!)[0]! + Object.values(weatherAttributeUnits[index]!) +" " +  emojis[index]}/>
                    )}
                </WeatherAttributes>
            </> : <h1> Enter City Name </h1>
            }
 
        </WeatherWrapper>

    )
}