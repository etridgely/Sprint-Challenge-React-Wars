import React from "react";

const StarWarsCard = props => {
  // NOTE: The value given to setState() must be of the same type as your vale is expected to be
  return (
    <div className="star-wars-card " key={props.id}>
      <h2>{props.name}</h2>
      <p>Height: {props.height}</p>
      <p>Mass: {props.mass}</p>
    </div>
  );
};
export default StarWarsCard;