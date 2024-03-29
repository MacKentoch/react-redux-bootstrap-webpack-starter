# React 16.14 (Typescript) React-Router 5 + Redux + Bootstrap + Webpack 5 with Hot Reload and redux-devtools-extension STARTER

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/MacKentoch/react-redux-bootstrap-webpack-starter)
[![Build Status](https://travis-ci.org/MacKentoch/react-redux-bootstrap-webpack-starter.svg?branch=master)](https://travis-ci.org/MacKentoch/react-redux-bootstrap-webpack-starter)
[![Coverage Status](https://coveralls.io/repos/github/MacKentoch/react-redux-bootstrap-webpack-starter/badge.svg?branch=master)](https://coveralls.io/github/MacKentoch/react-redux-bootstrap-webpack-starter?branch=master)

> My best React + redux project starter.

- _webpack is as simple as possible_
- _ReactJS is written with `optimization tricks` (stateless, hooks, pure render, PureComponent...)._
- _`pure front-end` = server independant (use whatever you want as server: NodeJS, Rails, .NET...)_
- `SPA` but `SEO` and/or `PWA` friendly since use of `dynamic imports` and `application snapshot`.

_Concept behind:_ same as [react-bootstrap-webpack-starter](https://github.com/MacKentoch/react-bootstrap-webpack-starter) **but added `Redux` and amazing and helpful [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension).**

![preview](./preview/preview.png)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMacKentoch%2Freact-redux-bootstrap-webpack-starter.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FMacKentoch%2Freact-redux-bootstrap-webpack-starter?ref=badge_shield)

## Detailed Content

**Front:**

- Typescript
- React JS (16.14 - [github :link:](https://github.com/facebook/react))
  - NOTE: React 17+ is not really developer friendly "yet" considering `react-refresh` (= _hot reload replacement: RIP my friend_) to be not fully stable
- Redux (_as you application grows managing state will be a serious concern, save pain with Redux_)
- React-Redux (_Redux is not specific to ReactJS, you could easily use it with Angular2 for instance_)
- redux-devtools-extension ([github :link:](https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension))
- react-router (4.x- [github :link:](https://github.com/reactjs/react-router))
- Bootstrap (4.x - [github :link:](https://github.com/twbs/bootstrap))
- reactstrap ([github :link:](https://github.com/reactstrap/reactstrap))
- loadable-components - work with reactsnap for better static website performance - (_stuck to pre v2.2.3+ breakings changes, waiting for a new solution see [PR](https://github.com/stereobooster/react-snap/pull/338/commits/adf107b4bff212a854a93e2d90f89d369433a807)_)
- font-awesome ([github :link:](https://github.com/FortAwesome/Font-Awesome))
- animate.css ([github :link:](https://github.com/daneden/animate.css))
- classnames ([github :link:](https://github.com/JedWatson/classnames))
- react-motion ([github :link:](https://github.com/chenglou/react-motion))
- Webpack 4.x ([github :link:](https://github.com/webpack/webpack))
- axios ([github :link:](https://github.com/mzabriskie/axios) _Why: simple, complete, isomorphic ..._)

**Tool chain:**

- Typescript
- eslint
- webpack 5
- hot reload
- loaders
  - `ts` / `tsx`
  - css
  - json
  - images formats
  - svg and fonts formats

**tests:**

- Jest
- @testing-library/react

## Changelog

[Here](./CHANGELOG.md)

## Usage

You can run development React SPA application with hot reload or run the production bundles served through NodeJS server.

_NOTE: You don't need to worry about installing anything, just sit down keep cool and type any of these needed command._

### Front developement (with hot reload)

```bash
# from root directory:
npm run front-dev
```

> Application will be served at [**http://localhost:3001/ (just click me!)**](http://localhost:3001/)

### Front unit tests

```bash
# from root directory:
npm run front-test
```

### Front production bundle analyze

```bash
# from root directory:
npm run front-bundle-analyze
```

> Bundle analyzer will launch on its own in your default browser

### Serve production bundled application (front and NodeJS server)

```bash
# from root directory:
npm run start
```

> Application will be served at [**http://localhost:8082/ (just click me!)**](http://localhost:8082/)

## License

The MIT License (MIT)

Copyright (c) 2022 Erwan DATIN

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMacKentoch%2Freact-redux-bootstrap-webpack-starter.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FMacKentoch%2Freact-redux-bootstrap-webpack-starter?ref=badge_large)

```

```
