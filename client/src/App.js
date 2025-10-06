import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CarritoModal from "./components/CarritoModal";

function App() {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/productos")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch(() => {
        setError(true);
        setCargando(false);
      });
  }, []);

  const handleAgregarAlCarrito = (item) => {
    const existente = carrito.find(p => p.id === item.id);

    if (existente) {
      const nuevoCarrito = carrito.map(p =>
        p.id === item.id ? { ...p, cantidad: p.cantidad + item.cantidad } : p
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, item]);
    }
  };

  const quitarDelCarrito = (idProducto) => {
    setCarrito(carrito.filter(p => p.id !== idProducto));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  const volverAlCatalogo = () => {
    setProductoSeleccionado(null);
  };

  return (
    <div className="App">
      <Navbar
        carritoCount={carrito.reduce((acc, p) => acc + p.cantidad, 0)}
        volverAlCatalogo={volverAlCatalogo}
        toggleCarrito={toggleCarrito}
      />

      {mostrarCarrito && (
        <CarritoModal
          carrito={carrito}
          quitarDelCarrito={quitarDelCarrito}
          vaciarCarrito={vaciarCarrito}
          cerrar={toggleCarrito}
        />
      )}

      {cargando && <p>Cargando...</p>}
      {error && <p>Error al cargar los productos.</p>}

      {!productoSeleccionado && !cargando && !error && (
        <ProductList
          productos={productos}
          setProductoSeleccionado={setProductoSeleccionado}
          onAgregar={handleAgregarAlCarrito}
        />
      )}

      {productoSeleccionado && (
        <ProductDetail
          producto={productoSeleccionado}
          onAddToCart={handleAgregarAlCarrito}
        />
      )}

      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
