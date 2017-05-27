/* global $:true */
// @flow weak

import React, {
  Component
}                       from 'react';
import PropTypes        from 'prop-types';
import {smoothScroll}   from './lib/smoothScroll';
import BackToTopButton  from './backToTopButton/BackToTopButton';
import {Motion, spring, presets} from 'react-motion';

class BackToTop extends Component {
  static propTypes = {
    minScrollY: PropTypes.number,
    scrollTo: PropTypes.string.isRequired,
    onScrollDone: PropTypes.func
  };

  static defaultProps = {
    minScrollY: 120
  };

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

export default BackToTop;
