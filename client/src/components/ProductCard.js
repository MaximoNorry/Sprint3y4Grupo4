import React from "react";

const ProductCard = ({ producto, onSelect }) => {
return (
    <div className="product-card" onClick={onSelect}>
    <img src={`/images/${producto.nombre.toLowerCase().replace(/ /g, " ")}.png`} alt={producto.nombre} />
    <h3>{producto.nombre}</h3>
    <p>{producto.descripcion}</p>
    </div>
);
};

export default ProductCard;
