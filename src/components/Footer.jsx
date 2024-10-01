import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 
import logoFooter from "../assets/logo.png"
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer className='footer-container'>
      {/* Nome e Logo */}
      <div className='footer-content'>
        <div className='footer-logo'>
          <span className='footer-logo-text'>Synthicar</span>
        </div>
      </div>

      <p className='footer-description'>
        A melhor plataforma para você que gosta de conforto, espaço e elegancia para qualquer terreno
      </p>

      {/* Ícones das Redes Sociais */}
      <div className='footer-social-icons'>
        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='footer-icon'>
          <FaFacebook />
        </a>
        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='footer-icon'>
          <FaInstagram />
        </a>
        <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='footer-icon'>
          <FaLinkedin />
        </a>
        <a href='mailto:contact@synthica.com' className='footer-icon'>
          <FaEnvelope />
        </a>
      </div>


      {/* Direitos Reservados */}
      <h4 className='footer-rights'>© 2024 Synthicar. Todos os direitos reservados.</h4>
    </footer>
  );
}

export default Footer;
