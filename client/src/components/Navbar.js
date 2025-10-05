import React from "react";

function Navbar({ carritoCount, volverAlCatalogo }) {
return (
    <header>
        <div className="header-container">
            <div
                className="logo-izquierda"
                onClick={volverAlCatalogo}
                style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
            >
                <a href="../public/index.html">
                    <img
                        src="../public/images/logo.svg"
                        alt="Logo hermanos jota"
                        className="logo"
                    />
                </a>
                <h1 className="titulo-centro" href="../public/index.html" >Hermanos Jota</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="/catalogo">Catálogo</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                    <li>
                        <a className="carrito" type="button" href="">
                            🛒 Carrito (<span id="contador-carrito">{carritoCount}</span>)
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
);
}

export default Navbar;
