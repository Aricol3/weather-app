import React from "react";

const TopButtons = ({setQuery}) => {
    const cities = [
        {
            id: 1,
            name: 'Cluj-Napoca'
        },
        {
            id: 2,
            name: 'Bucuresti'
        },
        {
            id: 3,
            name: 'Brasov'
        },
        {
            id: 4,
            name: 'Sibiu'
        },
        {
            id: 5,
            name: 'Timisoara'
        },
    ]

    return (
        <div className="flex flex-wrap gap-3 items-center justify-around my-6">
            {cities.map((city) => (
                <button key={city.id} className="text-white text-lg font-medium"
                        onClick={() => setQuery(city.name)}>{city.name}</button>
            ))}
        </div>
    );
}

export default TopButtons;