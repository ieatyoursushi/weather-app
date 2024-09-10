const mainWeatherSchema = {
    latitude: null,
    longitude: null,
    generationtime_ms: null,
    utc_offset_seconds: null,
    timezone: null,
    timezone_abbreviation: null,
    elevation: null,
    current_units: {
      time: null,
      interval: null,
      temperature_2m: null,
      relative_humidity_2m: null,
      surface_pressure: null,
      apparent_temperature: null,
      precipitation: null,
      cloud_cover: null,
      wind_speed_10m: null
    },
    current: {
      time: null,
      interval: null,
      temperature_2m: null,
      relative_humidity_2m: null,
      surface_pressure: null,
      apparent_temperature: null,
      precipitation: null,
      cloud_cover: null,
      wind_speed_10m: null
    }
}
export default mainWeatherSchema;