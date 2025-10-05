import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ productos, setProductoSeleccionado }) => {
  return (
    <div className="product-list">
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          producto={producto}
          onSelect={() => setProductoSeleccionado(producto)}
        />
      ))}
    </div>
  );
};

export default ProductList;
