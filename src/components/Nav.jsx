import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Nav.css";
import logo from "../assets/logo.jpg";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = sessionStorage.getItem("usuario");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  // Função de logout
  const handleLogout = () => {
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("senha");
    setIsLoggedIn(false);
    alert("Logout realizado com sucesso!");
    navigate("/register");
  };

  // Função para atualizar o estado de login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" className="imglogo" />
        <span>
          Synthicar

        </span>
      </Link>

      <nav className="navbar">
        <Link to="/" className="link">Home</Link>
        <Link to="/produtos" className="link">Produtos</Link>
        <Link to="/sobre" className="link">Sobre</Link>

        {isLoggedIn ? (
          <button onClick={handleLogout} className="link logout-btn">
            Logout
          </button>
        ) : (
          <Link to="/login" className="link">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Nav;
