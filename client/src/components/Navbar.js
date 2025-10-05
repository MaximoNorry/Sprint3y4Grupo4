import React from "react";

const Navbar = ({ carritoCount }) => {
return (
    <nav style={{ padding: "1rem", background: "#333", color: "#fff" }}>
    <h1>Mueblería Hermanos Jota</h1>
    <div>Carrito: {carritoCount} items</div>
    </nav>
);
};

export default Navbar;
