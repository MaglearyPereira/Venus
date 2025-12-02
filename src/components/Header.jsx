import "../styles/generic.css";
import React, { useState, useEffect } from 'react';
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [scrolling, setScrolling] = useState(false);

  // Efecto para detectar scroll y cambiar el enlace activo
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['sobre-mi', 'accesorios', 'ropa', 'contactos'];
      
      // Encuentra qué sección está actualmente en vista
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Si la sección está en el área visible
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(sectionId);
            break;
          }
        }
      }
      
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Llama una vez al cargar para establecer el estado inicial
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    
    // Encuentra el elemento por su ID y haz scroll suave
    const element = document.getElementById(link);
    if (element) {
      const offset = 80; // Ajuste para el header fijo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${scrolling ? 'scrolled' : ''}`}>
      <div className="main-header">
        <div className="container">
          <div className="logo">
            <FaRegHeart color="var(--verde)" size={30}/>
            
            <h1 className="logo-text">Venus</h1>
          </div>
          <div className="nav">
            <div className="container">
              <nav className="nav-menu">
                <div className="nav-item">
                  <button 
                    className={`nav-link ${activeLink === 'sobre-mi' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('sobre-mi')}
                  >
                    Nosotros
                  </button>
                </div>
                <div className="nav-item">
                  <button 
                    className={`nav-link ${activeLink === 'accesorios' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('accesorios')}
                  >
                    Accesorios
                  </button>
                </div>
                <div className="nav-item">
                  <button 
                    className={`nav-link ${activeLink === 'ropa' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('ropa')}
                  >
                    Ropa
                  </button>
                </div>
                <div className="nav-item">
                  <button 
                    className={`nav-link ${activeLink === 'contactos' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('contactos')}
                  >
                    Contactos
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;