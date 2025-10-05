**Sprint 3 y 4-Grupo 4**
**Integrantes**
.
.
.
.
**Intrucciones de instalación**
El proyecto está organizado como un monorepo con dos carpetas principales:
/backend  → API con Node.js y Express
/client   → Frontend con React
**Backend**
-Entrar a la carpeta del backend:
cd backend
-Instalar dependencias:
npm install
-Iniciar servidor:
npm start
El backend correrá por defecto en http://localhost:5000.
**Frontend**
-Entrar a la carpeta del frontend:
cd client
-Instalar dependencias:
npm install
-Iniciar servidor de desarrollo:
npm start
La app React correrá en http://localhost:3000.
Asegurarse de que el backend esté corriendo antes de abrir el frontend para que los fetch funcionen correctamente.
**Decisiones importantes:**
.Componentes React separados y reutilizables: <Navbar>, <Footer>, <ProductList>, <ProductCard>, <ProductDetail>, <ContactForm>.
.Estado React manejado con useState y lifting state para el carrito y selección de productos.
.Renderizado condicional para mostrar el detalle del producto sin React Router.
.Estética y branding aplicados según manual de marca (colores, tipografía, responsivo).
.Backend modularizado con express.Router, manejo de errores y middleware global de logs.
**Uso**
-Navegar el catálogo de productos.
-Hacer click en un producto para ver detalles.
-Añadir productos al carrito y ver el contador actualizado en la barra superior.
-Enviar consultas a través del formulario de contacto, que imprime los datos en consola y muestra mensaje de éxito.
