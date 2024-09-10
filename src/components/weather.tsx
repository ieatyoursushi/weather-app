import Card from "./ui/card"
import WeatherCard from "./ui/weather-card"
import SearchBar from "./ui/searchbar"
import { useEffect, useState, useRef } from "react" 
import styled from "styled-components"
import MakeObjectMappable from "../utils/makeObjectMappable"
import mainWeatherSchema from "../utils/apiSchemas"

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
    
    const weatherAttributes = MakeObjectMappable(weatherData.current);
    const weatherAttributeUnits = MakeObjectMappable(weatherData.current_units);
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
                        <Card title={Object.keys(attribute!)[0]+" " +  emojis[index]} result={Object.values(attribute!)[0]! + Object.values(weatherAttributeUnits[index]!) }/>
                    )}
                </WeatherAttributes>
            </> : <h1> Enter City Name </h1>
            }
 
        </WeatherWrapper>

    )
}