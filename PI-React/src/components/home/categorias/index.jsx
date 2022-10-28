import React from 'react'
import { Link } from 'react-router-dom';
import './styled.sass'
import Anel from '../../../images/Categorias/Anel.jpg'
import Pulseira from '../../../images/Categorias/Bracelete.jpg'
import Brinco from '../../../images/Categorias/Brinco.jpg'
import Colar from '../../../images/Categorias/Colar.jpg'


const ListHome = () => {

    return (
        <section className='repository-list'>
            <h2 className='srcForCat'>Pesquise por categorias:</h2>

            <section className='repositoryMap'>
                <Link to={`/categorias/${1}`}>
                    <section className='secHome'>


                        <article className='artHome'>

                            <img className='img-article' src={Brinco} alt="Brinco" />

                            <p>Brincos</p>

                        </article>

                    </section>

                </Link>
                <Link to={`/categorias/${2}`}>
                    <section className='secHome'>


                        <article className='artHome'>

                            <img className='img-article' src={Pulseira} alt="Pulseira" />

                            <p>Pulseiras</p>

                        </article>

                    </section>

                </Link>
                <Link to={`/categorias/${3}`}>
                    <section className='secHome'>
                        <article className='artHome'>

                            <img className='img-article' src={Colar} alt="Colar" />
                            <p>Colares</p>

                        </article>

                    </section>
                </Link>
                <Link to={`/categorias/${4}`}>
                    <section className='secHome'>
                        <article className='artHome'>

                            <img className='img-article' src={Anel} alt="Anel" />
                            <p>Anéis</p>
                        </article>
                    </section>
                </Link>
            </section>
        </section>
    )
}

export default ListHome