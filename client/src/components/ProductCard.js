import React from "react";

const ProductCard = ({ producto, onSelect }) => {
return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", width: "250px" }}>
    <h3>{producto.nombre}</h3>
    <p>{producto.descripcion.substring(0, 80)}...</p>
    <button onClick={() => onSelect(producto)}>Ver detalle</button>
    </div>
);
};

export default ProductCard;
