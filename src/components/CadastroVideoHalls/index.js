import React from "react";
import DefaultPage from "../DefaultPage";
import {  Link} from 'react-router-dom';

function CadastraVideo() {
    return (
        <div>
            <DefaultPage>
                <h1>Cadastro Videos</h1>
                <Link to="/cadastro/categoria">
                    Cadastrar Categoria
                 </Link>

            </DefaultPage>

        </div>
    );
}

export default CadastraVideo;