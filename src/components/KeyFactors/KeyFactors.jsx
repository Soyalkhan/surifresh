import React from "react";
import "./KeyFactors.css";

const keyFactorsData = [
  {
    title: "PURE AND NATURAL PRODUCTS",
    description:
      "Our commitment to purity ensures that our products retain the natural goodness and flavor of fruits, free from additives or preservatives.",
  },
  {
    title: "INNOVATIVE TECHNOLOGY",
    description:
      "Leveraging advanced techniques like High Pressure Processing and blast freezing, we extend shelf life while maintaining freshness and nutritional value.",
  },
  {
    title: "COLD PRESSED JUICES",
    description:
      "Our focus on cold-pressed juices preserves the nutritional content and flavor of fruits, offering a healthier alternative.",
  },
  {
    title: "SUSTAINABLE INITIATIVES",
    description:
      "We prioritize sustainability across our operations, minimizing waste and carbon footprints while delivering exceptional products.",
  },
  {
    title: "CUSTOMISED SOLUTIONS",
    description:
      "With options for private labeling and tailored packaging, we cater to the unique needs of clients, ensuring quality and freshness. Enjoy our chilled juices for up to 28 days and our frozen varieties for up to 6 months. Our product’s packaging has various sizes, including 200ml, 250ml, 1L, and 3L PET bottles/pouches.",
  },
];

const KeyFactors = () => {
  return (
    <div className="key-factors-container">
      <h2 className="key-factors-title">KEY FACTORS</h2>
      <div className="key-factors-grid">
        {keyFactorsData.slice(0, 3).map((factor, index) => (
          <div className="key-factor" key={index}>
            <div className="key-factor-content">
              <div className="key-factor-title">{factor.title}</div>
              <div className="key-factor-description">{factor.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="key-factors-bottom">
        {keyFactorsData.slice(3).map((factor, index) => (
          <div className="key-factor key-factor-wide" key={index}>
            <div className="key-factor-content">
              <div className="key-factor-title">{factor.title}</div>
              <div className="key-factor-description">{factor.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFactors;



// PURE AND NATURAL PRODUCTS:Our commitment to purity ensures that our products retain the natural goodness and flavor of fruits, free from additives or preservatives.
// INNOVATIVE TECHNOLOGY: Leveraging advanced techniques like High Pressure Processing and blast freezing, we extend shelf life while maintaining freshness and nutritional value.
// COLD PRESSED JUICES : Our focus on cold-pressed juices preserves the nutritional content and flavor of fruits, offering a healthier alternative.
// SUSTAINABLE INITIATIVES:We prioritize sustainability across our operations, minimizing waste and carbon footprints while delivering exceptional products.
// CUSTOMISED SOLUTIONS: With options for private labeling and tailored packaging, we cater to the unique needs of clients, ensuring quality and freshness. Enjoy our chilled juices for up to 28 days and our frozen varieties for up to 6 months. Our product’s packaging has various sizes, including 200ml, 250ml, 1L, and 3L PET bottles/pouches