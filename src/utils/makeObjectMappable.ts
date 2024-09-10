export default function MakeObjectMappable(data: object) {
    let propertyArray = Object.entries(data).map((attribute) => {
        //attribute syntax: [key, value]
        let key = Object.values(attribute)[0];
        let value = Object.values(attribute)[1];
        switch (key) {
            case "relative_humidity_2m":
                key = "humidity";
                break;
            case "surface_pressure":
                key = "pressure";
                break;
            case "apparent_temperature":
                key = "Real Feel";
                break;
            case "wind_speed_10m":
                key = "wind speed";
                break;
            case "cloud_cover":
                key = "cloud cover";
                break;
            // Add more cases if you need to modify other keys
            default:
                break;
        }

        if (key !== null) return { [key]: value };
        return null;
    }).filter((attribute) => {
        //attribute syntax: {key, value}
        const key = Object.keys(attribute!)[0];
        return key !== "time" && key !== "interval" && key !== "temperature_2m";
    });
    return propertyArray;
}