import React from 'react';
import '../styles/Hero.css';
import { FaRegHeart } from "react-icons/fa";
import img1 from'../assets/img1.jpg';
import img2 from'../assets/img2.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="containerH">
        <div className="hero-content">
          {/* Primera imagen */}
          <div className="hero-image">
            <img 
              src={img1} 
              alt="Moda estilo Venus"
              className="image"
            />
        </div>
          
          {/* Texto central */}
          <div className="hero-text">
            <FaRegHeart color="var(--verde)" size={90}/>
            <h2 className="hero-title">
              VeNuS
            </h2>
            <h3 className='text1' >Donde cada prenda cuenta tu historia</h3>
       <button className='btn-mas'>Saber Más</button>
          </div>
          
          {/* Segunda imagen */}
          <div className="hero-image">
            <img 
              src={img2} 
              alt="Accesorios exclusivos"
              className="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;