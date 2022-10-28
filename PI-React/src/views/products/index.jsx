import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer'
import Header from '../../components/header'
import ProductsC from '../../components/products'
import api from '../../services'
import "./style.sass"

const Products = (para) => {

  const [produtos, setProdutos] = useState([]);
  const idCategoria = useParams()

  function loadProdutos() {
    if (idCategoria.id) {
      api.get(`/categoria/${idCategoria.id}/produtos`)
        .then(response => {
          setProdutos(response.data)
        })
    } else {
      api.get(`/produtos/todos`)
        .then(response => {
          setProdutos(response.data)
        })
    }
  }
    useEffect(() => {
      loadProdutos()
    }, []);

    return (
      <div>
        <Header />
        
        <ProductsC produtos={produtos} />

        <div className='footerP'>
          <Footer />
        </div>
      </div>
    )
  }

  export default Products