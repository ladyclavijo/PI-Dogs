import React from "react";


const Loading = () => {
    return(
        <div className="spinner"> 
        <div className="spinner1"></div>
        <img src={Loading} alt="no image"/>
        <h3>Loading...</h3>
        </div>
    )
};

export default Loading;