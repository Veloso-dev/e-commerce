import React, { useState } from 'react';
import Footer from '../../components/footer'
import Header from '../../components/header'
import LoginCadastro from '../../components/login'
import api from '../../services';

import "./style.sass"



const Login = () => {
  return (
    <div>


    <Header  />

    <div className='loginCadastro'>
    <LoginCadastro />
    </div>

    <div className='footerV'>
    <Footer />
    </div>


        
    </div>
  )
}

export default Login