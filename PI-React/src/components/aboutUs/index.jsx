import '../../styles/global/main.sass'
import './style.sass'
import Bandeira from "../../images/bandeiralogo2.jpg"
import Joia from "../../images/joias6.png"


export const AboutUs = () => {
    return (
       
        <div>
            <div className='bandeira'>
                <img src= {Bandeira} alt="Bandeira Logo" />
            </div>
            <div className="objetivos">
                <div className="titulo">
                    <h1>Objetivos da marca</h1>
                </div>
                <div className="joias6">
                    <img src={Joia} alt="" />
                </div>
                <div className="sobre">
                    <p>
                        Trazer ao mercado um produto de design diferenciado e alegre,
                        desenvolvido no Brasil. A marca leva o DNA da família de Wendy,
                        que se inspirou principalmente no trabalho de esmaltação na
                        joalheria, muito característica da joalheria inglesa.
                        Temos a missão de levar o “Joie de Vivre” através do nosso design
                        alegre, atemporal e sem gêneros além de elevar a auto-estima    
                        de quem as usa e criar uma forte ponte emocional com público
                        brasileiro e internacional fazendo-os sentir-se feliz e muito
                        especial através do nosso design vintage afetivo.
                    </p>
                </div>
            </div>
            
        </div>
        
    )

}
