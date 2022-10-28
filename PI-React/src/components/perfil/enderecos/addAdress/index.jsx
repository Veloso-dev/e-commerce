import React from 'react'
import './style.sass'

function AddAdress() {
  return (
    <div>
        <form method='POST' className='addAdressForm'>
        <label htmlFor='endereco' className='labelForm'>Endereço</label>
            <input type="text" name='endereco' id='addEndereco' placeholder='Ex: Rua das flores 123, apto 2'/>

            <label htmlFor='cep' className='labelForm'>CEP</label>
            <input type="num" name='CEP' id='addCEP' placeholder='Apenas números '/>

            <label htmlFor='bairro' className='labelForm'>Bairro</label>
            <input type="text" name= "bairro" id= 'addBairro' placeholder='Ex: Rio de Janeiro, São Paulo...' />

            <label htmlFor='uf' className='labelForm'>UF</label>
            <input type="text" name= "uf" id= 'addUF' placeholder='Ex: RJ, SP...' />

            <button id='buttonAdd'> Adcionar Endereço </button>
        </form>
    </div>
  )
}

export default AddAdress