import React from 'react'
import './style.sass'
import DeleteIcon from '@mui/icons-material/Delete';
import AddAdress from './addAdress';
import IconButton from '@mui/material/IconButton';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';



function Endereco() {
    return (
        <div className='adressSection'>
            
            <div className="adressBar">
                <p className="adress">Avenida Genaro de Carvalho 2941, apto 302
                    Recreio dos Bandeirantes - Rio de Janeiro - RJ
                    22795-077</p>
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>

            </div>
            <div className="adressBar">
                <p className="adress">Avenida Genaro de Carvalho 2941, apto 302
                    Recreio dos Bandeirantes - Rio de Janeiro - RJ
                    22795-077</p>
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>

            </div>
            <div className="addAdressBtn">
        <IconButton size='large' aria-label="add">
                    <AddLocationAltIcon fontSize="inherit" />
                </IconButton>

        </div>
        <AddAdress/>

        </div>
    )
}

export default Endereco