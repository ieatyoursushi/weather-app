import Card from "./ui/card"
import WeatherCard from "./ui/weather-card"
import SearchBar from "./ui/searchbar"
import { useEffect, useState } from "react" 
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


    return (
        <WeatherWrapper>
            <SearchBar/>
            <WeatherCard city="Antioch" temperature="43°F" weather="Cloudy"/>
            <WeatherAttributes>
                <Card title="Humidity" result="58%"/>
                <Card title="Humidity" result="58%"/>
                <Card title="Humidity" result="58%"/>
                <Card title="Humidity" result="58%"/>
                <Card title="Humidity" result="58%"/>
                <Card title="Humidity" result="58%"/>
            </WeatherAttributes>
        </WeatherWrapper>

    )
}