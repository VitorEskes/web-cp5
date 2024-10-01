import React, { useState } from 'react';
import '../CSS/Contato.css';
import yourImage from '../assets/futebol.png'; 

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    return (
        <div className="sectionContato">
            <div className="message-container">
                <p>Entre em contato conosco preenchendo o formulário abaixo.</p>
            </div>
            <div className="contact-container">
                <h1>Formulário</h1>
                <form onSubmit={handleSubmit} className="contact-form">
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="message">Mensagem:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit">Enviar</button>
                </form>
            </div>
            <img src={yourImage} alt="Imagem Fixa" className="fixed-image" />
        </div>
    );
};

export default Contact;
