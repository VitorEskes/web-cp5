import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Sobre.css';
import sobreImage from '../assets/imgsobre.jpg';
import dev1 from '../assets/vitor.png'; 
import dev2 from '../assets/gabriel.png'; 
import dev3 from '../assets/nathan.png'; 

const Sobre = () => {
    return (
        <>
            <section className="sobre-container">
                <div className="sobre-content">
                    <h1 className='hsob'>Sobre Nós</h1>
                    <p>
                        Bem-vindo à <span className="highlight1">Synthicar</span>, a sua loja definitiva para a compra de carros elétricos! Oferecemos uma ampla variedade de modelos que combinam alta performance, sustentabilidade e tecnologia de ponta. Se você procura um carro que une inovação e responsabilidade ambiental, está no lugar certo.
                    </p>
                    <p>
                        Nossa missão na <span className="highlight1">Synthicar</span> é transformar a forma como você se conecta com a mobilidade elétrica. Trabalhamos com as principais marcas do mercado para garantir que você tenha acesso aos melhores veículos, com o atendimento personalizado que você merece.
                    </p>
                    <p>
                        Explore nosso site para conhecer nossos <a href="/produtos" className="sobre-link">modelos disponíveis</a> ou entre em <a href="/contato" className="sobre-link">contato</a> conosco para agendar um test-drive e descobrir mais sobre as vantagens dos veículos elétricos. Estamos aqui para ajudar você a dar o próximo passo em direção ao futuro da mobilidade!
                    </p>

                </div>
                <div className="sobre-image-container">
                    <img src={sobreImage} alt="Sobre nós" className="sobre-image" />
                </div>
            </section>


            <section className="devs-container">
                <h2>Conheça os Desenvolvedores</h2>
                <div className="devs">
                    <div className="dev-card">
                        <img src={dev1} alt="Desenvolvedor 1" className="dev-image" />
                        <p className="dev-name">Vitor Eskes</p>
                        <a href='https://www.linkedin.com/in/vitor-eskes-2727bb2b6/' target='blanc' className='devs-link'>LinkedIn</a>
                    </div>
                    <div className="dev-card">
                        <img src={dev2} alt="Desenvolvedor 2" className="dev-image" />
                        <p className="dev-name">Gabriel Matias</p>
                        <a href='https://www.linkedin.com/in/gabriel-matias-simoes-90ba97150/' target='blanc' className='devs-link'>LinkedIn</a>
                    </div>
                    <div className="dev-card">
                        <img src={dev3} alt="Desenvolvedor 3" className="dev-image" />
                        <p className="dev-name">Nathan Craveiro</p>
                        <a href='https://www.linkedin.com/in/nathan-amin-6900462b6/' target='blanc' className='devs-link'>LinkedIn</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sobre;