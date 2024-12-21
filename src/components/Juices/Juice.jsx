// import React from "react";
// import "./Juice.css";

// const productSet1 = [
//   { id: 1, image: "/src/assets/aamras.jpg", name: "Aamras", labelColor: "#f8c53a" , hoverIMG: "/src/assets/aamras_HOVER.jpg" },
//   { id: 2, image: "/src/assets/mangochia.png", name: "Mango Chia", labelColor: "#f7c522"  , hoverIMG: "/src/assets/mangochia_HOVER.jpg"},
//   { id: 3, image: "/src/assets/valenciaorange.jpg", name: "Valencia Orange", labelColor: "#f48521"  , hoverIMG: "/src/assets/valenciaorange_HOVER.jpg"},
//   { id: 4, image: "/src/assets/mangococonut.png", name: "Mango Coconut", labelColor: "#da9525" , hoverIMG: "/src/assets/" },
//   { id: 5, image: "/src/assets/pomegranate.png", name: "Pomegranate", labelColor: "#e7626f" , hoverIMG: "/src/assets/pomegranate_HOVER.jpg" },
//   { id: 6, image: "/src/assets/apple.png", name: "Apple", labelColor: "#b01f09" , hoverIMG: "/src/assets/" },
// ];

// const productSet2 = [
//   { id: 7, image: "/src/assets/mixfruit.png", name: "Mix Fruit", labelColor: "#c90a63" , hoverIMG: "/src/assets/" },
//   { id: 8, image: "/src/assets/kokum.png", name: "Kokum", labelColor: "#911c24"  , hoverIMG: "/src/assets/"},
//   { id: 9, image: "/src/assets/applebeetroot.png", name: "Apple Beetroot Carrot", labelColor: "#a32a40" , hoverIMG: "/src/assets/" },
//   { id: 10, image: "/src/assets/berrydelight.png", name: "Berry Delight", labelColor: "#682941" , hoverIMG: "/src/assets/berrydelight_HOVER.jpg" },
//   { id: 11, image: "/src/assets/watermelon.png", name: "Watermelon", labelColor: "#d14245"  , hoverIMG: "/src/assets/watermelon_HOVER.png"},
//   { id: 13, image: "/src/assets/guavachilli.png", name: "Guava Chilli", labelColor: "#eea8a4"  , hoverIMG: "/src/assets/guavachilli_HOVER.jpg"},
//   { id: 12, image: "/src/assets/sugarcane.png", name: "Sugarcane", labelColor: "#c5c061" , hoverIMG: "/src/assets/sugarcane_HOVER.jpg" },
//   { id: 14, image: "/src/assets/coconutwater.png", name: "Coconut Water", labelColor: "#b0cb5e"  , hoverIMG: "/src/assets/"},
//   { id: 15, image: "/src/assets/aampanna.png", name: "Aam Panna", labelColor: "#a2c653" , hoverIMG: "/src/assets/aampanna_HOVER.jpg" },
//   { id: 16, image: "/src/assets/pineapple.png", name: "Pineapple", labelColor: "#74ad72" , hoverIMG: "/src/assets/" },
//   { id: 17, image: "/src/assets/jamun.png", name: "Jamun", labelColor: "#5b516b" , hoverIMG: "/src/assets/" },
//   { id: 18, image: "/src/assets/goldkiwiblast.png", name: "Gold Kiwi Blast", labelColor: "#f9d670" , hoverIMG: "/src/assets/goldkiwiblast_HOVER.jpg" },
// ];

// const Juice = () => {
//   return (
//     <div className="juice-container">
//       {/* Banner Section */}
//       <div className="juice-banner">
//         <div className="banner-title">Chilled Coldpressed Juices</div>
//       </div>

//       {/* Heading */}
//       <h1 className="juice-heading">TROPICAL TWIST</h1>

//       {/* Product Set 1 */}
//       <div className="juice-grid">
//         {productSet1.map((product) => (
//           <div key={product.id} className="juice-card">
//             <div
//               className="juice-card-hover"
//               style={{ backgroundColor: product.labelColor }}
//             >
//               <img src={product.image} alt={product.name} className="juice-image" />
//             </div>
//             <div
//               className="juice-name"
//               style={{
//                 backgroundColor: product.labelColor,
//                 color: "#fff",
//               }}
//             >
//               {product.name}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Middle Section */}
//       <div className="juice-middle-content">
//         <div className="juice-middle-card">
//           <img
//             src="/src/assets/juciemid-1.avif"
//             alt="Valencia Orange"
//             className="middle-image"
//           />
//           <div className="text-b">
//             <h2 className="middle-text">HEALTHY</h2>
//             <h2 className="middle-text-dif">PURE</h2>
//             <h2 className="middle-text">100% <br />NATURAL</h2>
//             <h2 className="middle-text-dif">FRESH</h2>
//           </div>
//           <img
//             src="/src/assets/juicemid-2.avif"
//             alt="Coconut Water"
//             className="middle-image"
//           />
//         </div>
//       </div>

//       {/* Product Set 2 */}
//       <div className="juice-grid">
//         {productSet2.map((product) => (
//           <div key={product.id} className="juice-card">
//             <div
//               className="juice-card-hover"
//               style={{ backgroundColor: product.labelColor }}
//             >
//               <img src={product.image} alt={product.name} className="juice-image" />
//             </div>
//             <div
//               className="juice-name"
//               style={{
//                 backgroundColor: product.labelColor,
//                 color: "#fff",
//               }}
//             >
//               {product.name}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Juice;

import React from "react";
import "./Juice.css";

