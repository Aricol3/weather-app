import React from "react";

const TimeAndLocation = () => {
    return (
        <div>
            <div className="flex items-center justify-center my-6">
                <p className="text-white text-xl font-extra-light">
                    Saturday, 24 December | Local time: 17:21
                </p>
            </div>

            <div className="flex items-center justify-center my-3">
                <p className="text-white text-3xl font-medium">
                    Cluj-Napoca, RO
                </p>
            </div>
        </div>
    );
}

export default TimeAndLocation;