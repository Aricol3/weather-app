import React from "react";
import {DateTime} from "luxon";

const HourlyForecast = ({weather: {forecastday}}) => {
    return (
        <div>
            <div className="flex items-center justify-start mt-6 ">
                <p className="text-white font-medium uppercase">hourly forecast</p>
            </div>
            <hr className="my-2"/>

            <div className="flex flex-wrap gap-10 items-center text-white">
                {
                    // eslint-disable-next-line array-callback-return
                    forecastday[0]['hour'].map((hourlyWeather, index) => {
                        if (index % 3 === 0) {
                            return (
                                <div className="flex flex-col items-center justify-center">
                                    <p className="font-light text-sm">{DateTime.fromSeconds(hourlyWeather['time_epoch']).toFormat('HH:mm')}</p>
                                    <img src={hourlyWeather['condition']['icon']} className="w-12 my-1" alt="weather logo"/>
                                    <p className="font-medium">{`${hourlyWeather['temp_c'].toFixed()}°C`}</p>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    );
}

export default HourlyForecast;