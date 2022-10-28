import { Link } from "react-router-dom";
import CartHeader from "./cartHeader";
import "./styled.sass";
import LogoWendy from "../../images/WENDY.png"





import BasicMenu from "./userOn";





const Header = () => {
  return (
    <main className="navBar">

      <Link className="linkTest" to={"/"}>
        <img className="logoWendy" src={LogoWendy} alt="Velosera paixonado" />

      </Link>
      
      <ul className="navOptions">
        <Link to={"/products"}>
          <li className="toJoias" >Joias</li>
        </Link>
        <Link to={"/aboutUs"}>
          <li className="toAbt" >Sobre nós</li>
        </Link>
        <Link to={"/cadastro"}>
          <li className="toCadst" >Cadastro</li>
        </Link>
        <Link to={"/login"}>
          <li className="toLogin" >Login</li>
        </Link>
        
      </ul>
      <CartHeader />
      <BasicMenu />
      
    </main>
  );
};

export default Header