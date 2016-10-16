/* global $:true */

import React, {
  Component,
  PropTypes
}                       from 'react';
import {smoothScroll}   from './lib/smoothScroll';
import BackToTopButton  from './backToTopButton/BackToTopButton';
import {Motion, spring, presets} from 'react-motion';

class BackToTop extends Component {

  state = {
    windowScrollY: 0,
    showBackButton: false
  };

  componentWillMount() {
    window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll);
  }

  render() {
    const { showBackButton } = this.state;
    return (
      <Motion style={{x: spring(showBackButton ? 0 : 120, presets.stiff)}}>
        {
          ({x}) =>
            <BackToTopButton
              position={'bottom-right'}
              onClick={this.handlesOnBackButtonClick}
              motionStyle={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`
              }}
            />
        }
      </Motion>
    );
  }

  handleWindowScroll = () => {
    if ($) {
      const { windowScrollY } = this.state;
      const { minScrollY } = this.props;
      const currentWindowScrollY = $(window).scrollTop();

      if (windowScrollY !== currentWindowScrollY) {
        const shouldShowBackButton = currentWindowScrollY >= minScrollY ? true : false;

        this.setState({
          windowScrollY: currentWindowScrollY,
          showBackButton: shouldShowBackButton
        });
      }
    } else {
      /* eslint-disable no-throw-literal*/
      throw 'BackToTop component requires jQuery';
      /* eslint-enable no-throw-literal*/
    }
  }

  scrollDone = () => {
    const { onScrollDone } = this.props;
    if (onScrollDone) {
      onScrollDone();
    }
  }

  handlesOnBackButtonClick = (event) => {
    event.preventDefault();
    const { scrollTo, minScrollY } = this.props;
    const { windowScrollY } = this.state;

    if (windowScrollY && windowScrollY > minScrollY) {
      smoothScroll.scrollTo(scrollTo, this.scrollDone);
    }
  }
}

BackToTop.propTypes = {
  minScrollY: PropTypes.number,
  scrollTo: PropTypes.string.isRequired,
  onScrollDone: PropTypes.func
};

BackToTop.defaultProps = {
  minScrollY: 120
};

export default BackToTop;
