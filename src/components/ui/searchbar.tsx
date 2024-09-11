import styled from "styled-components";
import { useEffect} from "react";
import WeatherData from "../../services/services/api/weatherData";

const SearchBarStyle = styled.div`
 
    margin-top: 10px;
    input[type = text] {
        border-radius: 5px;
        padding: 3px 5px;
        font-size:15px;
    }
    button {
        height: 26px;
        border-radius: 1em;
        margin-left: 2px;
    }
`

export default function SearchBar(props: any) {
    const setWeatherData = props.WeatherDataSetter;
    const setFirstSearch = props.FirstSearchSetter;
    const locationState = props.LocationState;
    const cityNotFound = props.CityNotFound;
    const locationIndex = props.LocationIndex;

    useEffect(()=> {
        console.log(locationState.location);
    },[locationState.location])


    return(
        <SearchBarStyle>
            <input type="text" placeholder="search cities" value={locationState.location} onChange={e => locationState.setLocation(e.target.value)}/>
            <button onClick={async () => {
                if(locationState.location == '')
                    return;

                //in the index component's onclick, this onclick should set another boolean state
                //fetch geolocation api in here instead of WeatherData
                try{
                    setWeatherData(await WeatherData(locationState.location, 1));
                    if(cityNotFound.setCityNotFound) 
                        cityNotFound.setCityNotFound(false);
                    setFirstSearch(true);
                } catch(err) {
                    cityNotFound.setCityNotFound(true);
                }
            }}> 🔎 </button>
        </SearchBarStyle>
    )
} 