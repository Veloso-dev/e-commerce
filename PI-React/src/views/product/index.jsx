import '../../styles/global/main.sass'
import './style.sass'
import Display from "../../components/product/img_section"
import Info from "../../components/product/info_section"
import Description from "../../components/product/dscp_section"
import Header from '../../components/header'
import Footer from '../../components/footer'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import api from '../../services'

export const Product = (props) => {
    const [produto, setProduto] = useState({produtoImagem:[]});
    const idProduto = useParams()
    useEffect(() => {
        api.get(`/produtos/${idProduto.id}`)
            .then(res => {
                setProduto((JSON.parse(JSON.stringify(res.data))))
            })
    }, []);

    return (

        <>
            <Header />
            <section className="product-section">
           

                <Display produto = {produto} />

                <Info produto = {produto} />

            </section>

            <section className="product-description">

                <Description produto = {produto}/>
            
            </section>
            <Footer />

        </>
    )
}