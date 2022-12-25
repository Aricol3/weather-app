import './App.css';
import TopButtons from "./components/TopButtons";
import SearchBar from "./components/SearchBar"
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import HourlyForecast from "./components/HourlyForecast";
import getFormattedWeatherData from "./services/weatherService";
import {useEffect, useState} from "react";
import DailyForecast from "./components/DailyForecast";

function App() {
    const [query, setQuery] = useState('cluj-napoca')
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData(query).then((data) => {
                setWeather(data);
            });
        }

        fetchWeather();
    }, [query])

    return (
        <div
            className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
            <TopButtons setQuery={setQuery}/>
            <SearchBar setQuery={setQuery}/>

            {weather && (
                <div>
                    <TimeAndLocation weather={weather}/>
                    <TemperatureAndDetails weather={weather}/>
                    <HourlyForecast weather={weather}/>
                    <DailyForecast weather={weather}/>
                </div>
            )}
        </div>
    );
}

export default App;
