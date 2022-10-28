import React from 'react'
import CheckoutC from '../../components/checkoutC'
import Footer from '../../components/footer'
import Header from '../../components/header'

import "./style.sass"
//CHECKOUT
const CheChout = () => {
  return (
    <div>

        <Header />

        <div className='conteudoCheck'>
        <CheckoutC />

        </div>


          <div className='footerCheck'>
        <Footer />

        </div>

    </div>
  )
}

export default CheChout