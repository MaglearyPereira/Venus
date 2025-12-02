import React from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection.jsx'
import Presentacion from './components/Presentacion.jsx'
import Accesorios from './components/Accesorios.jsx' 
import Prendas from './components/Prendas.jsx'   
import Footer from './components/Footer.jsx'
import p1 from './assets/p1.jpg'
import p2 from './assets/p2.jpg'
import p3 from './assets/p3.jpg'
import p4 from './assets/p4.jpg'

function App() {
  const imagenesEjemplo = [
    {
      url: p1,
      alt: 'Paisaje montañoso',
      titulo: 'Estilo',
      descripcion: 'Descubre la belleza de las montañas más altas del mundo'
    },
    {
      url: p2,
      alt: 'Bosque nevado',
      titulo: 'Moda',
      descripcion: 'Explora la magia de los bosques en invierno'
    },
    {
      url: p3,
      alt: 'Sensualidad',
      titulo: 'Sensualidad',
      descripcion: 'Comienza tu día con vistas espectaculares'
    },
    {
      url: p4,
      alt: 'Elegancia',
      titulo: 'Elegancia',
      descripcion: 'Encuentra tu camino a través de la naturaleza'
    },
  ];

  return (
    <>
      <Header />
      <HeroSection />
      <section id="sobre-mi">
        <Presentacion 
          titulo="Donde la Elegancia Nace"
          descripcion=""
          imagenes={imagenesEjemplo}
          columnas={3}
          mostrarTitulos={true}/>
      </section>
      <section id="accesorios">
        <Accesorios/>
      </section>
      <section id="ropa">
        <Prendas/>
      </section>
      <section id="contactos">
        <Footer/>
      </section>
    </>
  )
}

export default App