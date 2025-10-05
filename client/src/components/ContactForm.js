import React, { useState } from "react";

function ContactForm() {
const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
const [success, setSuccess] = useState(false);

const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setSuccess(true);
    setForm({ nombre: "", email: "", mensaje: "" });
};

return (
    <form className="contact-form" onSubmit={handleSubmit}>
    <label>Nombre</label>
    <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required />
    <label>Email</label>
    <input type="email" name="email" value={form.email} onChange={handleChange} required />
    <label>Mensaje</label>
    <textarea name="mensaje" value={form.mensaje} onChange={handleChange} required />
    <button type="submit">Enviar</button>
    {success && <p style={{ color: "green", marginTop: "1rem" }}>¡Mensaje enviado con éxito!</p>}
    </form>
);
}

export default ContactForm;
