import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState()

  return (
    <LoginContext.Provider
      value={{ email, setEmail, senha, setSenha }}
    >
      {children}
    </LoginContext.Provider>
  );
};