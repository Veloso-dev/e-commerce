import React from 'react'
import Payment from './payment'
import Resume from './resume'

import "./style.sass"


const CheckoutC = () => {
  return (
    <section className='checkoutBoX'>
      <div className='checkBox'>
      <Payment />
      </div>
      <Resume />
    </section>
  )
}

export default CheckoutC 