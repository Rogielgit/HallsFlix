import React from 'react';

import HeaderHalls from '../HeaderHalls/index';
import FooterHalls from '../FooterHalls/index';

import styled from  'styled-components';

const Main = styled.main`
background-color: var(--color-dark);
color: var( --color-grey-ligth);
flex-direction: column;
flex: 1;
padding-left: 5%;
padding-right: 5%;
padding-top: 50px;

`;


function DefaultPage({body}){

return (
    <>
  <HeaderHalls></HeaderHalls>
  <Main>
    {body}
    </Main>
  <FooterHalls></FooterHalls>
  </>
);

}

export default DefaultPage;


