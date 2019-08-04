import 'babel-polyfill';
import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
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

;(async () => {
  console.log('You have async support if you read this instead of "ReferenceError: regeneratorRuntime is not defined" error.');
})()
// #endregion

// render app (hydrate for react-snap):
bootstrapedElement && bootstrapedElement.hasChildNodes()
  ? loadComponents().then(() => hydrate(<Root />, bootstrapedElement))
  : render(<Root />, bootstrapedElement);
