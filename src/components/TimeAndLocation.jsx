import React from "react";
import {formatToLocalTime} from "../services/weatherService";

const TimeAndLocation = ({weather: {localtime_epoch, tz_id, name, country}}) => {
    return (
        <div>
            <div className="flex items-center justify-center my-6">
                <p className="text-white text-xl font-extra-light">
                    {formatToLocalTime(localtime_epoch, tz_id)}
                </p>
            </div>

            <div className="flex items-center justify-center my-3">
                <p className="text-white text-3xl font-medium">
                    {`${name}, ${country}`}
                </p>
            </div>
        </div>
    );
}

export default TimeAndLocation;