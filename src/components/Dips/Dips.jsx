import React from "react";
import "./Dips.css";

const dipsData = [
  {
    id: 1,
    frontImage: "/src/assets/dip1.jpg",
    hoverImage: "/src/assets/dip1H.jpg",
    label: "Guacamole",
  },
  {
    id: 2,
    frontImage: "/src/assets/dip2.jpg",
    hoverImage: "/src/assets/dip2H.jpg",
    label: "Peri Peri Hummus",
  },
  {
    id: 3,
    frontImage: "/src/assets/dip3.avif",
    hoverImage: "/src/assets/dip3H.jpg",
    label: "Hummus",
  },
];

const Dips = () => {
  return (
    <div className="dips-container">
      {/* Banner Section */}
      <div className="dips-banner">
        <h1 className="dips-title">Dips</h1>
      </div>

      {/* Cards Section */}
      <div className="dips-grid">
        {dipsData.map((dip) => (
          <div key={dip.id} className="dip-card">
            <div className="dip-image-wrapper">
              <img
                src={dip.frontImage}
                alt={dip.label}
                className="dip-image front"
              />
              <img
                src={dip.hoverImage}
                alt={dip.label}
                className="dip-image hover"
              />
            </div>
            <div className="dip-label">{dip.label}</div>
          </div>
        ))}
      </div>


</div>


  );
};

export default Dips;




