import React from 'react';

import { AppWrapper } from './styled';

import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

// import WatchButton from './components/BannerMain/styles'

function Home() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
          'O que é Back-end?' +
          'JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores.' +
          'Mas o que eles fazem, afinal? Descubra!'
        }
      />

      <h1>Listar os filmes</h1>

      {/* <WatchButton as="a" href="https://www.youtube.com/watch?v=Uh0Kn2aXEqY"></WatchButton> */}

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Carousel category={dadosIniciais.categorias[3]} />

      <Carousel category={dadosIniciais.categorias[4]} />

      <Carousel category={dadosIniciais.categorias[5]} />

      <Footer />
    </AppWrapper>
  );
}

export default Home;
