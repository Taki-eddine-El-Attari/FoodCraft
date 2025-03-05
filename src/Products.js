import React from "react";
import Product from "./Product";

const Products = ({ lproducts }) => {
  return (
    <div className="product-grid">
      {lproducts.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
};

export default Products;
