import React from "react";
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";

const TemperatureAndDetails = ({weather:{temp_c,feelslike_c, humidity, wind_kph}}) => {
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>Cloudy</p>
            </div>

            <div className="flex flex-row items-center justify-evenly space-x-2 text-white py-3">
                <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="weather image" className="w-20"/>

                <p className="text-5xl">
                    {`${temp_c.toFixed()}°C`}
                </p>

                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className="mr-1"/>
                        Feels like:
                        <span className="font-medium ml-1">{`${feelslike_c.toFixed()}°C`}</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={18} className="mr-1"/>
                        Humidity:
                        <span className="font-medium ml-1">{`${humidity}%`}</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWind size={18} className="mr-1"/>
                        Wind:
                        <span className="font-medium ml-1">{`${wind_kph.toFixed()}km/h`}</span>
                    </div>
                </div>

            </div>

            <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
                <UilSun/>
                <p className="font-light">Rise: <span className="font-medium ml-1">06:12</span></p>
                <p className="font-light">|</p>

                <UilSunset/>
                <p className="font-light">Set: <span className="font-medium ml-1">17:10</span></p>
                <p className="font-light">|</p>

                <UilArrowUp/>
                <p className="font-light">High: <span className="font-medium ml-1">11°C</span></p>
                <p className="font-light">|</p>

                <UilArrowDown/>
                <p className="font-light">Low: <span className="font-medium ml-1">-3°C</span></p>
                <p className="font-light">|</p>
            </div>
        </div>
    );
}

export default TemperatureAndDetails;