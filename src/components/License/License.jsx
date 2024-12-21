import React from "react";
import "./License.css";

const licenses = [
  { id: 1, image: "/assets/license1.avif", name: "License 1" },
  { id: 2, image: "/assets/license2.avif", name: "License 2" },
  { id: 3, image: "/assets/license3.avif", name: "License 3" },
  { id: 4, image: "/assets/license4.avif", name: "License 4" },
];

const License = () => {
  return (
    <div className="license-container">
      <h2 className="license-title">Licenses & CERTIFICATES</h2>
      <div className="license-grid">
        {licenses.map((license) => (
          <div className="license-card" key={license.id}>
            <img src={license.image} alt={license.name} className="license-image" />
            {/* <div className="license-name">{license.name}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default License;
