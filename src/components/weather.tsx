import Card from "./ui/card"
import WeatherCard from "./ui/weather-card"
import SearchBar from "./ui/searchbar"
import { useEffect, useState, useRef } from "react" 
import styled from "styled-components"
import MakeObjectMappable from "../utils/makeObjectMappable"
import mainWeatherSchema from "../utils/apiSchemas/weatherCondition"
import WeatherCondition from "../utils/weatherCondition"
import geoLocationSchema from "../utils/apiSchemas/geoLocations"
import LocationsIndex from "./locationsIndex";
const WeatherAttributes = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    padding: 10px;
    width: 450px;
    @media(max-width: 450px) {
        grid-template-columns: repeat(2, 1fr);
        width: 80%;
    }
`
const WeatherWrapper = styled.div`
    font-family: sans-serif;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(194,252,252,1) 0%, rgba(0,212,255,1) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    border-radius: 5px;
    @media(max-width: 800px) {
        width: 100%;
    } 
`
export default function Weather() {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(mainWeatherSchema);
    const [cityNotFound, setCityNotFound] = useState(false);
    const [locations, setLocations] = useState(geoLocationSchema);
    const [isChoosingCity, setIsChoosingCity] = useState(false);
    const [clickedIndex, setClikedIndex] = useState(0);
    const [firstSearch, setFirstSearch] = useState(false);
    const isFirstRender = useRef<boolean>(true);
    
    useEffect(() => {
        if(isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        console.log(locations);
        console.log(weatherAttributes);
    },[locations])

    const weatherAttributes = MakeObjectMappable(weatherData.current);
    const weatherAttributeUnits = MakeObjectMappable(weatherData.current_units);
    //use utilities to dynamically fill emojis like cold to hot emoji
    const emojis = ['💧','🔎','😡','🌧️','☁️','💨'];

    //components in brackets should not have state
    return (
        <WeatherWrapper>
            <SearchBar ChoosingLocation={{isChoosingCity, setIsChoosingCity}} SetLocation={(value: any) => setLocations(value)} CityNotFound={{cityNotFound, setCityNotFound}} LocationState={{location, setLocation}}  FirstSearchSetter={(value: boolean) => setFirstSearch(value)}/>
            {firstSearch ?
            <>
                {isChoosingCity ?
                    <LocationsIndex setClickedIndex={(value: number) => setClikedIndex(value)} locations={locations} choosingCity={{isChoosingCity, setIsChoosingCity}} setWeatherData={(value: any) => setWeatherData(value)}/> :
                <>
                    {cityNotFound ? 
                        <h1 style={{color: "red"}}>City Not Found</h1> : 
                    <>
                        <WeatherCard city={locations.results[clickedIndex].name +" "+ (locations.results[clickedIndex].admin1 != null ? locations.results[clickedIndex].admin1 : "")} temperature={weatherData.current.temperature_2m! + weatherData.current_units.temperature_2m} weather={WeatherCondition(weatherData.current.precipitation!, weatherData.current.cloud_cover!)}/>
                        <WeatherAttributes>
                            {weatherAttributes.map((attribute, index) => 
                                <Card title={Object.keys(attribute!)[0]+" " +  emojis[index]} result={Object.values(attribute!)[0]! + Object.values(weatherAttributeUnits[index]!) } key={index}/>
                            )}
                        </WeatherAttributes>
                    </>
                    }
                </>
                }

            </> 
            
            : <h1> Enter City Name </h1>
            }
 
        </WeatherWrapper>

    )
}