import React from "react";

function ProductDetail({ producto, addToCart, onBack }) {
return (
    <div className="product-detail">
    <img src={producto.img} alt={producto.nombre} />
    <h2>{producto.nombre}</h2>
    <p>{producto.descripcion}</p>
    <button onClick={() => addToCart(producto)}>Añadir al Carrito</button>
    <button style={{ marginTop: "1rem" }} onClick={onBack}>Volver al catálogo</button>
    </div>
);
}

export default ProductDetail;
