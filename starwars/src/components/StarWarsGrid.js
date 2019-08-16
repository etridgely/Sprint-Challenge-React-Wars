import React, { useEffect, useState } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";
import { Container } from 'semantic-ui-react'


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
        <Container className="container">
        <div className="entry">
                {char.map(ind => {
                return <StarWarsCard
                   name = {ind.name}
                   height = {ind.height}
                   mass = {ind.mass}
                   hair_color = {ind.hair_color}
                   eye_color= {ind.eye_color}
                   birth_year = {ind.birth_year} 
                />;
                })}
        </div>
      </Container>
    );
}