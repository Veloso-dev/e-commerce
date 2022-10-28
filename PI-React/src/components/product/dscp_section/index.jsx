import React from 'react'
import './style.sass'

const Description = (props) => {
    return (
        <>
            <h2>Descrição</h2>

            <div className='description-box'>
                <p>{props.produto.descricao}</p>
            </div>
        </>
    )
}

export default Description