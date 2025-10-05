import React from "react";

function Navbar({ carritoCount }) {
return (
    <nav className="navbar">
    <h1>Hermanos Jota</h1>
    <div className="carrito">Carrito: {carritoCount}</div>
    </nav>
);
}

export default Navbar;
