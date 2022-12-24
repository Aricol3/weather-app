import React, {useState} from "react";
import {UilSearch, UilLocationPoint} from "@iconscout/react-unicons";

const SearchBar = ({setQuery}) => {
    const [city, setCity] = useState('');

    const handleSearchClick = () => {
        if (city !== '') setQuery(city)
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                setQuery(`${lat},${lon}`);
                console.log(setQuery)
            });
        }
    };

    return (
        <div className="flex flex-row justify-center my-6">
            <div className="flex flex-row items-center justify-center space-x-4 mx-4">
                <input value={city} onChange={(e) => setCity(e.currentTarget.value)}
                       type="text" placeholder="Search for a city"
                       className="text-xl font-light p-2 focus:outline-none capitalize placeholder:lowercase"/>
                <UilSearch onClick={handleSearchClick} size={25}
                           className="text-white cursor-pointer transition ease-out hover:scale-125"/>
                <UilLocationPoint onClick={handleLocationClick} size={25}
                                  className="text-white cursor-pointer transition ease-out hover:scale-125"/>
            </div>
        </div>
    );
}

export default SearchBar;