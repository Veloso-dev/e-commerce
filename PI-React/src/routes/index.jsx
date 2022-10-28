import { Routes, Route } from "react-router-dom";
import { Home } from "../views/home";
import { Product } from "../views/product";
import Login from "../views/login";
import Cadastro from "../views/cadastro";
import Perfil from "../views/perfil";
import AboutView from "../views/aboutUs";
import CheChout from "../views/checkout";
import Cart from "../views/cart";
import Products from "../views/products";
import Teste from "../views/Teste";
import { PrivateRoute } from "./privateRoute";


export const MainRoutes = () => {
  return (
    <>
    
      <Routes>
        {/* ---------------Rotas Públicas:-------------------- */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutView />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/checkout" element={<CheChout />} />
        <Route path="/products" element={<Products />} />
        <Route path="/test" element={<Teste />} />
        <Route path="/categorias/:id" exact element={<Products />} />

        {/* ---------------Rotas Privadas:-------------------- */}
        <Route path="/perfil" element={<PrivateRoute> <Perfil /> </PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute> <Cart /> </PrivateRoute>} />
      </Routes>
    </>
  );
};

