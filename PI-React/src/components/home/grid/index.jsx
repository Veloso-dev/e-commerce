import React from 'react'
import "./styled.sass"
import { useState, useEffect } from 'react';

const url = "https://mocki.io/v1/c12e210f-6d15-46ab-b5ae-9db8b138ea2b"



const GridHome = () => {

const [repositories, setRepositories] = useState([]);

useEffect(() => {
  fetch(url)
    .then(response => response.json())
    .then(data => setRepositories(data))

}, []);


  return (


    

    <section className='sectionGrid'>


{repositories.map((p, i) => {

return <article >
  <div >
    <img
      className="img_products"
      src="../images/joias2.png"
      alt="product"
    />
  </div>
  <div >
    <p>{p.nome}</p>
    <p>{p.descricao}</p>
  </div>
</article>


})}




      </section>


  )}

export default GridHome