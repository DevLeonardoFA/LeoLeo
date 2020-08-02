import React from 'react';
import PageDefaut from '../../../components/PageDefaut';
import { Link } from 'react-router-dom';


function CadCategoria(){
    return(
        <PageDefaut>
            Categorias
            <Link to="/">Voltar para Home</Link>
        </PageDefaut>
    )
}

export default CadCategoria;