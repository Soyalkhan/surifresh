import React, { startTransition } from "react";
import "./Frozen.css";

const Frozenimages = [
  {
    id: 1,
    frontImage: "/assets/fr9.jpg",
    hoverImage: "/assets/fr9H.jpg",
    label: "Berry Delight",
  },
  {
    id: 2,
    frontImage: "/assets/fr8.jpg",
    hoverImage: "/assets/fr8H.jpg",
    label: "Apple",
  },
  {
    id: 3,
    frontImage: "/assets/fr7.jpg",
    hoverImage: "/assets/fr7H.avif",
    label: "Sugarcane",
  },
  {
    id: 4,
    frontImage: "/assets/fr3.jpg",
    hoverImage: "/assets/fr3H.jpg",
    label: "Pineapple",
  },
  {
    id: 5,
    frontImage: "/assets/fr1.jpg",
    hoverImage: "/assets/fr1H.jpg",
    label: "Valencia Orange",
  },
  {
    id: 6,
    frontImage: "/assets/fr2.jpg",
    hoverImage: "/assets/fr2H.avif",
    label: "Watermelon",
  },
  {
    id: 7,
    frontImage: "/assets/fr4.jpg",
    hoverImage: "/assets/fr4H.jpg",
    label: "Aamras",
  },
  {
    id: 8,
    frontImage: "/assets/fr6.jpg",
    hoverImage: "/assets/fr6H.avif",
    label: "Mango Chia",
  },
  {
    id: 9,
    frontImage: "/assets/fr5.jpg",
    hoverImage: "/assets/fr5H.jpg",
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

<marquee style={{}}>

      <h2>
      <span style={{color:"#ff8c00"}} className="green">Endless flavor options to enjoy! • </span>
      <span style={{color:"#8cd17d"}} className="orange">Endless flavor options to enjoy! • </span>
      <span style={{color:"#ff8c00"}} className="green">Endless flavor options to enjoy! • </span>
      <span style={{color:"#8cd17d"}} className="orange">Endless flavor options to enjoy! • </span>
      <span style={{color:"#ff8c00"}} className="green">Endless flavor options to enjoy! • </span>
      <span style={{color:"#8cd17d"}} className="orange">Endless flavor options to enjoy! • </span>
      <span style={{color:"#ff8c00"}} className="green">Endless flavor options to enjoy! • </span>
      <span style={{color:"#8cd17d"}} className="orange">Endless flavor options to enjoy! • </span>
      <span style={{color:"#ff8c00"}} className="green">Endless flavor options to enjoy! • </span>
      <span style={{color:"#8cd17d"}} className="orange">Endless flavor options to enjoy! • </span>
      <span style={{color:"#ff8c00"}} className="green">Endless flavor options to enjoy! • </span>
      <span style={{color:"#8cd17d"}} className="orange">Endless flavor options to enjoy! • </span>
      <span style={{color:"#ff8c00"}} className="green">Endless flavor options to enjoy! • </span>
      <span style={{color:"#8cd17d"}} className="orange">Endless flavor options to enjoy! • </span>
      <span style={{color:"#ff8c00"}} className="green">Endless flavor options to enjoy! • </span>
      <span style={{color:"#8cd17d"}} className="orange">Endless flavor options to enjoy! • </span>
      <span style={{color:"#ff8c00"}} className="green">Endless flavor options to enjoy! • </span>
      <span style={{color:"#8cd17d"}} className="orange">Endless flavor options to enjoy! • </span>
      <span style={{color:"#ff8c00"}} className="green">Endless flavor options to enjoy! • </span>
      <span style={{color:"#8cd17d"}} className="orange">Endless flavor options to enjoy! • </span>
      <span style={{color:"#ff8c00"}} className="green">Endless flavor options to enjoy! • </span>
      <span style={{color:"#8cd17d"}} className="orange">Endless flavor options to enjoy! • </span>
      <span style={{color:"#ff8c00"}} className="green">Endless flavor options to enjoy! • </span>
      <span style={{color:"#8cd17d"}} className="orange">Endless flavor options to enjoy! • </span>
      <span style={{color:"#ff8c00"}} className="green">Endless flavor options to enjoy! • </span>
      <span style={{color:"#8cd17d"}} className="orange">Endless flavor options to enjoy! • </span>
      <span style={{color:"#ff8c00"}} className="green">Endless flavor options to enjoy! • </span>
      <span style={{color:"#8cd17d"}} className="orange">Endless flavor options to enjoy! • </span>
      <span style={{color:"#ff8c00"}} className="green">Endless flavor options to enjoy! • </span>
      <span style={{color:"#8cd17d"}} className="orange">Endless flavor options to enjoy! • </span>
      <span style={{color:"#ff8c00"}} className="green">Endless flavor options to enjoy! • </span>
      <span style={{color:"#8cd17d"}} className="orange">Endless flavor options to enjoy! • </span>
      <span style={{color:"#ff8c00"}} className="green">Endless flavor options to enjoy! • </span>
      <span style={{color:"#8cd17d"}} className="orange">Endless flavor options to enjoy! • </span>
      <span style={{color:"#ff8c00"}} className="green">Endless flavor options to enjoy! • </span>
      <span style={{color:"#8cd17d"}} className="orange">Endless flavor options to enjoy! • </span>
      </h2>

</marquee>
      

</div>


  );
};

export default Frozen;
