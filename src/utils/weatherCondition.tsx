const weatherConditions = {
    RAIN: '🌧️',
    CLOUDY: '☁️',
    SUNNY_RAIN: '🌦️',
    PARTIALLY_CLOUDY: '⛅️',
    SUNNY: '☀️',
    LIGHT_RAIN:'💧'
}

export default function WeatherCondition(precipitation: number, cloud_cover: number): string {
        const partiallyCloudy: boolean = cloud_cover >= 25 && cloud_cover < 75;
        const rainy: boolean = precipitation >= 1;
        const sunny: boolean = cloud_cover < 25;
        const cloudy: boolean = cloud_cover > 75;
        const lightRain: boolean = precipitation > 0 && precipitation < 1;

        if((rainy && partiallyCloudy) || lightRain) {
            return weatherConditions.SUNNY_RAIN;
        }
        if(rainy) 
            return weatherConditions.RAIN;
        if(partiallyCloudy) 
            return weatherConditions.PARTIALLY_CLOUDY;
        if(cloudy)
            return weatherConditions.CLOUDY;
        if(sunny)
            return weatherConditions.SUNNY;
        return '';
}