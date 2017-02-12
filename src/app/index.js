import React                from 'react';
import {render}             from 'react-dom';
import injectTpEventPlugin  from 'react-tap-event-plugin';
import { AppContainer }     from 'react-hot-loader';
import Root                 from './Root';
import routes               from './routes/Routes';

import 'babel-polyfill';
import 'animate.css';
import 'jquery';
import 'whatwg-fetch';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style/index.scss';

const ELEMENT_TO_BOOTSTRAP  = 'root';
const BootstrapedElement    = document.getElementById(ELEMENT_TO_BOOTSTRAP);

injectTpEventPlugin();

const renderApp = appRoutes => {
  render(
    <AppContainer>
      <Root routes={appRoutes} />
    </AppContainer>,
    BootstrapedElement
  );
};

renderApp(routes);

if (module.hot) {
  module.hot.accept(
    './routes/Routes',
    () => {
      const newRoutes = require('./routes/Routes').default;
      renderApp(newRoutes);
    }
  );
}
