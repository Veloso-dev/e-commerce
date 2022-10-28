import { Link, useNavigate } from "react-router-dom";
import React, {useContext } from 'react'
import facebook from './img/facebook.png'
import twitter from './img/twitter.png'
import google from './img/google.png'
import github from './img/github.png'
import api from '../../services/index'
import "./style.sass"
import { toast } from 'react-toastify';
import { LoginContext } from "../../context/LoginContext";

const LoginCadastro = () => {

  const { email, setEmail } = useContext(LoginContext);
  const { senha, setSenha } = useContext(LoginContext);
 
  const navigate = useNavigate();

  function handleChangeEmail(event) {
    let email = event.target.value;
    setEmail(email);
  }
  function handleChangeSenha(event) {
    let senha = event.target.value;
    setSenha(senha);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const value = {
      email: email,
      senha: senha
    } 
    console.log(value)
    api.post("/users/login", value)
      .then((response) => {
        // toast.success("Login realizado com sucesso!");
        // navigate("/");
        const token = response.data.token;
        if (token) {
          toast.success("Login realizado com sucesso!");
          localStorage.setItem("WT::token", token);
          navigate("/");
        }
    })
    .catch((error) => {
      toast.error("Erro ao realizar login!");
    })
  }
  
  return (
    <main id='containerPrimary'>
      <div id='container'>

        <div className='banner'>
        </div>

        <div className='box-login'>
        
          <div className='box'>
            <h2 className="titulo">Faça o seu login agora</h2>
            <input onChange={handleChangeEmail} value={email} type="email" id='email' placeholder='Digite o seu E-mail' />
            <input onChange={handleChangeSenha} value={senha} type='password' id='Senha' placeholder='Digite a sua Senha' />

            <button onClick={handleSubmit} className='button'>Login</button>

            <Link to={"/cadastro"}>
              <p>Criar conta</p>
            </Link>

            <div className='social' >

              <img id='img-icon' src={facebook} alt="face" />
              <img id='img-icon' src={twitter} alt="twitter" />
              <img id='img-icon' src={google} alt="google" />
              <img id='img-icon' src={github} alt="github" />

            </div>
          </div>
        </div>
      </div>
    </main>

  )
}

export default LoginCadastro