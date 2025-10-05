import React from "react";

const ProductDetail = ({ producto, onBack, onAddToCart }) => {
if (!producto) return null;

const imagePath = `/images/${producto.nombre.toLowerCase().replace(/ /g, " ")}.png`;

return (
    <div className="product-detail">
    <img
        src={imagePath}
        alt={producto.nombre}
    />
    <h2>{producto.nombre}</h2>
    <p>{producto.descripcion}</p>

    <div className="product-specs">
        <p><strong>Medidas:</strong> {producto.medidas}</p>
        <p><strong>Materiales:</strong> {producto.materiales}</p>
        <p><strong>Acabado:</strong> {producto.acabado}</p>
    </div>

    <button onClick={() => onAddToCart(producto)}>Añadir al Carrito</button>
    <button 
        onClick={onBack} 
        style={{ marginTop: "1rem", backgroundColor: "#C47A6D" }}
    >
        Volver al Catálogo
    </button>
    </div>
);
};

export default ProductDetail;
