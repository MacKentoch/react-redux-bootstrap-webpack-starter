// @flow

// #region imports
import 'babel-polyfill'; // NOTE: REALLY important to avoid "regeneratorRuntime is not defined"
import React from 'react';
import { hydrate, render } from 'react-dom';
import injectTpEventPlugin from 'react-tap-event-plugin';
import { AppContainer } from 'react-hot-loader';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import injectGlobalStyle from './style/injectGlobalStyles';
import Root from './Root';
import { getLocationOrigin } from './services/API/fetchTools';
// #endregion

// #region constants
const ELEMENT_TO_BOOTSTRAP = 'root';
const bootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);
// #endregion

// #region globals (styles, polyfill ...)
// smoothscroll polyfill
smoothScrollPolyfill.polyfill();
// force polyfill (even if browser partially implements it)
window.__forceSmoothScrollPolyfill__ = true;

injectGlobalStyle();
injectTpEventPlugin();

// used by webpack-require-from:
global.getBaseUrl = getLocationOrigin();
// #endregion

// #region render (with hot reload if dev)
const renderApp = RootComponent => {
  const Application = () => (
    <AppContainer>
      <RootComponent />
    </AppContainer>
  );

  // needed for react-snap:
  if (bootstrapedElement.hasChildNodes()) {
    hydrate(<Application />, bootstrapedElement);
  } else {
    render(<Application />, bootstrapedElement);
  }
};

renderApp(Root);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const RootComponent = require('./Root').default;
    renderApp(RootComponent);
  });
}
// #endregion
