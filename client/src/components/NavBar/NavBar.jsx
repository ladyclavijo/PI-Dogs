import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div>
            <Link to="/">
                <div>Back</div>
            </Link>

            <Link to="/newDog">
                <div>New Doggy</div>
            </Link>
        </div>
    )
}

export default NavBar;