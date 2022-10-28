import { React, useState, useEffect } from 'react'
import "./style.sass"

const url = "https://mocki.io/v1/9234e80f-9572-4d0a-8d55-e7020e912a3a"


const Resume2 = () => {

  const [repositories, setRepositories] = useState("")
  useEffect(() => {      
          fetch(url)
              .then(response => response.json())
              .then(data => setRepositories(data))
  }, []);  

  return (
    <div className='resume2'>
      <h2>{repositories.nome}</h2>
      <table>
        <p>{repositories.preco}</p>
      </table>
      <div className="resume-buttons2">
      <button>PIX</button>
      <button>BOLETO</button>
        <button>CARTÃO</button>
      </div>
    </div>
  )
}

export default Resume2
