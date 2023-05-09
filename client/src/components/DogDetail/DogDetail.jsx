import "./dogDetail.css"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getDogId, clearDetail } from "../../redux/actions/index";
import Loading from "../Loading/Loading.jsx";

const DogDetail = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const dog = useSelector(state => state.dogDetail); //renderiza la info detallada del dog especifico
    const { name, temperaments, height, weight, life_span, image} = dog;
    
    let {id} = useParams(); //useParams extrae los parámetros de la URL

    useEffect(() => {
        dispatch(getDogId(id)) //obtengo la info del dog
        return () => {
            dispatch(clearDetail()) //le paso un return cuando se desmonta
        }
    }, [dispatch, id]);

    const handleBack = () => {
        history.goBack();
    }

    let temps;
    if (typeof temperaments === "string"){
        temps = temperaments.split(", ");
    } else {
        temps = temperaments
    }
    
    if(dog.hasOwnProperty("name")) {
        return (

            <div className="container-detail">

                <div className="detail-image">
                    <img src={dog.image} alt={name}/>
                </div>
                
                <div>
                    <p>Name: {name}</p>
                </div>
                
                <div className="detail-info">
                    <p>Life span: {life_span}</p>
                    <p>Height: {height?.metric ? height?.metric : height}</p>
                    <p>Weight: {weight?.metric ? weight?.metric : weight}</p>
                </div>
    
                <div className="detail-temps">
                    <p>Temperament: </p>
                    {temperaments && temperaments?.length > 0 && (
                        <ul className="lista">
                            {temps?.map(t => {
                                return(
                                    <li key={t.name ? t.name : t}>{t.name ? t.name : t}</li>
                                )
                            })}
                        </ul>
                    )}
                </div>
                
                <button onClick={handleBack}>BACK</button>
            </div>
        )
        } else return <Loading></Loading> 
}

export default DogDetail;