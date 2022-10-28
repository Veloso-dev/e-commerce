import './style.sass'
import { React } from 'react'


const Display = (props) => {
    

    return ( 
            <div className="product-images">
                {/* {props.produto.produtoImagem.map((p,i) =>{
                    <p>{p}</p>
                })} */}
                {props.produto.produtoImagem && props.produto.produtoImagem.length &&<img className="img-1" src={props.produto.produtoImagem[0].nome} alt="asbdauidhasdhasuih" />}

            </div>
       
    )
}

export default Display