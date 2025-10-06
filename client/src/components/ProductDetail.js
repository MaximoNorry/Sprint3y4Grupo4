import React, { useState } from "react";

const ProductDetail = ({ producto, onAddToCart }) => {
  const [cantidad, setCantidad] = useState(1);

  const handleAddToCart = () => {
    onAddToCart({ ...producto, cantidad });
  };

  return (
    <div className="product-detail">
      <img
        src={`/images/${producto.nombre.toLowerCase().replace(/ /g, " ")}.png`}
        alt={producto.nombre}
      />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p><strong>Medidas:</strong> {producto.medidas}</p>
      <p><strong>Materiales:</strong> {producto.materiales}</p>
      <p><strong>Acabado:</strong> {producto.acabado}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>

      <div style={{ marginTop: "10px" }}>
        <label htmlFor="cantidad"><strong>Cantidad:</strong></label>
        <input
          id="cantidad"
          type="number"
          min="1"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value))}
          style={{ width: "60px", marginLeft: "8px" }}
        />
      </div>

      <button onClick={handleAddToCart}>Añadir al Carrito</button>
    </div>
  );
};

export default ProductDetail;

