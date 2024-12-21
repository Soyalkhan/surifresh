import React from "react";
import "./MarqueeProduct.css";

// Import images
import p1 from "/src/assets/p1.png";
import p2 from "/src/assets/p2.png";
import p3 from "/src/assets/p3.png";
import p4 from "/src/assets/p4.png";
import p5 from "/src/assets/p5.png";
import p6 from "/src/assets/p6.png";
import p7 from "/src/assets/p7.png";
import p8 from "/src/assets/p8.png";
import p9 from "/src/assets/p9.png";
import p10 from "/src/assets/p10.png";
import p11 from "/src/assets/p11.png";
import p12 from "/src/assets/p12.png";
import p13 from "/src/assets/p13.png";
import p14 from "/src/assets/p14.png";
import p15 from "/src/assets/p15.png";
import p16 from "/src/assets/p16.png";
import p17 from "/src/assets/p17.png";

// Array of imported images
const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17];

const MarqueeProduct = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-wrapper">
        {/* Render images twice to create a seamless effect */}
        {images.concat(images).map((image, index) => (
          <div className="marquee-item" key={index}>
            <img src={image} alt={`Product ${index % images.length + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeProduct;
