import { React, useState, useEffect } from 'react'
import './style.sass'
import api from '../../../services/index'

const link = "https://mocki.io/v1/f9b289d6-f9c2-4100-b6d7-d62c22e6b329"

function salvarLocalStorage(produto){
    localStorage.setItem("produto" , JSON.stringify(produto))
   const nomeLocal = localStorage.getItem("produto")
console.log(nomeLocal)
}


const Info = (props) => {

    const [repositories, setRepositories] = useState("")
    useEffect(() => {
        
            fetch(link)
                .then(response => response.json())
                .then(data => setRepositories(data))

        
    }, []);

    // try {

    let cardProduto = <>
        <span className="prdt-colection">{props.produto.colecao}</span>

        <h1 className="product-name">{props.produto.nome}</h1>

        <h2 className="product-price">RS{props.produto.preco}</h2>

        <form>
            <div className="size">
                <select name='tamanhos'>
                    <option value="" defaultChecked>Tamanho</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                </select>
            </div>

            <div className="quantity">
                <select name='quantidade'>
                    <option value="" defaultChecked>Quantidade</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>

            <button onClick={()=>salvarLocalStorage(repositories)}  className='btnAdd'>Adcionar à sacola</button>
        </form>
    </>

    let carregando = <h1 className="product-name">Carregando ...</h1>
    return (
        <div className="product-info">
            {repositories ? cardProduto : carregando}
        </div>
    )
}


export default Info