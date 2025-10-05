import React from "react";

function ProductCard({ producto, onSelect }) {
return (
    <div className="product-card" onClick={() => onSelect(producto)}>
    <img src={producto.img} alt={producto.nombre} />
    <h3>{producto.nombre}</h3>
    <p>{producto.descripcion}</p>
    </div>
);
}

export default ProductCard;
