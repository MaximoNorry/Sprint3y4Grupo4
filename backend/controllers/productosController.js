const productos = require("../data/productos");

const obtenerProductos = (req, res) => {
res.json(productos);
};

const obtenerProductoPorId = (req, res) => {
const id = parseInt(req.params.id);
const producto = productos.find(p => p.id === id);

if (!producto) {
    return res.status(404).json({ error: "Producto no encontrado" });
}

res.json(producto);
};

module.exports = { obtenerProductos, obtenerProductoPorId };
