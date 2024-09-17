import styled from "styled-components";
const WeatherCardStyle = styled.div`
    text-align: center;
    h2 {
        font-size: 40px;
        margin: 0; margin-bottom: 5px;
    }
    h1 {
        margin-bottom: 15px;
    }

`

export default function WeatherCard(props: any) {
    let city: string = props.city;
    let temperature: string = props.temperature;
    let weather: string = props.weather;

    return(
        <WeatherCardStyle>
            <h4> {city} {new Date().getMonth() + 1}/{new Date().getDate()} </h4>
            <h1> {temperature} </h1>
            <h2> {weather} </h2>
        </WeatherCardStyle>
    )
}