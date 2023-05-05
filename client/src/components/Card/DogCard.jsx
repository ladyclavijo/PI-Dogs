import React from "react";
// import { Link } from "react-router-dom";

const DogCard = ({id, name, image, temperament, weight}) => { // me lo traigo por props

    const temps = temperament?.split(", ");

    return (
      <div className="container-card">
        <div className="container-image">      
        <img className="container-image__img" src={image} alt= "img not found"/>
        </div>

        <div className="container-info">
            {/* <p className="card-text">ID: {id}</p> */}
            <p className="card-text">Name: {name}</p>
        </div>

        <div className="temperaments-div">
            <p>Temperaments: </p>
            {temps?.map(e => {
                return <p key={e}>{e}</p>
            })}
        </div>

        <div>
            <p className="card-text">Weight: {weight}</p>
        </div>
      </div>
    );
}

export default DogCard;