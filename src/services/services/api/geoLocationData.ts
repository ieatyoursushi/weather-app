import BaseFetch from "./apiBoilerplate";
export default async function GeoLocation(location: string) {
    const baseUrl = 'https://geocoding-api.open-meteo.com/v1/search?name=';
    return await BaseFetch(baseUrl + location);
}