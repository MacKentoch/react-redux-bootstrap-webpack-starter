// @flow weak

import React                from 'react';
import {render}             from 'react-dom';
import injectTpEventPlugin  from 'react-tap-event-plugin';
import { AppContainer }     from 'react-hot-loader';
import { Provider }         from 'react-redux';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import configureStore       from './redux/store/configureStore';
import 'animate.css';
import 'jquery';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style/index.scss';
import Root from './Root';

// smoothscroll polyfill
smoothScrollPolyfill.polyfill();
// force polyfill (even if browser partially implements it)
window.__forceSmoothScrollPolyfill__ = true;

const ELEMENT_TO_BOOTSTRAP  = 'root';
const BootstrapedElement    = document.getElementById(ELEMENT_TO_BOOTSTRAP);

injectTpEventPlugin();

const store = configureStore();

const renderApp = RootComponent => {
  render(
    <AppContainer
      warnings={false}
    >
      <Provider store={store}>
        <RootComponent />
     </Provider>
    </AppContainer>,
    BootstrapedElement
  );
};

renderApp(Root);

if (module.hot) {
  module.hot.accept(
    './Root',
    () => {
      const RootComponent = require('./Root').default;
      renderApp(RootComponent);
    }
  );
}
