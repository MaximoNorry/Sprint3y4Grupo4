import React from "react";

const ProductDetail = ({ producto, onBack, onAddToCart }) => {
return (
    <div style={{ padding: "1rem" }}>
    <button onClick={onBack}>Volver al catálogo</button>
    <h2>{producto.nombre}</h2>
    <p>{producto.descripcion}</p>
    <p><strong>Medidas:</strong> {producto.medidas}</p>
    <p><strong>Materiales:</strong> {producto.materiales}</p>
    <p><strong>Acabado:</strong> {producto.acabado}</p>
    <button onClick={() => onAddToCart(producto)}>Añadir al carrito</button>
    </div>
);
};

export default ProductDetail;
