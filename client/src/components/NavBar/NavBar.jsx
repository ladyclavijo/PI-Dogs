import "./navBar.css";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="navbar">
            <div className="backToLanding">
            <Link to="/">
                <div className="button">Back</div>
            </Link>
            </div>

            <div className="createDog">
            <Link to="/newDog">
                <div className="button">New Doggy</div>
            </Link>
            </div>
        </div>
    )
}

export default NavBar;