import React from 'react'
import CartC from '../../components/cart'
import Footer from '../../components/footer'
import Header from '../../components/header'


import "./style.sass"

const Cart = () => {
  return (
    <div>

        <Header />

        <div className='conteudoCart'>
        <CartC />
        </div>


        <div className='footerCart'>
        <Footer />
        </div>


    </div>
  )
}

export default Cart