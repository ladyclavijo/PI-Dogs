import "./searchBar.css";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDogName } from "../../redux/actions";

export default function SearchBar() {
    
    const dispatch = useDispatch();
    const [name, setName] = useState(""); // lo que tengo en el estado local "name", va a llegar a mi acción, 
    //que va a llamar al backend y le va a pasar lo que tengo en "name" que es lo que está tipeando el usuario

    function handleInput(e) {
        e.preventDefault();
        setName(e.target.value.toLowerCase());
    }

    function handleButton(e) {
        e.preventDefault();
        const searchDog = getDogName(name)
        dispatch(searchDog)
        setName("")
    }

    return (
        <div className="search-bar">
            <form>
                <div className="input-container">
                <input className="input-text" type="text"
                onChange={(e) => handleInput(e)}
                placeholder="Search a Dog ..."/>
                </div>

                <div className="button-container">
                <Link to={`/home?name=${name}`}>
                    <button className="search-button" type="submit" onClick={(e) => handleButton(e)}>Search</button>
                </Link>
                </div>
            </form>
        </div>
    )
};