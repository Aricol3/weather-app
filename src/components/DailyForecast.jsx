import React from "react";
import {DateTime} from "luxon";

const DailyForecast = ({weather: {forecastday}}) => {
    return (
        <div>
            <div className="flex items-center justify-start mt-6 ">
                <p className="text-white font-medium uppercase">daily forecast</p>
            </div>
            <hr className="my-2"/>

            <div className="flex flex-wrap gap-10 items-center text-white">
                {
                    // eslint-disable-next-line array-callback-return
                    forecastday.map((dailyWeather) => {
                        return (
                            <div className="flex flex-col items-center justify-center">
                                <p className="font-medium text-sm">{DateTime.fromSeconds(dailyWeather['date_epoch']).toFormat('cccc')}</p>
                                <img src={dailyWeather['day']['condition']['icon']} className="w-12 my-1" alt="weather logo"/>
                                <div className="flex gap-2">
                                <p className="font-medium">{`${dailyWeather['day']['maxtemp_c'].toFixed()}°C`}</p>
                                <p className="font-light">{`${dailyWeather['day']['mintemp_c'].toFixed()}°C`}</p>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    );
}

export default DailyForecast;