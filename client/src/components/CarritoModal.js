import React from "react";

function CarritoModal({ carrito, quitarDelCarrito, vaciarCarrito, cerrar }) {
  const total = carrito.reduce((acc, prod) => acc + (Number(prod.precio) || 0), 0);

  return (
    <div id="carritoModal" style={{ display: "block" }}>
      <div className="modal-content">
        <div className="modal-header">
          <h4>Carrito de Compras</h4>
          <button className="close-btn" onClick={cerrar}>×</button>
        </div>

        <div className="modal-body">
          {carrito.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            carrito.map((producto) => {
              const precio = Number(producto.precio) || 0;

              return (
                <div key={producto.id} className="carrito-item">
                  <img
                    src={`/images/${producto.nombre.toLowerCase().replace(/ /g, " ")}.png`}
                    alt={producto.nombre}
                  />
                  <div className="producto-info">
                    <p className="nombre">{producto.nombre}</p>
                    <p className="precio">${precio.toLocaleString()}</p>
                  </div>
                  <button className="quitar-btn" onClick={() => quitarDelCarrito(producto.id)}>−</button>
                </div>
              );
            })
          )}
        </div>

        <div className="total-pagar">Total a pagar: ${total.toLocaleString()}</div>
        <button className="vaciar-btn" onClick={vaciarCarrito}>VACIAR CARRITO</button>
      </div>
    </div>
  );
}

export default CarritoModal;
