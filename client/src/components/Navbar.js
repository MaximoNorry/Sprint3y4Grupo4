import React from "react";

function Navbar({ carritoCount, volverAlCatalogo }) {
return (
    <nav className="navbar">
    <div className="logo-titulo" onClick={volverAlCatalogo} style={{cursor: 'pointer', display: 'flex', alignItems: 'center'}}>
        <img src="/images/logo.svg" alt="Logo Hermanos Jota" className="logo" />
        <h1>Hermanos Jota</h1>
    </div>
    <div className="carrito">Carrito: {carritoCount}</div>
    </nav>
);
}

export default Navbar;
