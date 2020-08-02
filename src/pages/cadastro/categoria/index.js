import React from 'react';
import PageDefaut from '../../../components/PageDefaut';
import { Link } from 'react-router-dom';


function CadCategoria(){
    return(
        <PageDefaut>
            <h1> Cadastro de Categorias </h1>

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

            <Link to="/">Voltar para Home</Link>
        </PageDefaut>
    )
}

export default CadCategoria;