import React from "react";
import "./FeaturedProduct.css";

const products = [
  { id: 1, image: "/assets/f1.avif", name: "Frozen" },
  { id: 2, image: "/assets/f2.png", name: "Dips" },
  { id: 3, image: "/assets/f3.png", name: "Oatmeals" },
  { id: 4, image: "/assets/f4.avif", name: "Pulp/Puree" },
  { id: 5, image: "/assets/f5.avif", name: "Chilled Juice" },
];

const FeaturedProduct = () => {
  return (
    <div className="featured-products">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="product-img">
            <img className="product-image" src={product.image} alt="" />
          </div>
          <div className="card-title">
          {product.name}
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default FeaturedProduct;
