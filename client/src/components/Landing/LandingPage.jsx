import "./landing.css";
import React from "react";
import { Link } from "react-router-dom";


const LandingPage = () => {
    return(
        <div className="landing-container">

          <div className="middle-landing-container">

            <div className="header-container">
                <div className="gif-container"> </div>
            </div>


            <div className="title-container">
            <h1 className="landing-title">DOGGYDEX!</h1>
            </div>

            <div className="button-container">
                <Link to="/home">
                <button className="landing-button">Let's go!</button>
                </Link>
            </div>

          </div>

            <div className="footer-container">
                <h3 className="footer-landing">Made by <a href="https://github.com/ladyclavijo" target="_blank" rel="noreferrer" className={StyleSheet.link}>Lady Clavijo</a></h3>
            </div>

        </div>
    );
};

export default LandingPage;