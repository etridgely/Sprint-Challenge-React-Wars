import React from "react";
import { Card} from 'semantic-ui-react'

const StarWarsCard = props => {
  // NOTE: The value given to setState() must be of the same type as your vale is expected to be
  return (
    <div className="star-wars-div" key={props.id}>
        <Card className="star-wars-card"> 
            <Card.Content header={props.name} />
            <Card.Content>
                <p>Height: {props.height}</p>
                <p>Mass: {props.mass}</p>
                <p>Hair Color: {props.hair_color}</p>
                <p>Eye Color: {props.eye_color}</p>
                <p>Birth Year: {props.birth_year}</p>
            </Card.Content>
        </Card>
    </div>
  );
};
export default StarWarsCard;