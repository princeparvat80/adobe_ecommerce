import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { toast } from 'react-toastify';
import MEN_PRODUCTS from "../assets/menProducts";
import WOMEN_PRODUCTS from "../assets/womenProducts";
import EQUIPMENT_PRODUCTS from "../assets/equipmentProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const allProducts = [...MEN_PRODUCTS, ...WOMEN_PRODUCTS, ...EQUIPMENT_PRODUCTS];
  const product = allProducts.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found!</div>;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("✅ Added to cart!");
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <img src={product.image} alt={product.name} className="product-detail-image" />
        <div className="product-detail-info">
          <h2>{product.name}</h2>
          <p className="price">₹{product.price}</p>
          <p>{product.description}</p>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
