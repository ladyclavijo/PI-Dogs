import "./Loading.css";
import React from "react";


const Loading = () => {
  return (

    <div className="loading-container">
      <div className="loader">
        <p className="heading">Loading...</p>

        <div className="loading">
          <div className="load"></div>
          <div className="load"></div>
          <div className="load"></div>
          <div className="load"></div>
        </div>
      </div>

    </div>
  )
};




export default Loading;