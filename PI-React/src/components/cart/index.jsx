import React from "react";
import Resume2 from "./resumo2";
import "./style.sass";
// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";



const CartC = () => {

  
  function removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
    arr.splice(objWithIdIndex, 1);
  
    return arr;
  }
  function remover (id) {
    console.log("removi")
    const itemsRaw = localStorage.getItem("produto") 
    let items = JSON.parse(itemsRaw);
    removeObjectWithId(items , id)
    localStorage.removeItem("produto")
    localStorage.setItem("produto" , JSON.stringify(items))
    
  }
  // function handleClick() {
    
  // }

  const items1 = localStorage.getItem("produto") 
  let items = JSON.parse(items1);
  // console.log(items1)
  console.log(items)

  return (
    <section className="checkoutBoX">
      <div className="carrinhoBox">
        <h1>Carrinho</h1>
        <div className="container-items">
          {items.map(({ id, name, colecao, }) => {
            
            return (
              <div key={id} className="product-box">
                <figure className="figure-product">
                  {/* <img
                    className="img-product"
                    src={nome}
                    alt=""
                  /> */}
                </figure>
                <div className="description-product">
                  <p className="product-name">{name}</p>
                  <p className="product-price">R$ {name}</p>
                  <p className="product-description">Descrição: {colecao}</p>
                </div>
                <div className="buttons-product">
                  <button  onClick={()=>remover(id)} className="remove-button" >Remover item</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="checkBox2">
        <Resume2 />
      </div>
    </section>
  );
};

export default CartC;
