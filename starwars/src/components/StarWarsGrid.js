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
                <StarWarsCard
                   name = {char.name}
                   height = {char.height} 
                />
        </div>
      </div>
    );
}