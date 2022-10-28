import React from 'react'
import logo from "../../images/WENDY_FUNDO_BRANCO_REDONDO@2x.png"
import './styled.sass'

const Footer = () => {
  return (
    <footer className='footerF'>
      <div className='conteudoG'>
        <div className="containerFooter">
            <div className="logo-icon">
                <img className='logoFooter' src={logo} alt="wedy" />
            </div>
            <div className="infoF">
                <p><a href="mailto:wendytaylor.com.br">wendytaylor.com.br</a> <br/>
                    </p>

                
                <p >
                    AVENIDA PAULISTA, 4242 <br/>
                    BAIRRO CONSOLAÇÃO  <br/>
                    
                </p>
                
            </div>
            <div className="mapa">
              <iframe className='mapas' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14631.954336743434!2d-46.7724023!3d-23.532913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x739f0ddb0439cf94!2sDigital%20House%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1621457988095!5m2!1spt-BR!2sbr">

              </iframe>
                
            </div>
        </div>
        </div>
        <div className="last">wendytaylor 2022 - São paulo -Brasil</div>
    </footer>
  )
}

export default Footer