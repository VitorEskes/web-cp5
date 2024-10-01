import React, { useState } from 'react';
import axios from 'axios';
import "../CSS/RegisterProduct.css"; // Atualize o caminho se necessário

const RegisterProduct = () => {
  const [name, setName] = useState('');
  const [modelo, setModelo] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      modelo,
      price,
      description,
      image,
    };

    try {
      await axios.post('http://localhost:5000/products', newProduct);
      alert('Produto cadastrado com sucesso!');
      setName('');
      setModelo('');
      setPrice('');
      setDescription('');
      setImage('');
    } catch (error) {
      console.error('Erro ao cadastrar o produto:', error);
      alert('Erro ao cadastrar o produto.');
    }
  };

  return (
    <div className="register-containerRegis">
      <div className="register-form-wrapperRegis">
        <h2 className="register-titleRegis">Cadastrar Produto</h2>
        <form onSubmit={handleSubmit} className="register-formRegis">
          <div className="form-groupRegis">
            <label>
              Nome do Produto:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="form-inputRegis"
              />
            </label>
          </div>
          <div className="form-groupRegis">
            <label>
              Modelo:
              <select
                value={modelo}
                onChange={(e) => setModelo(e.target.value)} // Atualizando o estado para 'modelo'
                required
                className="form-inputRegis"
              >
                <option value="">Selecione um modelo</option> {/* Opção padrão */}
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Conversível">Conversível</option>
              </select>
            </label>
          </div>
          <div className="form-groupRegis">
            <label>
              Preço:
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="form-inputRegis"
              />
            </label>
          </div>
          <div className="form-groupRegis">
            <label>
              Descrição:
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="form-inputRegis"
              />
            </label>
          </div>
          <div className="form-groupRegis">
            <label>
              URL da Imagem:
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
                className="form-inputRegis"
              />
            </label>
          </div>
          <button type="submit" className="submit-buttonRegis">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterProduct;
