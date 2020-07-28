import React from 'react';
import LogoHalls from '../src/components/LogoHalls/index'
import HeaderHalls from '../src/components/HeaderHalls/index'
import ButtonHalls from './components/ButtomHalls';
import FooterHalls from './components/FooterHalls';
import HighlighHalls from './components/HighlightHalls';
import LinkHalls from './components/LinkHalls';


function App() {
  return (    
    <>
    <HeaderHalls>
      <LogoHalls></LogoHalls>
      <ButtonHalls>Novo video</ButtonHalls>     
      </HeaderHalls>   
      <FooterHalls>
        <LogoHalls>
        </LogoHalls>
        <p>
          Site feito na <HighlighHalls>#ImersãoReact</HighlighHalls> da {' '}
          <LinkHalls href="https://alura.com.br">Alura</LinkHalls>
        </p>
      </FooterHalls> 
      </>
  );
}

export default App;