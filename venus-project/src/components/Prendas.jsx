import "../styles/Prendas.css";
// Importa más imágenes según necesites
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import f4 from "../assets/f4.jpg";
import f5 from "../assets/f5.jpg";
import  f7 from "../assets/f7.png";
import f8 from "../assets/scrum.jpg";
import f9 from "../assets/gorroo.jpg";
import f10 from "../assets/ondas.jpg";
import f11 from "../assets/mini.jpg";

const Prendas = () => {
  // Datos dinámicos de las prendas
  const prendas = [
    {
      id: 1,
      imagen: f3,
      precio: "8.00$",
      nombre: "Top Olivia",
      categoria: "Tops",
    },
    {
      id: 2,
      imagen: f2, // Cambia por tu imagen real
      precio: "8.00$",
      nombre: "Top Asimétrico",
      categoria: "Tops",
    },
    {
      id: 3,
      imagen: f4, // Cambia por tu imagen real
      precio: "8.00$",
      nombre: "Top Athena",
      categoria: "Tops",
    },
    {
      id: 4,
      imagen: f5, // Usa misma imagen por ahora
      precio: "8.00$",
      nombre: "Top Roma",
      categoria: "Tops",
    },
    {
      id: 5,
      imagen: f7,
      precio: "8.00$",
      nombre: "Top Zara",
      categoria: "Tops",
    },
    {
      id: 6,
      imagen: f8,
      precio: "1.00$",
      nombre: "Scrunchies",
      categoria: "Accesorios",
    },
        {
      id: 7,
      imagen: f9,
      precio: "6.00$",
      nombre: "Gorro de Satin",
      categoria: "Accesorios",
    },
          {
      id: 8,
      imagen: f10,
      precio: "6.00$",
      nombre: "Ondas sin Calor",
      categoria: "Accesorios",
    },
           {
      id: 9,
      imagen: f11,
      precio: "3x2.00$",
      nombre: "Miniscrunchies",
      categoria: "Accesorios",
    },
  ];

  return (
    <>
      <div className="prendas-container">
        <div className="texto-superior">
          <h2 className="titulo-galeria">Nuestras Prendas Destacadas</h2>
        </div>
        <div className="prendas-grid">
          {prendas.map((prenda) => (
            <div key={prenda.id} className="cajita-card">
              <div className="cajita-foto">
                <img
                  src={prenda.imagen}
                  alt={prenda.nombre}
                  className="prenda-image"
                />
                <div className="circle-text">{prenda.precio}</div>
              {/*  <div className="categoria-tag">{prenda.categoria}</div> */}
                <div className="info-card">
                  <p className="texto-info">{prenda.nombre}</p>
                </div>
              </div>
              <div className="card-hover">
                <h5 className="top-name">{prenda.nombre}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Prendas;
