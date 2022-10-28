import React from 'react'
import Banner from '../../../images/wendybanner.jpg'

import "./styled.sass"

const BannerHome = () => {
  return (
    <main className='bannerContainer'>
        <img className='banner' src={Banner} alt="Banner" />
    </main>
  )
}

export default BannerHome