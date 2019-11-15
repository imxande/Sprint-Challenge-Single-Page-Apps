import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from './LocationCard';


export default function LocationsList() {
    const [ locations, setLocations ] = useState([]);

    useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location/')
        .then((response) => {
            setLocations(response.data.results);
        })
    }, []);

console.log(locations);
    return (
        <section className="location-list grid-view">
        {locations.map((item) => {
            return (
            <LocationCard key={item.name} name={item.name} dimension={item.dimension} />
            )
        })}
        </section>
    );
}
