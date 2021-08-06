import React from 'react';
import ReactDom from 'react-dom';
import { App } from './components/App';
import { BrowserRouter,Route } from 'react-router-dom';


ReactDom.render(
  <BrowserRouter>
  <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById('root')
)