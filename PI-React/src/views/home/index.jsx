import React from 'react';
import Header from "../../components/header"
import Footer from '../../components/footer'
import CarouselHome from '../../components/home/carrosel';
import GridHome from '../../components/home/grid';
import ListHome from '../../components/home/categorias/index';
import "./style.sass"
import BannerHome from '../../components/home/Banner';

export const Home = () => {
    return (
        <>
        <aside>
            <Header/>
            <div className='CarouselH'>
            <CarouselHome />
            </div>
            <ListHome />
            
           <BannerHome/>
            <div className='FooterH'>
            <Footer/>
            </div>
            
        </aside>
        </>
    )

}