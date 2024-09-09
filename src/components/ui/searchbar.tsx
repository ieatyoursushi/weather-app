import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
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
    const [location, setLocation] = useState('')
    const [weatherData, setWeatherData] = useState({});
    const isFirstRender: React.MutableRefObject<boolean> = useRef<boolean>(true); 

    useEffect(()=> {
        console.log(location);
    },[location])
    useEffect(() => {
        if(isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        console.log(weatherData);
    },[weatherData])

    return(
        <SearchBarStyle>
            <input type="text" placeholder="search city" value={location} onChange={e => setLocation(e.target.value)}/>
            <button onClick={async () => {
                if(location == '')
                    return;
                setWeatherData(await WeatherData(location));
            }}> 🔎 </button>
        </SearchBarStyle>
    )
} 