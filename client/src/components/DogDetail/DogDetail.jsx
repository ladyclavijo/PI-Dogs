import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getDogId, clearDetail } from "../../redux/actions/index";
import Loading from "../Loading/Loading.jsx";

const DogDetail = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const dog = useSelector(state => state.dogDetail); //renderiza la info detallada del dog especifico
    const { name, temperament, height, weight, life_span, image} = dog;
    let {id} = useParams(); //useParams extrae los parámetros de la URL

    useEffect(() => {
        dispatch(getDogId(id)) //obtengo la info del dog
    }, []);

    const handleBack = () => {
        history.goBack();
    }

    const temps = dog?.temperament?.split(", ");
    
    if(dog) {
        return (
            <div className="container-detail">
                <div className="detail-image">
                    <img src={image} alt={name}/>
                </div>
                
                <div>
                    <p>Name: {name}</p>
                </div>
                
                <div className="detail-info">
                    <p>Life_span: {life_span}</p>
                    <p>Height: {height?.metric}</p>
                    <p>Weight: {weight?.metric}</p>
                </div>
    
                <div>
                    <p>Temperament: </p>
                    {temperament && temperament.length > 0 && (
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
        
    } else return <Loading/>
}

export default DogDetail;