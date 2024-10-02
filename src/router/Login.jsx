import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa"; 
import imgLogin from "../assets/login.avif"
import "../CSS/Login.css";


const Login =()=>{


    const usuario = useRef();
    const senha = useRef();

    const [usuarios, setUsuarios]=useState([])

    const navigate = useNavigate();


    function validar(){
        for( let  i=0; i <usuarios.length;i++){
            if(
                usuarios[i].usuario == usuario.current.value &&
                usuarios[i].senha ==senha.current.value
            )
            return true
        }
    }
    

    const handleSubmit=(e)=>{

        e.preventDefault();
        if(validar()){
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


    useEffect(()=>{
        fetch("http://localhost:5001/usuarios")
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setUsuarios(res)
        })
    },[])

    return (
        <section className="cont-login">
          <div className="container-login">
            <div className="login">
              <form className="login-form" onSubmit={handleSubmit}>
                <span className="titulo-login">Bem-vindo!</span>
                <br />
                <span className="subtitulo-login">Faça seu login para continuar</span>
                
                <div className="w-input">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    className="input-form"
                    id="usuario"
                    ref={usuario}
                    placeholder="Usuário"
                  />
                </div>
    
                <div className="w-input">
                  <FaLock className="input-icon" />
                  <input
                    type="password"
                    className="input-form"
                    id="senha"
                    ref={senha}
                    placeholder="Senha"
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
    
            <div className="image-side">
              <img
                src={imgLogin} 
                alt="Login Illustration"
                className="login-image"
              />
            </div>
          </div>
        </section>
      );
    };
    
    export default Login;