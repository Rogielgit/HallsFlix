import styled from 'styled-components'
import LogoHalls from '../LogoHalls';

export const FooterHalls = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;    
    background-color: var(--color-dark);
    color: var(--color-grey-ligth);
    padding: 15rem 0;
    font-size: 1rem;
    padding: 20px 0;
    border-top: 4px solid var(--color-primary-medium);

    & > ${LogoHalls} {
        margin-bottom: 2rem;
    }
`;

