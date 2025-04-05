import React from "react";
import ProductGrid from "../components/ProductGrid";
import EQUIPMENT_PRODUCTS from "../assets/equipmentProducts";

const Equipment = () => {
  return (
    <ProductGrid title="Equipment Collection" products={EQUIPMENT_PRODUCTS} />
  );
};

export default Equipment;
