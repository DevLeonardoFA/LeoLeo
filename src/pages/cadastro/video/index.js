import React from 'react';
import PageDefaut from '../../../components/PageDefaut'
import { Link } from 'react-router-dom';

function CadVideo(){
    return(
        <PageDefaut>
            <h1>Página de Cadastro de Videos</h1>

            <Link to="/cadastro/categoria">Voltar para Home</Link>
        </PageDefaut>
    )
}

export default CadVideo;