import React, { useEffect, useState } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";


export default function StarWarsGrid() {
    const [char, setChar] = useState([]);

    useEffect(() => {
        axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                const StarWarsImage = response.data
                console.log(StarWarsImage.results);
                setChar(StarWarsImage.results);
            });
    }, [])

    return (
        <div className="container">
        <div className="entry">
                {char.map(ind => {
                return <StarWarsCard
                   name = {ind.name}
                   height = {ind.height}
                   mass = {ind.mass} 
                />;
                })}
        </div>
      </div>
    );
}