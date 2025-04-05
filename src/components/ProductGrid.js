import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ title, products }) => {
  return (
    <div className="product-page-container">
      <h2 className="section-title">{title}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">₹{product.price}</p>
            <div className="product-actions">
              <button>Add to Cart</button>
              <Link to={`/product/${product.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
