import "./card.css";
import React from "react";
// import { Link } from "react-router-dom";

const DogCard = ({name, image, life_span, temperaments, height, weight}) => { // me lo traigo por props

    let temps;
    if (typeof temperaments === "string") {
        temps = temperaments.split(", ");
        // console.log(temps + "entré al if")
    } else { 
        temps = temperaments
        // console.log(temperaments + "no entré al if")
    }

    return (
      <div className="container-card">
        <div className="container-image">      
        <img className="container-image__img" src={image} alt= "img not found"/>
        </div>

        <div className="info-card">
            <p className="card-title">{name}</p>
        
        <div className="middle-cards">

            <p className="card-text">Life_span: {life_span}</p>
            <p className="card-text">Height: {height}</p>
            <p className="card-text">Weight: {weight}</p>
        </div>

        <div className="temperaments-div">
            <p className="temps-title">Temperaments: </p>
            {temps?.map(e => {
                return <p className="temps" key={e.name ? e.name : e}>{e.name ? e.name : e}</p>
            })}
        </div>

        </div>
      </div>
    );
}

export default DogCard;