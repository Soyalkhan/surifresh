import React from "react";
import "./Frozen.css";

const Frozenimages = [
  {
    id: 1,
    frontImage: "/src/assets/fr9.jpg",
    hoverImage: "/src/assets/fr9H.jpg",
    label: "Berry Delight",
  },
  {
    id: 2,
    frontImage: "/src/assets/fr8.jpg",
    hoverImage: "/src/assets/fr8H.jpg",
    label: "Apple",
  },
  {
    id: 3,
    frontImage: "/src/assets/fr7.jpg",
    hoverImage: "/src/assets/fr7H.avif",
    label: "Sugarcane",
  },
  {
    id: 4,
    frontImage: "/src/assets/fr3.jpg",
    hoverImage: "/src/assets/fr3H.jpg",
    label: "Pineapple",
  },
  {
    id: 5,
    frontImage: "/src/assets/fr1.jpg",
    hoverImage: "/src/assets/fr1H.jpg",
    label: "Valencia Orange",
  },
  {
    id: 6,
    frontImage: "/src/assets/fr2.jpg",
    hoverImage: "/src/assets/fr2H.avif",
    label: "Watermelon",
  },
  {
    id: 7,
    frontImage: "/src/assets/fr4.jpg",
    hoverImage: "/src/assets/fr4H.jpg",
    label: "Aamras",
  },
  {
    id: 8,
    frontImage: "/src/assets/fr6.jpg",
    hoverImage: "/src/assets/fr6H.avif",
    label: "Mango Chia",
  },
  {
    id: 9,
    frontImage: "/src/assets/fr5.jpg",
    hoverImage: "/src/assets/fr5H.jpg",
    label: "Aam Panna",
  },
];

const Frozen = () => {
  return (
    <div className="frozen-container">
      {/* Banner Section */}
      <div className="frozen-banner">
        <h1 className="frozen-title">Frozen Coldpressed Juice</h1>
      </div>

      {/* Cards Section */}
      <div className="frozen-grid">
        {Frozenimages.map((frozenImg) => (
          <div key={frozenImg.id} className="frozen-card">
            <div className="frozen-image-wrapper">
              <img
                src={frozenImg.frontImage}
                alt={frozenImg.label}
                className="frozen-image front"
              />
              <img
                src={frozenImg.hoverImage}
                alt={frozenImg.label}
                className="frozen-image hover"
              />
            </div>
            <div className="frozen-label">{frozenImg.label}</div>
          </div>
        ))}
      </div>


</div>


  );
};

export default Frozen;
