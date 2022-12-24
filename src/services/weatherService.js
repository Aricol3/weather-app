const API_KEY = 'fdb9ca7016324f7a9e0220805222312'
const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json?key='

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + infoType);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY});

    return fetch(url)
        .then((res) => res.json());
}

const formatCurrentWeather = (data) => {

}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather)
    return formattedCurrentWeather
}

export default getFormattedWeatherData;