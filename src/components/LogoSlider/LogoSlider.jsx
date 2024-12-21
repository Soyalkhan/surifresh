import React from "react";
import "./LogoSlider.css";

const LogoSlider = () => {
  const images1 = [
    "/assets/2.avif",
    "/assets/3.avif",
    "/assets/4.avif",
    "/assets/5.avif",
    "/assets/6.avif",
    "/assets/1.avif",
    "/assets/7.avif",
    "/assets/8.avif",
  ];

  const images2 = [
    "/assets/9.avif",
    "/assets/10.avif",
    "/assets/11.avif",
    "/assets/12.avif",
    "/assets/13.avif",
    "/assets/14.avif",
    "/assets/15.avif",
    "/assets/16.avif",
  ];

  return (
    <div className="logo-slider-container">
      {/* Left-to-Right Slider */}
      <h2 className="Logo-slider-title" style={{textAlign:"Center"}}>OUR CLIENTS</h2>
      <div className="marquee left-to-right">
        <div className="marquee-track">
          {images1.map((src, index) => (
            <img key={index} src={src} alt={`Logo ${index + 1}`} />
          ))}
          {images1.map((src, index) => (
            <img key={`dup-${index}`} src={src} alt={`Logo ${index + 1}`} />
          ))}
        </div>
      </div>

      {/* Right-to-Left Slider */}
      <div className="marquee right-to-left">
        <div className="marquee-track">
          {images2.map((src, index) => (
            <img key={index} src={src} alt={`Logo ${index + 9}`} />
          ))}
          {images2.map((src, index) => (
            <img key={`dup-${index}`} src={src} alt={`Logo ${index + 9}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
