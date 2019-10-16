import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const fadeInAnimationCss = css`
  opacity: 0;
  animation-name: ${fadeIn};
  animation-timing-function: ease-in;
  animation-duration: 0.7s;
  animation-delay: 0s;
  animation-fill-mode: both;
`;

type FadeInProps = {
  startAnimation: boolean,
};

const FadeInDiv =
  styled.div <
  FadeInProps >
  `
  ${({ startAnimation }) => startAnimation && fadeInAnimationCss};
`;

export default FadeInDiv;
