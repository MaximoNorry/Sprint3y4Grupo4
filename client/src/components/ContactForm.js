import React, { useState } from "react";

const ContactForm = () => {
const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
const [success, setSuccess] = useState(false);

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSuccess(true);
    setFormData({ nombre: "", email: "", mensaje: "" });
};

return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
    <h2>Contacto</h2>
    {success && <p>Formulario enviado con éxito!</p>}
    <form onSubmit={handleSubmit}>
        <div>
        <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
        />
        </div>
        <div>
        <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
        />
        </div>
        <div>
        <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
        />
        </div>
        <button type="submit">Enviar</button>
    </form>
    </div>
);
};

export default ContactForm;
