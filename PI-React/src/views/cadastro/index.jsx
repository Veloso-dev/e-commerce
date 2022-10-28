import React from 'react'
import CadastroUsuario from '../../components/cadastroUsuario'
import Footer from '../../components/footer'
import Header from '../../components/header'
import "./style.sass"


const Cadastro = () => {
  return (
    <div>

    <Header />

    <CadastroUsuario />

    <div className='footerC'>
    <Footer />
    </div>


    </div>
  )
}

export default Cadastro