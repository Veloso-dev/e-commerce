import React, { useState, useEffect } from 'react'
import './style.sass'
import api from '../../../services';

function Userdata(props) {
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [telefone, setTelefone] = useState()
    

    const aaaa = async ()=>{
        const user = localStorage.getItem("WT::token");
        const result = await api.post("/users/perfil",{token:user})
        console.log(result.data)
        setNome(result.data.nome)
        setEmail(result.data.email)
        setTelefone(result.data.telefone)
    }
    useEffect(()=>{
        aaaa()
    },[])

    return (
        <div className='data2'>
            <h1 id='myDataTitle'> Meus dados</h1>
            <div className='dataDiv'>
                <h3 className='label'>Nome</h3>
                <p>{nome}</p>
                <h3 className='label'>E-mail</h3>
                <p>{email}</p>
                <h3 className='label'>Telefone</h3>
                <p>{telefone}</p>
                <div className='divBtn'>
                <button onClick={()=> props.setActive('atualizar')} className='editdata'>Editar dados</button>
                </div>
            </div>
        </div>
    )
}

export default Userdata