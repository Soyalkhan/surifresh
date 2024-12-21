import React from "react";
import "./JuiceComparison.css";

const JuiceComparison = () => {
  return (
    <div className="comparison-container">
      <div className="comparison-row header-row">
        <div className="column parameter-column" style={{backgroundColor:"#ff8c00", color:"white"}}>PARAMETERS</div>
        <div className="column coldpressed-header">COLDPRESSED JUICES</div>
        <div className="column traditional-header">TRADITIONAL JUICES</div>
      </div>
      <div className="comparison-row">
        <div className="column parameter-column">PROCESSING METHOD</div>
        <div className="column">Coldpressed juices utilize hydraulic pressure to extract juice without heat, preserving more nutrients.</div>
        <div className="column">Traditional juices involve heat pasteurizations.</div>
      </div>
      <div className="comparison-row">
        <div className="column parameter-column">NUTRIENT RETENTION</div>
        <div className="column">Suri juices maintain nutrients, color, and flavour due to the lack of high heat.</div>
        <div className="column">High heat can degrade nutrients, color, and flavor.</div>
      </div>
      <div className="comparison-row">
        <div className="column parameter-column">SHELF LIFE</div>
        <div className="column">Coldpressed juices have a longer shelf life without preservatives due to the processing method.</div>
        <div className="column">Traditional juices may require preservatives to maintain freshness, resulting in a shorter shelf life.</div>
      </div>
      <div className="comparison-row">
        <div className="column parameter-column">MICROBIAL SAFETY</div>
        <div className="column">Coldpressed juices effectively eliminate harmful pathogens and extend shelf life without compromising quality.</div>
        <div className="column">Traditional juices may require heat pasteurization or preservatives to achieve similar safety standards.</div>
      </div>
      <div className="comparison-row">
        <div className="column parameter-column">TEXTURE AND TASTE</div>
        <div className="column">Coldpressed juices typically retain a fresher taste and smoother texture.</div>
        <div className="column">Traditional juices can sometimes have a cooked or processed flavor due to heat pasteurization.</div>
      </div>
    </div>
  );
};

export default JuiceComparison;
