import React from 'react';
const Product=({ title, price, description, thumbnail})=>{
   
    return (
        <div className="product">
          <img src={`pictures/${thumbnail}`} alt={title} className="product-image" />
          <h3 className="product-title">{title}</h3>
          <p className="product-description">{description}</p>
          <p className="product-price">{price} DH</p>
        </div>
    );
};

export default Product;