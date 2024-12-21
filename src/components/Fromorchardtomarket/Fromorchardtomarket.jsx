import React from "react";
import "./Fromorchardtomarket.css";
import bannerimage1 from '/src/assets/fcmbanner1.avif'
import bannerimage2 from '/src/assets/b4.avif'

const fruitData = [
  { image: "/src/assets/slide1.avif" },
  { image: "/src/assets/slide2.avif" },
  { image: "/src/assets/slide3.avif" },
  { image: "/src/assets/slide4.avif" },
  { image: "/src/assets/slide5.avif" },
  { image: "/src/assets/slide6.avif" },
  { image: "/src/assets/slide7.avif" },
  { image: "/src/assets/slide8.avif" },
  { image: "/src/assets/slide9.avif" },
  { image: "/src/assets/slide10.avif" },
  { image: "/src/assets/slide11.avif" },
  { image: "/src/assets/slide12.avif" },
];



const brandDataLeft = [
    "/src/assets/br1.avif",
    "/src/assets/br2.avif",
    "/src/assets/br3.avif",
    "/src/assets/br4.avif",
    "/src/assets/br5.avif",
    "/src/assets/br6.avif",
    "/src/assets/br7.avif",
    "/src/assets/br8.avif",
    "/src/assets/br9.avif",
    "/src/assets/br10.avif",

  ];
  
  const brandDataRight = [
    "/src/assets/br11.avif",
    "/src/assets/br12.avif",
    "/src/assets/br13.avif",
    "/src/assets/br14.avif",
    "/src/assets/br15.avif",
    "/src/assets/br16.avif",
    "/src/assets/br17.avif",
    "/src/assets/br18.avif",
    "/src/assets/br19.avif",
    "/src/assets/br20.avif",

  ];
  

  const clientLogos = [
    "/src/assets/cl1.png",
    "/src/assets/cl2.avif",
    "/src/assets/cl3.avif",
    "/src/assets/cl4.avif",
    "/src/assets/cl5.avif",
    "/src/assets/cl6.avif",
    "/src/assets/cl8.avif",
    "/src/assets/cl9.png",
    "/src/assets/cl10.avif",
    "/src/assets/cl11.png",
  ];

const Fromorchardtomarket = () => {
  const scrollLeft = () => {
    const container = document.getElementById("fcm-slider-container");
    const scrollAmount = 300;
    container.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const container = document.getElementById("fcm-slider-container");
    const scrollAmount = 300;
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
    
    <div className="imagebanner" style={{display:"flex", justifyContent:"center", padding:"30px"}}>
        <img style={{minWidth:"200px", borderRadius:"30px", marginBottom:"40px"}} src={bannerimage1} alt="" />
    </div>
    <h1 className="title">OUR FRUIT FAMILY</h1>
    <div className="fcm-slider-wrapper">
      {/* Left Arrow */}
      <button className="fcm-arrow fcm-arrow-left" onClick={scrollLeft}>
        &#10094;
      </button>

      {/* Image Slider */}
     
      <div className="fcm-slider-container" id="fcm-slider-container">
        {fruitData.map((fruit, index) => (
          <img
            key={index}
            src={fruit.image}
            alt={`Slide ${index + 1}`}
            className="fcm-slider-image"
          />
        ))}
      </div>

      {/* Right Arrow */}
      <button className="fcm-arrow fcm-arrow-right" onClick={scrollRight}>
        &#10095;
      </button>
    </div>

    <div className="logo-marquee-container">
      <h1 className="title">BRANDS</h1>
      <div className="logo-marquee">
        {/* Left Marquee */}
        <div className="marquee">
          <div className="marquee-track">
            {brandDataLeft.concat(brandDataLeft).map((logo, index) => (
              <img key={index} src={logo} alt={`Brand Left ${index + 1}`} className="marquee-image" />
            ))}
          </div>
        </div>

        {/* Right Marquee */}
        <div className="marquee marquee-reverse">
          <div className="marquee-track">
            {brandDataRight.concat(brandDataRight).map((logo, index) => (
              <img key={index} src={logo} alt={`Brand Right ${index + 1}`} className="marquee-image" />
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="imagebanner" style={{display:"flex", justifyContent:"center", padding:"30px"}}>
        <img style={{minWidth:"200px", borderRadius:"30px", marginBottom:"40px"}} src={bannerimage2} alt="" />
    </div>


    
    <section className="clients-section" style={{margin:"0 auto"}}>
      <h1 className="title">OUR CLIENTS</h1>
      <div className="clients-grid">
        {clientLogos.map((logo, index) => (
          <div key={index} className="client-card">
            <img src={logo} alt={`Client ${index + 1}`} className="client-logo" />
          </div>
        ))}
      </div>
    </section>
    </>

  );
};

export default Fromorchardtomarket;
