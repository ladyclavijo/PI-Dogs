import React from "react";
import { Link } from "react-router-dom";


const LandingPage = () => {
    return(
        <div className="landing-container">
            <h1 className="landing-header">DOGGYDEX!</h1>
                <Link to="/home">
                <button className="landing-button">Let's go!</button>
                </Link>

                <h3 className="footer-landing">Made by <a href="https://www.linkedin.com/in/ladyclavijo/" target="_blank" rel="noreferrer" className={StyleSheet.link}>Lady Clavijo</a></h3>
        </div>
    );
};

export default LandingPage;