React 16.3+ React-Router 4 + Redux + Bootstrap + Webpack 4 with Hot Reload and redux-devtools-extension STARTER
==========
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/MacKentoch/react-redux-bootstrap-webpack-starter)
[![Build Status](https://travis-ci.org/MacKentoch/react-redux-bootstrap-webpack-starter.svg?branch=master)](https://travis-ci.org/MacKentoch/react-redux-bootstrap-webpack-starter)
[![Coverage Status](https://coveralls.io/repos/github/MacKentoch/react-redux-bootstrap-webpack-starter/badge.svg?branch=master)](https://coveralls.io/github/MacKentoch/react-redux-bootstrap-webpack-starter?branch=master)

> My best React + redux project starter.

- *webpack is as simple as possible*
- *ReactJS is written with `optimization tricks` (stateless, pure render, PureComponent...).*
- *`pure front-end` = server independant (use whatever you want as server: NodeJS, Rails, .NET...)*
- `SPA` but `SEO` and/or `PWA` friendly since use of `dynamic imports` and `application snapshot`.

*Concept behind:* same as [react-bootstrap-webpack-starter](https://github.com/MacKentoch/react-bootstrap-webpack-starter) **but added `Redux` and amazing and helpful [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension).**


![preview](./preview/preview.png)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMacKentoch%2Freact-redux-bootstrap-webpack-starter.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FMacKentoch%2Freact-redux-bootstrap-webpack-starter?ref=badge_shield)

## Breaking changes since v6.1.0
- migration to `bootstrap 4` and `reactstrap`
- drop `react-router-redux@alpha5` (*deprecated*) for `react-connected-router`

## Breaking changes since v6.0.0

* upgrade to `React 16.3.x`
* upgrade to `webpack 4`
* upgrade to `react-hot-loader v4`
* drop `CSS Module` in favor of `styled-components` (_scoped style, theme support, better scaling in huge applications, simplify toolchain and keep nearly SASS syntax_)
* add `flow types` (*even a little typing at least for better dev experience*)
* drop `prop-types`(*static and dynamic typing apart, flow type does far more so avoid writing 2 differents typing system*)
* `workbox-webpack-plugin` (_service worker caching powerful tool from Google_)
* [loadable-components](https://github.com/smooth-code/loadable-components) (_split your code: here splitted just by routes, by you can split a component level if you feel the need_)
* [react-snaphot](https://github.com/stereobooster/react-snap) (*SEO friendly*)
* `webpack-bundle-analyzer`: analyze your bundle size (_maybe you should split or lazy load some part of your application: you will see clearly how to fix that_)
* drop `moment` for `date-fns` (*since far smaller size and job's done*)
* drop `mocha` and all library around it for `jest` (*all in one toolset and snapshot testing*)

## Breaking changes since v5.0.0
- upgrade to React 16.x
- `react-router 4+` with `react-router-redux ^5.0.0-alpha.8` (*read this [nice article about migrating from react-router 3 to react-router 4](https://codeburst.io/react-router-v4-unofficial-migration-guide-5a370b8905a)*)
- add few flow types (*still keep propTypes*)
- updated hot reload (*[read hot reload starter](https://gaearon.github.io/react-hot-loader/getstarted/)*)
- use `CSS module` (*keep coding style with SASS but get benefit of css module for a more peasant and component pattern coding*)

## Breaking changes since v4.0.0
- upgrade `React 15.6.x +`
- upgrade to `webpack 3`
- clean with rimraf before bundles building
- scroll to top on route
- login view
- protected view
- JWT auth. private views
- file organization (*views connected to redux are no more in container but are index.js in same directory as View.js*)

## Breaking changes since v3.0.0
- upgrade to `react-router v4`


## Breaking changes since v2.3.0
- upgrade to `webpack 2.x`
- upgrade `React 15.5.x +`
 - `PropTypes` from 'prop-types' (*react 15.5 breaking change*)


## Breaking changes since v2.2.0
- `cross-env` added so no more particular windows command
- serve dev and prod bundles
 - `npm run serve-dev`: with server hot reload (*uses nodemon*)
 - `npm run serve-prod`: production like node-express server


## Breaking changes since v2.1.0
- `whatwg-fetch` is now replaced by [axios](https://github.com/mzabriskie/axios).
- `react-addons-shallow-compare` is removed since ReactJS 15.4+ PureComponent does the job
- splits vendors script and css from main bundle (*extract-text-webpack-plugin v1.x*)
- create map file (DEV)
- prepared `launch.json` for VSCode debugger
- add typescript types (typings)
- add flow types (flow-typed)

## Breaking changes since v2.0.0
- redux-devtools is now replaced by [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension).

## Detailed Content

**Front:**
- React JS (16.3+ - [github :link:](https://github.com/facebook/react))
- Redux (*as you application grows managing state will be a serious concern, save pain with Redux*)
- React-Redux (*Redux is not specific to ReactJS, you could easily use it with Angular2 for instance*)
- redux-devtools-extension ([github :link:](https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension))
- React-Router-Redux 5.x ([github :link:](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux))
- react-router (4.x- [github :link:](https://github.com/reactjs/react-router))
- Bootstrap (3.x - [github :link:](https://github.com/twbs/bootstrap))
- React-Bootstrap ([github :link:](https://github.com/react-bootstrap/react-bootstrap))
- font-awesome ([github :link:](https://github.com/FortAwesome/Font-Awesome))
- animate.css ([github :link:](https://github.com/daneden/animate.css))
- classnames ([github :link:](https://github.com/JedWatson/classnames))
- react-motion ([github :link:](https://github.com/chenglou/react-motion))
- Webpack 4.x ([github :link:](https://github.com/webpack/webpack))
- babel 6+ ([github :link:](https://github.com/babel/babel))
- axios ([github :link:](https://github.com/mzabriskie/axios) *Why: simple, complete, isomorphic ...*)

**Tool chain:**
- babel 6+
- eslint
- webpack 4
- hot reload
- loaders
  - `js` / `jsx`
  - css
  - json
  - images formats
  - svg and fonts formats

**tests:**
- Jest
- enzyme


## Usage

### Install

```bash
npm install
```
### bundle dev mode (*+ redux-devtools*)

```bash
npm run dev
```

### dev : hot reload mode (*+ redux-devtools*)

```bash
npm run start
```

### tests

```bash
npm run test
```

### bundle production mode


```bash
npm run prod
```

### mini node-express server (for dev or prod bundles)

with server hot reload:
```bash
npm run serve-dev
```

without hot reload:
```bash
npm run serve-prod
```


## License

The MIT License (MIT)

Copyright (c) 2017 Erwan DATIN

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMacKentoch%2Freact-redux-bootstrap-webpack-starter.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FMacKentoch%2Freact-redux-bootstrap-webpack-starter?ref=badge_large)