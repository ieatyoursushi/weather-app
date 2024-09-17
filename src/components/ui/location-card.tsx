import styled from "styled-components";
import WeatherData from "../../services/services/api/weatherData";

const LocationCardWrapper = styled.article`
    border: 3px solid;
    border-radius:7px;
    margin-top: 5px;
    display: flex;
    justify-content: center;

`

export default function LocationCard(props: any) {
    const location = props.location;
    const isChoosingCityState = props.choosingCity; 
    const setWeatherData = props.setWeatherData;
    const setClickedIndex = props.setClickedIndex;
    const index = props.index; 

    return (
        <LocationCardWrapper onClick={async() => {
            console.log(`you clicked on location index ${index}`)
            try {
                setClickedIndex(index);
                setWeatherData(await WeatherData(location.latitude, location.longitude));
                isChoosingCityState.setIsChoosingCity(false);

            } catch(err) {

                console.log(err);
            }
        }}>
            <h3>{location.name}&nbsp; </h3>
            <h3>{location.admin1}&nbsp;</h3>
            <h3>{location.country_code}</h3>
        </LocationCardWrapper>
    )
}