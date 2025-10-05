import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [carrito, setCarrito] = useState([]);
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

  const handleAgregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const volverAlCatalogo = () => {
    setProductoSeleccionado(null);
  };

  return (
    <div className="App">
      <Navbar carritoCount={carrito.length} volverAlCatalogo={volverAlCatalogo} />
      {cargando && <p>Cargando...</p>}
      {error && <p>Error al cargar los productos.</p>}
      {!productoSeleccionado && !cargando && !error && (
        <ProductList productos={productos} setProductoSeleccionado={setProductoSeleccionado} />
      )}

      {productoSeleccionado && (
        <ProductDetail producto={productoSeleccionado} onAddToCart={handleAgregarAlCarrito} />
      )}
      <ContactForm/>
      <Footer />
    </div>
  );
}

export default App;
