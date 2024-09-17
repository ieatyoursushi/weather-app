import BaseFetch from "./apiBoilerplate";

export default async function WeatherData(latitude: number, longitude: number) {
    return await BaseFetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,surface_pressure,precipitation,cloud_cover,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&forecast_days=1`);
}