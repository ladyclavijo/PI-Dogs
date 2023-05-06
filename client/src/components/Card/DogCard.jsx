import React from "react";
// import { Link } from "react-router-dom";

const DogCard = ({name, image, temperaments, weight}) => { // me lo traigo por props

    let temps;
    if (typeof temperaments === "string") {
        temps = temperaments.split(", ");
        console.log(temps + "entré al if")
    } else { 
        temps = temperaments
        console.log(temperaments + "no entré al if")
    }


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
                return <p key={e.name ? e.name : e}>{e.name ? e.name : e}</p>
            })}
        </div>

        <div>
            <p className="card-text">Weight: {weight}</p>
        </div>
      </div>
    );
}

export default DogCard;