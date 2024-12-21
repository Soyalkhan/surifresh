import React, { useEffect, useState } from "react";
import "./HeroSlider.css";

const images = [
  "/assets/b1.avif",
  "/assets/b2.avif",
  "/assets/b3.avif",
  "/assets/b4.avif",
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4-second interval

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="hero-slider">
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
              {/* Overlay Text */}
              {/* <div className="text-overlay">
                <h2>Dips</h2>
                <p>Available in 3 Different Flavours</p>
                <button>Know More</button>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Middle Paragraph */}
      <div className="container-para">
      <div className="middle-paragraph">
        Surifresh Extract Ltd. stands at the forefront of India's fruit
        industry, specializing in the distribution, import, and manufacturing of
        premium fresh produce, with a spotlight on cold-pressed juices and
        culinary delights.
      </div>
      </div>
     
    </>
  );
};

export default HeroSlider;
