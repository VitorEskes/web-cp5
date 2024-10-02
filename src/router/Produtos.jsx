import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../CSS/Produto.css';

const Produtos = () => {
  const [products, setProducts] = useState([]);
  const [addedProducts, setAddedProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        const storedAddedProducts = JSON.parse(localStorage.getItem('addedProducts')) || [];
        setAddedProducts(storedAddedProducts);
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();


    const token = sessionStorage.getItem('senha'); 
    if (token) {
      setIsLoggedIn(true); 
    } else {
      setIsLoggedIn(false); 
    }
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      const updatedAddedProducts = addedProducts.filter(productId => productId !== id);
      setAddedProducts(updatedAddedProducts);
      localStorage.setItem('addedProducts', JSON.stringify(updatedAddedProducts));
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    }
  };

  return (
    <section className="products-section">
      <div className="products-container">
        <h1 className="store-title">Bem-vindo à Nossa Loja!</h1>
        <p className="store-description">Explore nossa seleção exclusiva de produtos e encontre o que você precisa.</p>

        {isLoggedIn && (
          <button className="register-button" onClick={() => window.location.href = '/register'}>
            Cadastrar Produto
          </button>
        )}

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-medelo">{product.modelo}</p>
              <p className="product-description">{product.description}</p>
              <p className="product-price">R$ {product.price}</p>
              <div className='product-btn'>
                <button className="product-button">Ver mais ❱</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Produtos;
