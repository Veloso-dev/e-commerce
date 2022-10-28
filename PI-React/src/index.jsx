import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CadastroProvider } from "./context/CadastroContext"
import { LoginProvider } from "./context/LoginContext"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <LoginProvider>
    <CadastroProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </CadastroProvider>
      </LoginProvider>
  </>
);

