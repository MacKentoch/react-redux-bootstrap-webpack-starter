// import 'babel-polyfill';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { hot } from 'react-hot-loader/root';
import React from 'react';
import { hydrate, render } from 'react-dom';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import { loadComponents, getState } from 'loadable-components';
import Root from './Root';

// #region constants
const ELEMENT_TO_BOOTSTRAP = 'root';
const bootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);
// #endregion

// #region globals (styles, polyfill ...)
smoothScrollPolyfill.polyfill();
(window as any).__forceSmoothScrollPolyfill__ = true;
(window as any).snapSaveState = () => getState();

(async () => {
  console.log(
    'You have async support if you read this instead of "ReferenceError: regeneratorRuntime is not defined" error.',
  );
})();
// #endregion

// render app (hydrate for react-snap):
function renderApp(RootComponent: any) {
  const Application = RootComponent;
  // needed for react-snap:
  bootstrapedElement && bootstrapedElement.hasChildNodes()
    ? loadComponents().then(() => hydrate(<Application />, bootstrapedElement))
    : render(<Application />, bootstrapedElement);
}

renderApp(Root);
// #endregion
