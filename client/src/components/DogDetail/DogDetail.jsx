import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getDogId, clearDetail } from "../../redux/actions/index";

const CardDetail = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const dog = useSelector(state => state.dog); //renderiza la info detallada del dog especifico
    
    const { name, temperament, height, weight, life_span } = dog;
    let {id} = useParams(); //useParams extrae los parámetros de la URL

    useEffect(() => {
        dispatch(getDogId(id)) //obtengo la info del dog
        return () => {
            dispatch(clearDetail())
        }
    }, [dispatch, id]);

    const handleBack = () => {
        history.goBack();
    }

    return (
        <div className="container-detail">
            <div className="detail-image">
                <img src={dog.image} alt="no image"/>
            </div>
            
            <div>
                <p>Name: {name}</p>
            </div>
            
            <div className="detail-info">
                <p>Life_span: {life_span}</p>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
            </div>

            <div>
                <p>Temperament: </p>
                {temperament && temperament.length > 0 && (
                    <ul className="lista">
                        {temperament?.map(t => {
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
}

export default CardDetail;