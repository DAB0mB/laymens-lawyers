import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './styles'
import './scripts'
import IndexController from './controllers/IndexController'
import ThankYouController from './controllers/ThankYouController'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IndexController} />
      <Route exact path="/thank-you" component={ThankYouController} />
    </Switch>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
