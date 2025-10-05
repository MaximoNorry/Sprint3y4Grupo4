import React from "react";

const ProductDetail = ({ producto, onAddToCart }) => {
  return (
    <div className="product-detail">
      <img src={`/images/${producto.nombre.toLowerCase().replace(/ /g, " ")}.png`} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p><strong>Medidas:</strong> {producto.medidas}</p>
      <p><strong>Materiales:</strong> {producto.materiales}</p>
      <p><strong>Acabado:</strong> {producto.acabado}</p>
      <button onClick={() => onAddToCart(producto)}>Añadir al Carrito</button>
    </div>
  );
};

export default ProductDetail;
