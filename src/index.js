import React from 'react';
import ReactDOM from 'react-dom';
import './styles/settings/colors.css'
import './styles/reset.css'
import Home from './Home/index';
import CadastraVideo from './components/CadastroVideoHalls/index';
import CadastraCategoria from './components/CadastraCategoria/index';


import { BrowserRouter, Switch, Route } from "react-router-dom";



ReactDOM.render(
  <BrowserRouter>

  <Switch>
    <Route path='/' component={Home} exact></Route>
    <Route path="/cadastro/video" component={CadastraVideo}></Route>
    <Route path="/cadastro/categoria" component={CadastraCategoria}></Route>
    <Route component={() => (<div>Not found</div>)}></Route>
  </Switch>
    

  </BrowserRouter>,
  document.getElementById('root')
);