import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ productos, onSelect }) {
  return (
    <div className="product-list">
      {productos.map((producto) => (
        <ProductCard key={producto.id} producto={producto} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default ProductList;