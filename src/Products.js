import React from 'react';
import Product from './Product';

const Products=({lproducts})=>{
    return(
        <div className="product-grid">
          {lproducts.map((product, index)=>(
            <Product 
            key={index}
            title={product.title}
            price={product.price}
            description={product.description}
            thumbnail={product.thumbnail}
            />
          ))}
        </div>
    );

};
export default Products;