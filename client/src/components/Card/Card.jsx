import React from "react";
import { Link } from "react-router-dom";


const DogCard = ({id, name, image, temperament, weight}) => {
    return (
        <div className="container-card">
        <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <Link to={`/dogs/${id}`}>
        <img className="card-img-top" src={image} alt= "img not found"/>
        </Link>
        <p className="card-text">Temperament: {temperament}</p>
        <p className="card-text">Weight: {weight}</p>
        </div>
        </div>
    );
}

export default DogCard;