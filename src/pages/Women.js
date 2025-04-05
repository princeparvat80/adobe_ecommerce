import React from "react";
import ProductGrid from "../components/ProductGrid";
import WOMEN_PRODUCTS from "../assets/womenProducts";

const Women = () => {
  return (
    <ProductGrid title="Women's Collection" products={WOMEN_PRODUCTS} />
  );
};

export default Women;
