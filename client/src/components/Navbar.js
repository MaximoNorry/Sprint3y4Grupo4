import React from "react";

const Navbar = ({ cantidadCarrito, volverAlCatalogo }) => {
return (
    <nav className="navbar">
    <h1 onClick={volverAlCatalogo} style={{ cursor: "pointer" }}>Hermanos Jota</h1>
    <div className="carrito">Carrito: {cantidadCarrito}</div>
    </nav>
);
};

export default Navbar;
