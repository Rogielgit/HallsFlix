import React from 'react';

import LogoHalls from '../LogoHalls';
import ButtonHalls from '../ButtomHalls/index';
import { HeaderHalls } from './styleHeader';

import { Link } from "react-router-dom";


function Header() {

    return (
        <dev>
            <HeaderHalls>
                <Link to="/">
                    <LogoHalls></LogoHalls>
                </Link>
                <Link to="/cadastro/video">
                    <ButtonHalls>Novo video</ButtonHalls>
                </Link>
            </HeaderHalls>
        </dev>
    );
}

export default Header;