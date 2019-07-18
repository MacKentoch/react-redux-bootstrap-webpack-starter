/* eslint no-process-env:0 */
let configureStore = null;

if (process.env.NODE_ENV === 'production') {
  configureStore = require('./configureStore.prod').default;
  // const {history} = require('./configureStore.prod');
  // export history;
} else {
  configureStore = require('./configureStore.dev').default;
  // const {history} = require('./configureStore.dev');
  // export history;
}
export default configureStore;
