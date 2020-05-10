# v7.0.2

- upgrade `react-router` to `v5`
- get rid of `yarn` and move to `npm`
- migration to `react-testing-library`
- `reactstrap` upgrade

# v7.0.1

- test migration from enzyme to [react-testing-library](https://github.com/testing-library/react-testing-library) (_because of useEffect hook not being testable with enzyme_)

# v7.0.0

- React 16.8.x to 16.9.x
- migrate front to Typescript
- replace Uglyfy-js webpack plugin with TerserPlugin (_for hooks compatibility_)

# v6.1.1

- upgrade `styled-components` to v4+ (_now uses createGlobalStyle()_)
- upgrade `loadable-components` to 2.2.3 (_max version compatible with reactsnap, avoiding flashing on application start_)
- upgrade `react-snap` to lastest
- upgrade dependencies
- upgrade `react-hot-loader` (_redux store initialization and top index file code changed_)
- migrate server code to Typescript (_NOTE: server code is no more in **ROOT**/src/server but in **ROOT**/server_)

# v6.1.0

- migration to `bootstrap 4` and `reactstrap`
- drop `react-router-redux@alpha5` (_deprecated_) for `react-connected-router`

# v6.0.0

- upgrade to `React 16.3.x`
- upgrade to `webpack 4`
- upgrade to `react-hot-loader v4`
- drop `CSS Module` in favor of `styled-components` (_scoped style, theme support, better scaling in huge applications, simplify toolchain and keep nearly SASS syntax_)
- add `flow types` (_even a little typing at least for better dev experience_)
- drop `prop-types`(_static and dynamic typing apart, flow type does far more so avoid writing 2 differents typing system_)
- `workbox-webpack-plugin` (_service worker caching powerful tool from Google_)
- [loadable-components](https://github.com/smooth-code/loadable-components) (_split your code: here splitted just by routes, by you can split a component level if you feel the need_)
- [react-snaphot](https://github.com/stereobooster/react-snap) (_SEO friendly_)
- `webpack-bundle-analyzer`: analyze your bundle size (_maybe you should split or lazy load some part of your application: you will see clearly how to fix that_)
- drop `moment` for `date-fns` (_since far smaller size and job's done_)
- drop `mocha` and all library around it for `jest` (_all in one toolset and snapshot testing_)

# v5.0.0

- upgrade to React 16.x
- `react-router 4+` with `react-router-redux ^5.0.0-alpha.8` (_read this [nice article about migrating from react-router 3 to react-router 4](https://codeburst.io/react-router-v4-unofficial-migration-guide-5a370b8905a)_)
- add few flow types (_still keep propTypes_)
- updated hot reload (_[read hot reload starter](https://gaearon.github.io/react-hot-loader/getstarted/)_)
- use `CSS module` (_keep coding style with SASS but get benefit of css module for a more peasant and component pattern coding_)

# v4.0.0

- upgrade `React 15.6.x +`
- upgrade to `webpack 3`
- clean with rimraf before bundles building
- scroll to top on route
- login view
- protected view
- JWT auth. private views
- file organization (_views connected to redux are no more in container but are index.js in same directory as View.js_)

# v3.0.0

- upgrade to `react-router v4`

# v2.3.0

- upgrade to `webpack 2.x`
- upgrade `React 15.5.x +`
- `PropTypes` from 'prop-types' (_react 15.5 breaking change_)

# v2.2.0

- `cross-env` added so no more particular windows command
- serve dev and prod bundles
- `npm run serve-dev`: with server hot reload (_uses nodemon_)
- `npm run serve-prod`: production like node-express server

# v2.1.0

- `whatwg-fetch` is now replaced by [axios](https://github.com/mzabriskie/axios).
- `react-addons-shallow-compare` is removed since ReactJS 15.4+ PureComponent does the job
- splits vendors script and css from main bundle (_extract-text-webpack-plugin v1.x_)
- create map file (DEV)
- prepared `launch.json` for VSCode debugger
- add typescript types (typings)
- add flow types (flow-typed)

# v2.0.0

- redux-devtools is now replaced by [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension).
