import React, { useContext} from 'react'
import { toast } from 'react-toastify';
import "./cadastro.sass"
import api from "../../services/index"
import { useNavigate } from "react-router-dom";
import {CadastroContext} from "../../context/CadastroContext"



const CadastroUsuario = () => {
  const navigate = useNavigate();
  const { nome, setNome } = useContext(CadastroContext);
  const { email, setEmail } = useContext(CadastroContext);
  const { senha, setSenha } = useContext(CadastroContext);
  const { confirmarSenha, setConfirmarSenha } = useContext(CadastroContext);
  const { telefone, setTelefone } = useContext(CadastroContext);

  const value = {
    nome: nome,
    email: email,
    senha: senha,
    telefone: telefone,
  }
  function cadastrousuario() {
    api.post("/users/cadastro", value).then((response) => {
      toast.success("Cadastro realizado com sucesso")
      navigate("/login")

    }).catch((error) => {
      toast.error("Erro ao cadastrar usuário")
    })
  }
  
  
  return (

    <div className="cadastroC">
      <div className="cadastro__container">
        <div className="cadastro__container__titulo">
          <h1>Cadastro</h1>
        </div>

        <div className="cadastroForm">
          <div className="cadastroInput">
            <input type="text" placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)} />
          </div>

          <div className="cadastroInput">
            <input type="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="cadastroInput">
            <input type="telefone" placeholder='Telefone' value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          </div>

          <div className="cadastroInput">
            <input type="password" placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
          </div>

          <div className="cadastroInput cadastroSesenha">
            <input type="password" placeholder='Confirmar Senha' value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
          </div>
          

          <div className="cadastro__container__form__botao">
            <button className='botaoCadastro' onClick={cadastrousuario}>Cadastrar</button>
            
          </div>
        </div>
      </div>
    </div>
  
  )
}
export default CadastroUsuario