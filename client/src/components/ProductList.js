import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ productos, onSelect }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", padding: "1rem" }}>
      {productos.map((prod) => (
        <ProductCard key={prod.id} producto={prod} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default ProductList;
