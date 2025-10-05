import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ContactForm from "./components/ContactForm";
import "./App.css";

function App() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/productos")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const addToCart = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const handleSelectProduct = (producto) => {
    setSelectedProduct(producto);
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      <Navbar carritoCount={carrito.length} />
      {loading && <p style={{ padding: "2rem" }}>Cargando...</p>}
      {error && <p style={{ padding: "2rem", color: "red" }}>Error al cargar productos</p>}
      {!loading && !error && !selectedProduct && (
        <ProductList productos={productos} onSelect={handleSelectProduct} />
      )}
      {selectedProduct && (
        <ProductDetail producto={selectedProduct} addToCart={addToCart} onBack={handleBackToList} />
      )}
      <ContactForm />
    </div>
  );
}

export default App;