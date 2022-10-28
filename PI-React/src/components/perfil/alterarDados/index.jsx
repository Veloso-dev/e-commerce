import React, { useState, useEffect } from 'react'
import api from '../../../services';
import "./style.sass";



const AlterCadastro = (props) => {

  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [telefone, setTelefone] = useState()
  const user = localStorage.getItem("WT::token");
  console.log(user)
  const aaaa = function (){
      api.patch('users/alterar',{nome, email, telefone, token:user})
  }
  const bbbb = async ()=>{
    const user = localStorage.getItem("WT::token");
    const result = await api.post("/users/perfil",{token:user})
    console.log(result.data)
    setNome(result.data.nome)
    setEmail(result.data.email)
    setTelefone(result.data.telefone)
}
useEffect(()=>{
    bbbb()
},[])

  return (

    < div className = "userDataSection" >


    <div className='userDataBox'>
      <h1 id='dataTitle'>Alterar dados</h1>

      <div className='dataForm'>
        <label  htmlFor='Nome' className='labelForm'>Nome Completo</label>
        <input onChange={(value)=> setNome(value.target.value)} value= {nome} type="text" name='Nome' id='altCad' placeholder='Nome' />

        <label htmlFor='email' className='labelForm'>E-mail</label>
        <input onChange={(value)=> setEmail(value.target.value)} value= {email}  type="email" name='email' id='altEmail' placeholder='E-mail' />

        <label htmlFor='telefone' className='labelForm'>Telefone</label>
        <input onChange={(value)=> setTelefone(value.target.value)} value= {telefone}  type="tel" name="telefone" id='altTel' placeholder='Telefone' />



        <button onClick={aaaa} className='editdata2'>Salvar</button>


      </div>






    </div>

    </div >
  )
}

export default AlterCadastro









