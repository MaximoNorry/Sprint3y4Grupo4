import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ContactForm from "./components/ContactForm";

function App() {
const [productos, setProductos] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [selectedProduct, setSelectedProduct] = useState(null);
const [carrito, setCarrito] = useState([]);

useEffect(() => {
    fetch("http://localhost:5000/api/productos")
    .then((res) => {
        if (!res.ok) throw new Error("Error al cargar productos");
        return res.json();
    })
    .then((data) => {
        setProductos(data);
        setLoading(false);
    })
    .catch((err) => {
        setError(err.message);
        setLoading(false);
    });
}, []);

const handleAddToCart = (producto) => {
    setCarrito([...carrito, producto]);
};

return (
    <div>
    <Navbar carritoCount={carrito.length} />
    {loading && <p>Cargando productos...</p>}
    {error && <p>{error}</p>}
    {!loading && !error && !selectedProduct && (
        <ProductList productos={productos} onSelect={setSelectedProduct} />
    )}
    {selectedProduct && (
        <ProductDetail
        producto={selectedProduct}
        onBack={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        />
    )}
    <ContactForm />
    </div>
);
}

export default App;
