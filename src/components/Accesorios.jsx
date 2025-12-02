import React from 'react';
import '../styles/Accesorios.css';
import '../styles/Presentacion.css';
import imagen from '../assets/satin.jpg';


const Accesorios = () => {
  return (
    <>
    <div className='content-principal'>
        <div className="burbujas-fondo">
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
      </div>
    <div className="Text_A"> Accesorios de Satin</div>
    <div className="some-class">
        <div className='content-img'>
              <img
                src={imagen}
                className="imagen-S"
              /> 
        </div>
        <div className='content-utils'>
             <h3 className='h1-text'>Cuida tu cabello</h3>
             <p className='elegant-text'>En Venus, cada accesorio está pensado para que expreses tu estilo único mientras cuidas tu cabello. ¡Ven y encuentra el complemento perfecto para tu look!</p>
        </div>
    </div>
    </div>
 </>
  )
}
export default Accesorios;