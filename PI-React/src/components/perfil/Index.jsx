import React, { useState } from 'react'
import AlterCadastro from './alterarDados'
import VerPedidos from './pedidos'
import './style.sass'
import Header from '../header';
import Footer from '../footer';
import Userdata from './dadosUsuarios';
import Endereco from './enderecos';
import NestedList from './list';
//////////////////////////////////

function UserView() {
  const [active, setActive] = useState('perfil')

  return (
    <>
      <Header />
      <div className='user_view'>
        <NestedList setActive={setActive} />
        <div className="dataSection">
          {active === 'perfil' && <Userdata setActive={setActive} />}
          {active === 'endereco' && <Endereco />}
          {active === 'atualizar' && <AlterCadastro />}{active === 'pedido' && <VerPedidos />}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default UserView