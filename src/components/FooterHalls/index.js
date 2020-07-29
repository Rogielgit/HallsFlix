import React from 'react';
import LogoHalls from  '../LogoHalls/index';
import LinkHalls from  '../LinkHalls/index';
import HighlighHalls from  '../HighlightHalls/index';
import {FooterHalls} from "./styleFooter";


function Footer() {
    return (
        <div>
            <FooterHalls>
            <LogoHalls>
            </LogoHalls>
            <p>
                Site feito na <HighlighHalls>#ImersãoReact</HighlighHalls> da {' '}
                <LinkHalls to="https://alura.com.br">Alura</LinkHalls>
            </p>
            </FooterHalls>
        </div>

    );
}

export default Footer;