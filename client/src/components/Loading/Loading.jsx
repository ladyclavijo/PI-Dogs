import "./loading.css";
import React from "react";


const Loading = () => {
    return(
        <div className="spinner">
          <div className="spinner1">
          {/* <img src={Loading} alt="no image"/> */}
          <h3>Loading...</h3>
          </div>
        </div>
    )
};

export default Loading;