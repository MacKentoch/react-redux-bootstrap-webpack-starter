import React, {
  Component
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import {Jumbotron}    from '../../components';

class PageNotFound extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return(
      <div>
        <Jumbotron>
          <h1>
            Sorry this page does not exists...
          </h1>
        </Jumbotron>
      </div>
    );
  }
}

export default PageNotFound;
