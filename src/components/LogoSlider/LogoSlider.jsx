import React from "react";
import "./LogoSlider.css";

const LogoSlider = () => {
  const images1 = [
    "src/assets/1.avif",
    "src/assets/2.avif",
    "src/assets/3.avif",
    "src/assets/4.avif",
    "src/assets/5.avif",
    "src/assets/6.avif",
    "src/assets/7.avif",
    "src/assets/8.avif",
  ];

  const images2 = [
    "src/assets/9.avif",
    "src/assets/10.avif",
    "src/assets/11.avif",
    "src/assets/12.avif",
    "src/assets/13.avif",
    "src/assets/14.avif",
    "src/assets/15.avif",
    "src/assets/16.avif",
  ];

  return (
    <div className="logo-slider-container">
      {/* Left-to-Right Slider */}
      <h2 className="Logo-slider-title" style={{textAlign:"Center"}}>OUR PARTNERS</h2>
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
