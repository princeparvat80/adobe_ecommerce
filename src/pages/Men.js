import React from "react";
import ProductGrid from "../components/ProductGrid";
import MEN_PRODUCTS from "../assets/menProducts";
import "../App.css";


const Men = () => {
  return (
    <ProductGrid title="Men's Collection" products={MEN_PRODUCTS} />
  );
};

export default Men;
