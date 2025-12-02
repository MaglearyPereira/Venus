import "../styles/footer.css";
import "../styles/generic.css";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";


import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ Mensaje enviado correctamente. Te contactaremos pronto.");
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        alert(`❌ ${result.message || "Error al enviar el mensaje"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Error de conexión. Verifica que el backend esté corriendo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-footer">
      <div className="redes">
        <h5 className="r-sociales">Redes Sociales</h5>
        <div className="name-r">
        <div className="circle-redes"> <AiFillInstagram color="#f2ebe9" fontSize={30}/></div> 
        <div className="circle-redes"> <IoLogoTiktok color="#f2ebe9" fontSize={20}/></div>
        <div className="circle-redes"> <FaFacebookF color="#f2ebe9" fontSize={20}/></div>
        </div>
      </div>
      <div className="info-text">
        <h5 className="contacto">Contáctos</h5>
        <div className="text-contac">
          <p>+58 414 242 9478</p>
          <p>maglearypereirao@gmail.com</p>
        </div>
      </div>

      <div className="formulario-gmail">
        <h3>Envíanos un mensaje</h3>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
