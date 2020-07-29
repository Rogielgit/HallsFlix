import React from "react";
import DefaultPage from "../DefaultPage";
import { Link } from 'react-router-dom';

function CadastraCategoria() {
    return (
        <div>
            <DefaultPage>
                <h1>Cadastro de Categoria</h1>
                <form>
                    <label>
                        Nome da Categoria:
                         <input
                            type="text"
                        />
                    </label>
                    <button>
                        Cadastrar
                   </button>
                </form>

                <Link to="/">
                    Ir para home
                </Link>
            </DefaultPage>
        </div>
    );
}

export default CadastraCategoria;