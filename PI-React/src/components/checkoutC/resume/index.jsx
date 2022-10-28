import React from 'react';
import { Link } from "react-router-dom"


import "./style.sass"

const Resume = () => {
  return (
    <div className='resume'>
      <h2>Resumo de compras</h2>
      <table>
        <p>Valor total: R$ xxx,xx</p>
      </table>
      <div className="resume-buttons">
        <Link to={"/cart"}>
        <button className='SPP'>Seguir para o Pagamento</button>
        </Link>
        <Link to={"/products"}>
        <button className='CC'>Continuar comprando</button>
        </Link>
      </div>
    </div>
  )
}

export default Resume
