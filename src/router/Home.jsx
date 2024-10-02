import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../CSS/Home.css";
import convertibleImage from "../assets/convertible.webp";
import hatchbackImage from "../assets/hatckback.webp";
import sedanImage from "../assets/sedan.webp";
import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import suvImage from "../assets/suv.webp";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2, slide3, slide4];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 3000);
    return () => clearInterval(autoSlide); 
  }, []);

  return (
    <>
      <section className="secao1">
        <h1 className="titulo-home">Bem-vindo à Synthicar</h1>
        <div className="slideshow-container">

          <button className="prev-slide" onClick={prevSlide}>
            &#10094;
          </button>


          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
            >
              {index === currentSlide && (
                <img src={slide} alt={`Slide ${index}`} className="slide-image" />
              )}
            </div>
          ))}

          <button className="next-slide" onClick={nextSlide}>
            &#10095;
          </button>

          <div className="slide-indicators">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className='subtitulo-home1'>
          <h1 className="titulo-home">Descubra os Carros Elétricos</h1>
          <p className='paragrafo-home'>Bem-vindo! Explore nossa seleção de carros elétricos, que oferecem desempenho, economia e zero emissões. Junte-se à revolução da mobilidade sustentável e faça a diferença hoje!</p>
        </div>

      </section>

      <section className="secao-cards">
        <h2 className="subtitulo-home">Explore Nossos Modelos de Carros</h2>
        <div className="card-container">
          {/* Card 1 */}
          <div className="card">
            <img src={suvImage} alt="SUV" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">SUV</h3>
              <p className="card-description">Conforto, espaço e elegancia para qualquer terreno.</p>
              <p className="card-price">R$ 215.000</p>
              <Link to='/produtos'><button className="card-button">Ver Mais</button></Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src={sedanImage} alt="Sedan" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">Sedan</h3>
              <p className="card-description">Elegância e conforto para um passeio de alta classe.</p>
              <p className="card-price">R$ 635.000</p>
              <Link to='/produtos'><button className="card-button">Ver Mais</button></Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img src={hatchbackImage} alt="Hatchback" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">Hatchback</h3>
              <p className="card-description">Compacto e econômico, perfeito para a cidade.</p>
              <p className="card-price">R$ 120.000</p>
              <Link to='/produtos'><button className="card-button">Ver Mais</button></Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card">
            <img src={convertibleImage} alt="Convertible" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">Conversível</h3>
              <p className="card-description">Liberdade e estilo em cada curva.</p>
              <p className="card-price">R$ 650.000</p>
              <Link to='/produtos'><button className="card-button">Ver Mais</button></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