const Juice = () => {
  const productSet1 = [
    {
      id: 1,
      image: "/src/assets/aamras.png",
      name: "Aamras",
      labelColor: "#f8c53a",
      hoverIMG: "/src/assets/aamras_HOVER.jpg",
    },
    {
      id: 2,
      image: "/src/assets/mangochia.png",
      name: "Mango Chia",
      labelColor: "#f7c522",
      hoverIMG: "/src/assets/mangochia_HOVER.jpg",
    },
    {
      id: 3,
      image: "/src/assets/valenciaorange.png",
      name: "Valencia Orange",
      labelColor: "#f48521",
      hoverIMG: "/src/assets/valenciaorange_HOVER.jpg",
    },
    {
      id: 4,
      image: "/src/assets/mangococonut.png",
      name: "Mango Coconut",
      labelColor: "#da9525",
      hoverIMG: "/src/assets/mangococonut.png",
    },
    {
      id: 5,
      image: "/src/assets/pomegranate.png",
      name: "Pomegranate",
      labelColor: "#e7626f",
      hoverIMG: "/src/assets/pomegranate_HOVER.jpg",
    },
    {
      id: 6,
      image: "/src/assets/apple.png",
      name: "Apple",
      labelColor: "#b01f09",
      hoverIMG: "/src/assets/apple.png",
    },
  ];

  const productSet2 = [
    {
      id: 7,
      image: "/src/assets/mixfruit.png",
      name: "Mix Fruit",
      labelColor: "#c90a63",
      hoverIMG: "/src/assets/mixfruit.png",
    },
    {
      id: 8,
      image: "/src/assets/kokum.png",
      name: "Kokum",
      labelColor: "#911c24",
      hoverIMG: "/src/assets/kokum.png",
    },
    {
      id: 9,
      image: "/src/assets/applebeetroot.png",
      name: "Apple Beetroot Carrot",
      labelColor: "#a32a40",
      hoverIMG: "/src/assets/applebeetroot.png",
    },
    {
      id: 10,
      image: "/src/assets/berrydelight.png",
      name: "Berry Delight",
      labelColor: "#682941",
      hoverIMG: "/src/assets/berrydelight_HOVER.jpg",
    },
    {
      id: 11,
      image: "/src/assets/watermelon.png",
      name: "Watermelon",
      labelColor: "#d14245",
      hoverIMG: "/src/assets/watermelon.png",
    },
    {
      id: 13,
      image: "/src/assets/guavachilli.png",
      name: "Guava Chilli",
      labelColor: "#eea8a4",
      hoverIMG: "/src/assets/guavachilli_HOVER.jpg",
    },
    {
      id: 12,
      image: "/src/assets/sugarcane.png",
      name: "Sugarcane",
      labelColor: "#c5c061",
      hoverIMG: "/src/assets/sugarcane_HOVER.jpg",
    },
    {
      id: 14,
      image: "/src/assets/coconutwater.png",
      name: "Coconut Water",
      labelColor: "#b0cb5e",
      hoverIMG: "/src/assets/coconutwater.png",
    },
    {
      id: 15,
      image: "/src/assets/aampanna.png",
      name: "Aam Panna",
      labelColor: "#a2c653",
      hoverIMG: "/src/assets/aampanna_HOVER.jpg",
    },
    {
      id: 16,
      image: "/src/assets/pineapple.png",
      name: "Pineapple",
      labelColor: "#74ad72",
      hoverIMG: "/src/assets/pineapple.png",
    },
    {
      id: 17,
      image: "/src/assets/jamun.png",
      name: "Jamun",
      labelColor: "#5b516b",
      hoverIMG: "/src/assets/jamun.png",
    },
    {
      id: 18,
      image: "/src/assets/goldkiwiblast.png",
      name: "Gold Kiwi Blast",
      labelColor: "#f9d670",
      hoverIMG: "/src/assets/goldkiwiblast_HOVER.jpg",
    },
  ];

  const renderProductSet = (products) => (
    <div className="juice-grid">
      {products.map((product) => (
        <div key={product.id} className="juice-card" 
        style={{
            "--border-hover-color": product.labelColor, // Set CSS variable dynamically
          }}
        >
          <div className="juice-image-container">
            <img
              src={product.image}
              alt={product.name}
              className="juice-image front"
            />
            <img
              src={product.hoverIMG}
              alt={`${product.name} hover`}
              className="juice-image hover"
            />
          </div>
          <div
            className="juice-name"
            style={{
              backgroundColor: product.labelColor,
              color: "#fff",
            }}
          >
            {product.name}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="juice-container">
      {/* Banner Section */}
      <div className="juice-banner">
        <div className="banner-title">Chilled Coldpressed Juices</div>
      </div>

      {/* Heading */}
      <h1 className="juice-heading">TROPICAL TWIST</h1>

      {/* Product Set 1 */}
      {renderProductSet(productSet1)}

      {/* Middle Section */}
      <div className="juice-middle-content">
        <div className="juice-middle-card">
          <img
            src="/src/assets/juciemid-1.avif"
            alt="Valencia Orange"
            className="middle-image"
          />
          <div className="text-b">
            <h2 className="middle-text">HEALTHY</h2>
            <h2 className="middle-text-dif">PURE</h2>
            <h2 className="middle-text">
              100% <br />
              NATURAL
            </h2>
            <h2 className="middle-text-dif">FRESH</h2>
          </div>
          <img
            src="/src/assets/juicemid-2.avif"
            alt="Coconut Water"
            className="middle-image"
          />
        </div>
      </div>

      {/* Product Set 2 */}
      {renderProductSet(productSet2)}
    </div>
  );
};

export default Juice;
