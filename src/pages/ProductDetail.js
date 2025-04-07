import React from "react";
import { useParams } from "react-router-dom";
import MEN_PRODUCTS from "../assets/menProducts";
import WOMEN_PRODUCTS from "../assets/womenProducts";
import EQUIPMENT_PRODUCTS from "../assets/equipmentProducts";
import "../App.css";

const ProductDetail = () => {
  const { id } = useParams();
  const allProducts = [...MEN_PRODUCTS, ...WOMEN_PRODUCTS, ...EQUIPMENT_PRODUCTS];
  const product = allProducts.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found!</div>;

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <img src={product.image} alt={product.name} className="product-detail-image" />
        <div className="product-detail-info">
          <h2>{product.name}</h2>
          <p className="price">₹{product.price}</p>
          <p>{product.description}</p>

          <div className="sizes">
            <strong>Available Sizes:</strong>
            <div className="size-options">
              {product.sizes.map((size) => (
                <span className="size-box" key={size}>
                  {size}
                </span>
              ))}
            </div>
          </div>

          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
