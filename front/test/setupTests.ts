// to avoid: Warning: React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills
// @ts-ignore
require('raf/polyfill');
// @ts-ignore
require('jest-localstorage-mock');
// @ts-ignore
require('core-js/stable');
// @ts-ignore
require('regenerator-runtime/runtime');
// @ts-ignore
const Enzyme = require('enzyme');
// @ts-ignore
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
