import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadVideo from './pages/cadastro/video'; 
import CadCategoria from './pages/cadastro/categoria'; 
import Erro from './pages/pagina404'; 
import Home from './pages/home';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/cadastro/video" component={CadVideo} />
        <Route path="/cadastro/categria" component={CadCategoria} />
        <Route component={Erro} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
