import styled from "styled-components"
import LocationCard from "./ui/location-card";

const LocationsIndexStyle = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom:12px;
    margin-top: 12px;
    width: 60%;
    @media(max-width: 625px) {
        width: 85%;
    }
`
export default function LocationsIndex(props: any) {
    const locations = props.locations.results;      
    const choosingCityState = props.choosingCity;
    const weatherDataSetter = props.setWeatherData;
    const setClickedIndex = props.setClickedIndex;

    return (
        <LocationsIndexStyle>
            {locations.map((location: any, i: number) => {
                return <LocationCard setClickedIndex={setClickedIndex} location={location} setWeatherData={weatherDataSetter} choosingCity={choosingCityState} index={i} key={location.id}/>
            })}{}
        </LocationsIndexStyle>
    )
}