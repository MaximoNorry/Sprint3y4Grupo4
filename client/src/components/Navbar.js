import React from "react";

function Navbar({ carritoCount, volverAlCatalogo, toggleCarrito }) {
  return (
    <header>
      <div className="header-container">
        <div
          className="logo-izquierda"
          onClick={volverAlCatalogo}
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <img
            src="/images/logo.svg"
            alt="Logo Hermanos Jota"
            className="logo"
          />
          <h1 className="titulo-centro">Hermanos Jota</h1>
        </div>

        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/catalogo">Catálogo</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li>
              <button className="carrito" onClick={toggleCarrito}>
                🛒 Carrito (<span className="carrito-badge">{carritoCount}</span>)
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar