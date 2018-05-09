// @flow

// @region imports
import styled, { keyframes, css } from 'styled-components';
// #endregion

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const AnimatedDiv = styled.div`
  ${({ viewEnter }) =>
    viewEnter &&
    css`
      opacity: 0;
      animation-name: ${fadeIn};
      animation-timing-function: ease-in;
      animation-duration: 0.7s;
      animation-delay: 0s;
      animation-fill-mode: both;
    `};
`;

export default AnimatedDiv;
