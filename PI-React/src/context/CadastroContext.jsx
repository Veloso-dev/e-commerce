import { createContext, useState } from "react";

export const CadastroContext = createContext();

export const CadastroProvider = ({ children }) => {
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [telefone, setTelefone] = useState()
  const [confirmarSenha, setConfirmarSenha] = useState()
  
  

  return (
    <CadastroContext.Provider
      value={{ nome, setNome, email, setEmail, senha, setSenha, telefone, setTelefone, confirmarSenha, setConfirmarSenha }}
    >
      {children}
    </CadastroContext.Provider>
  );
};