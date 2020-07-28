import styled from 'styled-components'

import ButtomHalls from '../ButtomHalls'
import LogoHalls from '../LogoHalls'



const HeaderHalls = styled.header`
 display: flex;
 padding: 30px 40px; 
 justify-content: space-between;
 align-items: center; 
 background-color: var(--color-dark);
 border-bottom: 4px solid var(--color-primary-medium); 


 @media(max-width: 800px) {
        justify-content: center;
        padding: 15px 16px;
        & > ${LogoHalls} {
            height: 35px;
        }
        & > ${ButtomHalls} {
            background-color: var(--color-primary-medium);
            border-radius: 0;
            border: 0;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100vw;
        }
    }
`;

export default HeaderHalls;