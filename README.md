Full ES2015+ React + React-Router + Redux + Bootstrap with Hot Reload and redux-devtools STARTER
==========
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/MacKentoch/react-redux-bootstrap-webpack-starter)
[![Build Status](https://travis-ci.org/MacKentoch/react-redux-bootstrap-webpack-starter.svg?branch=master)](https://travis-ci.org/MacKentoch/react-redux-bootstrap-webpack-starter)
[![Coverage Status](https://coveralls.io/repos/github/MacKentoch/react-redux-bootstrap-webpack-starter/badge.svg?branch=master)](https://coveralls.io/github/MacKentoch/react-redux-bootstrap-webpack-starter?branch=master)

#### full ES2015+

> My best React + redux project starter.

- *webpack is as simple as possible*
- *ReactJS is written with `optimization tricks` (stateless, pure render...).*
- *`pure front-end` = server independant (use whatever you want as server: NodeJS, Rails, .NET...)*

*Concept behind:* same as [react-bootstrap-webpack-starter](https://github.com/MacKentoch/react-bootstrap-webpack-starter) **but added `Redux` and amazing and helpful `redux-devtools`.**

## Breaking changes since v0.5.0
ReactJS v15.4.x required react-hot-loader to be v3+ (*previous react-hot-loader was v1.x and v1.3.1 came too late*). So This starter had to include breaking changes to follow all of that.

## Detailed Content

**Front:**
- React JS (15.x - [github :link:](https://github.com/facebook/react))
- Redux (*as you application grows managing state will be a serious concern, save pain with Redux*)
- React-Redux (*Redux is not specific to ReactJS, you could easily use it with Angular2 for instance*)
- Redux-devtools (*want to time travel your application State?*)
- React-Router-Redux (*previously named react-simple-router*)
- react-router (2.x- [github :link:](https://github.com/reactjs/react-router))
- Bootstrap (3.x - [github :link:](https://github.com/twbs/bootstrap))
- React-Bootstrap ([github :link:](https://github.com/react-bootstrap/react-bootstrap))
- font-awesome ([github :link:](https://github.com/FortAwesome/Font-Awesome))
- animate.css ([github :link:](https://github.com/daneden/animate.css))
- classnames ([github :link:](https://github.com/JedWatson/classnames))
- react-motion ([github :link:](https://github.com/chenglou/react-motion))
- Webpack ([github :link:](https://github.com/webpack/webpack))
- babel 6+ ([github :link:](https://github.com/babel/babel))
- react-addons-shallow-compare (*pure render mixin equivalent for ES6*)
- whatwg-fetch (*Why: because it is a fetch `Web API` polyfill*)

**Tool chain:**
- babel 6+
- eslint
- hot reload
- loaders
  - `js` / `jsx`
  - sass
  - css
  - json
  - images formats
  - svg and fonts formats
- autoprefixer (css and sass)

**tests:**
- Mocha
- Chai (*+ dirty-chai*)
- enzyme
- Sinon
- nyc


## Usage

### Install

```bash
npm install
```
### bundle dev mode (*+ redux-devtools*)

*General case:*
```bash
npm run dev
```

*Windows - particular - case:*
```bash
npm run dev-win
```

##### Note : redux-devtools shortcuts
- `ctrl+h`: to toggle devtools panel
- `ctrl+q`: to change devtools panel position (*by default: on the right*)

### dev : hot reload mode (*+ redux-devtools*)

*General case:*

```bash
npm run start
```

*Windows - particular - case:*
```bash
npm run start-win
```

##### Note : redux-devtools shortcuts
- `ctrl+h`: to toggle devtools panel
- `ctrl+q`: to change devtools panel position (*by default: on the right*)

### tests

*General case:*
```bash
npm run test
```

*Windows - particular - case:*
```bash
npm run test-win
```

### bundle production mode

*General case:*
```bash
npm run prod
```

*Windows - particular - case:*
```bash
npm run prod-win
```

## License

The MIT License (MIT)

Copyright (c) 2016 Erwan DATIN

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
