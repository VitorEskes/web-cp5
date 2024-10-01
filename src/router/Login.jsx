import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa"; // Importação dos ícones
import imgLogin from "../assets/login.avif"
import "../CSS/Login.css";


const Login =()=>{

    //Hook-useRef pega a referencia de um componente ou elemento do DOM
    const usuario = useRef();
    const senha = useRef();

    //Hook-useState - Manipula o estado da variavel
    const [usuarios, setUsuarios]=useState([])

    //Hook -useNavigate- ele redireciona para outro componente
    const navigate = useNavigate();

    //criando a função de validação

    function validar(){
        for( let  i=0; i <usuarios.length;i++){
            if(
                usuarios[i].usuario == usuario.current.value &&
                usuarios[i].senha ==senha.current.value
            )
            return true
        }
    }
    

    //criado a função handleSubmit
    const handleSubmit=(e)=>{
        //previne que sua pagina faça qualquer modificação ex. load
        e.preventDefault();
        if(validar()){
            //criando a autenticação
            let token=
                Math.random().toString(16).substring(2)+
                Math.random().toString(16).substring(2)
                sessionStorage.setItem("usuario",usuario.current.value);
                sessionStorage.setItem("senha", token);
                navigate("/produtos");
        } else{
            alert("usuario/senha inválidos")
        }
    }

    //Hook-useEffect vai buscar os dados do login no json

    useEffect(()=>{
        //pega o link da url
        fetch("http://localhost:5001/usuarios")
        //promise
        .then((res)=>{
            //converte os dados para json
            return res.json();
        })
        .then((res)=>{
            //recebe as alterações da variavel
            setUsuarios(res)
        })
        //retrona um array vazio
    },[])

    return (
        <section className="cont-login">
          <div className="container-login">
            {/* Lado Esquerdo: Formulário de Login */}
            <div className="login">
              <form className="login-form" onSubmit={handleSubmit}>
                <span className="titulo-login">Bem-vindo!</span>
                <br />
                <span className="subtitulo-login">Faça seu login para continuar</span>
                
                <div className="w-input">
                  <FaUser className="input-icon" /> {/* Ícone de usuário */}
                  <input
                    type="text"
                    className="input-form"
                    id="usuario"
                    ref={usuario}
                    placeholder="Usuário" // Adicionei placeholder
                  />
                </div>
    
                <div className="w-input">
                  <FaLock className="input-icon" /> {/* Ícone de senha */}
                  <input
                    type="password"
                    className="input-form"
                    id="senha"
                    ref={senha}
                    placeholder="Senha" // Adicionei placeholder
                  />
                </div>
    
                <div className="checkbox">
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe">Lembre-se de mim</label>
                </div>
    
                <div className="login-btn">
                  <button type="submit" className="login-form-btn">Login</button>
                </div>
    
                <div className="additional-links">
                  <a href="#">Esqueceu a senha?</a>
                  <a href="#">Registrar-se</a>
                </div>
              </form>
            </div>
    
            {/* Lado Direito: Imagem */}
            <div className="image-side">
              <img
                src={imgLogin} // Substitua por uma URL real de imagem
                alt="Login Illustration"
                className="login-image"
              />
            </div>
          </div>
        </section>
      );
    };
    
    export default Login;