import BaseFetch from "./apiBoilerplate";
export default async function GeoLocation(location: string) {
    const baseUrl = 'https://geocoding-api.open-meteo.com/v1/search?name=';
    const data = await BaseFetch(baseUrl + location);
    if(data.results == null) {
        throw new Error("location not found");
    }
    return  data;
}