import React from "react";
import "./Clientele.css";

const Clientele = () => {
  return (
    <div className="clientele-container">
      <h2 className="clientele-title">CLIENTELE</h2>
      <div className="clientele-grid">
        <div className="clientele-box">
          <h3>HORECA Industry</h3>
          <p>
            Tailored solutions for hotels, restaurants, and cafes, meeting their
            unique requirements.
          </p>
        </div>
        <div className="clientele-box">
          <h3>Airline Industry</h3>
          <p>Our juices grace the flights of Air India and Vistara.</p>
        </div>
        <div className="clientele-box">
          <h3>Corporates</h3>
          <p>
            We are also catering to corporates and have a subscription model
            designed for them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clientele;
