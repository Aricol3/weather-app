import {DateTime} from "luxon";

const API_KEY = 'fdb9ca7016324f7a9e0220805222312'
const BASE_URL = 'https://api.weatherapi.com/v1/forecast.json?key='

const getWeatherData = (searchParams) => {
    const url = new URL(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchParams}&days=5&aqi=no&alerts=no`);
    return fetch(url)
        .then((res) => res.json());
}

const formatCurrentWeather = (data) => {
    const {
        location: {name, region, country, lat, lon, tz_id, localtime_epoch},
        current: {temp_c, feelslike_c, humidity, wind_kph},

    } = data


    return {name, region, country, lat, lon, tz_id, localtime_epoch, temp_c, feelslike_c, humidity, wind_kph}
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(searchParams).then(formatCurrentWeather)
    return formattedCurrentWeather
}

const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'HH:mm") =>
    DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export default getFormattedWeatherData;

export {formatToLocalTime}