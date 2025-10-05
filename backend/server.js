const express = require("express");
const cors = require("cors");
const productosRoutes = require("./routes/productosRoutes");
const logger = require("./middlewares/logger");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/productos", productosRoutes);

app.use((req, res) => {
res.status(404).json({ error: "Ruta no encontrada" });
});

app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).json({ error: "Error interno del servidor" });
});

app.listen(PORT, () => {
console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});