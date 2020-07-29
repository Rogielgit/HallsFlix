import React from 'react';
import FooterHalls from '../components/FooterHalls/index';
import BannerMain from '../components/BannerHallsMain/index';
import Carousel from '../components/CarouselHalls/index';
import dadosIniciais from '../data/dados_iniciais.json';
import HeaderHalls from '../components/HeaderHalls/index';



function Home() {
  return (
    <>
      <HeaderHalls></HeaderHalls>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"test"}
      >
      </BannerMain>
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      > </Carousel>


      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      > </Carousel>

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      > </Carousel>

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      > </Carousel>

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      > </Carousel>

       <FooterHalls></FooterHalls>
    
    </>
  );
}

export default Home;