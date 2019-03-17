React 16.8+ React-Router 4 + Redux + Bootstrap + Webpack 4 with Hot Reload and redux-devtools-extension STARTER
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

## Detailed Content

**Front:**
- React JS (16.8+ - [github :link:](https://github.com/facebook/react))
- Redux (*as you application grows managing state will be a serious concern, save pain with Redux*)
- React-Redux (*Redux is not specific to ReactJS, you could easily use it with Angular2 for instance*)
- redux-devtools-extension ([github :link:](https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension))
- connected-react-router 4 ([github :link:](https://github.com/supasate/connected-react-router))
- react-router (4.x- [github :link:](https://github.com/reactjs/react-router))
- Bootstrap (4.x - [github :link:](https://github.com/twbs/bootstrap))
- reactstrap ([github :link:](https://github.com/reactstrap/reactstrap))
- loadable-components - work with reactsnap for better static website performance - (*stuck to pre v2.2.3+ breakings changes, waiting for a new solution see [PR](https://github.com/stereobooster/react-snap/pull/338/commits/adf107b4bff212a854a93e2d90f89d369433a807)*)
- font-awesome ([github :link:](https://github.com/FortAwesome/Font-Awesome))
- animate.css ([github :link:](https://github.com/daneden/animate.css))
- classnames ([github :link:](https://github.com/JedWatson/classnames))
- react-motion ([github :link:](https://github.com/chenglou/react-motion))
- Webpack 4.x ([github :link:](https://github.com/webpack/webpack))
- babel 7+ ([github :link:](https://github.com/babel/babel))
- axios ([github :link:](https://github.com/mzabriskie/axios) *Why: simple, complete, isomorphic ...*)

**Tool chain:**
- babel 7+
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

## Changelog

[Here](./CHANGELOG.md)

## Usage

### Install

```bash
yarn install
```
### bundle dev mode (*+ redux-devtools*)

```bash
yarn run dev
```

### dev : hot reload mode (*+ redux-devtools*)

```bash
yarn run start
```

### tests

```bash
yarn run test
```

### bundle production mode

```bash
yarn run prod
```

### mini node-express server (for dev or prod bundles)

with server hot reload:

```bash
yarn run serve-dev
```

without hot reload:

```bash
yarn run serve-prod
```

## Donate

Do you use & like react-redux-bootstrap-webpack-starter but you don’t find a way to show some love?
If yes, please consider donating to support this project. Otherwise, no worries, regardless of whether there is support or not, I will keep maintaining this project. Still, if you buy me a cup of coffee I would be more than happy though 😄

[![Support via PayPal](./assets/Paypal-button.png)](https://www.paypal.me/ErwanDatin/)

## License

The MIT License (MIT)

Copyright (c) 2019 Erwan DATIN

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMacKentoch%2Freact-redux-bootstrap-webpack-starter.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FMacKentoch%2Freact-redux-bootstrap-webpack-starter?ref=badge_large)
