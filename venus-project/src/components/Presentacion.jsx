import React from "react";
import "../styles/Presentacion.css";

const Presentacion = ({
  titulo,
  descripcion,
  imagenes = [],
  columnas = 3,
}) => {
  return (
    <div className="galeria-fila-container">
        <div className="burbujas-fondo">
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
      </div>
      {/* Texto superior */}
      <div className="texto-superior">
        {titulo && <h2 className="titulo-galeria">{titulo}</h2>}
        {descripcion && <p className="descripcion-galeria">{descripcion}</p>}
      </div>

      {/* Galería de imágenes */}
      <div
        className={`galeria-grid columnas-${columnas}`}
        style={{ "--columnas": columnas }}
      >
        {imagenes.map((imagen, index) => (
          <div key={index} className="tarjeta-imagen">
            <div className="contenedor-imagen">
              <img
                src={imagen.url}
                alt={imagen.alt || `Imagen ${index + 1}`}
                className="imagen-galeria"
                loading="lazy"
              />
              <h3 className="textCard">{imagen.titulo}</h3>
            </div>

            {/* Texto debajo de cada imagen */}
          </div>
        ))}
      </div>

      {/* Mensaje si no hay imágenes */}
      {imagenes.length === 0 && (
        <div className="sin-imagenes">
          <p>No hay imágenes para mostrar</p>
        </div>
      )}
    </div>
  );
};

export default Presentacion;
