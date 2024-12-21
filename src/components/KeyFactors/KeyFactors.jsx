import React from "react";
import "./KeyFactors.css";

const KeyFactors = () => {
  return (
    <div className="key-factors-container">
      <h2 className="key-factors-title">KEY FACTORS</h2>
      <div className="key-factors-grid">
        {/* Top Row */}
        <div className="key-factor">PURE AND NATURAL PRODUCTS</div>
        <div className="key-factor">INNOVATIVE TECHNOLOGY</div>
        <div className="key-factor">COLD PRESSED JUICES</div>
      </div>

      {/* Bottom Row */}
      <div className="key-factors-bottom">
        <div className="key-factor key-factor-wide">SUSTAINABLE INITIATIVES</div>
        <div className="key-factor key-factor-wide">CUSTOMISED SOLUTIONS</div>
      </div>
    </div>
  );
};

export default KeyFactors;
