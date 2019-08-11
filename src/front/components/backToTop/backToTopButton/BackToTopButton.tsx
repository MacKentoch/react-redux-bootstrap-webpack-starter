import React from 'react';
import cx from 'classnames';
import UpIcon from './UpIcon';
import WithRightMargin from './styled/WithRightMargin';

// #region types
export type BackButtonPosition = 'bottom-left' | 'bottom-right';
type Props = {
  position: BackButtonPosition,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => any,
  children?: any,
  motionStyle: any,
};
// #endregion

// #region constants
const defaultBackGroundColor = '#4A4A4A';
const sideOffset = '-10px';
const bottomOffset = '40px';
const defaultWidth = '100px';
const defaultZindex = 10;
const defaultOpacity = 0.5;
const defaultStyle = {
  position: 'fixed',
  right: sideOffset,
  left: '',
  bottom: bottomOffset,
  width: defaultWidth,
  zIndex: defaultZindex,
  opacity: defaultOpacity,
  backgroundColor: defaultBackGroundColor,
};

function setPosition(position = 'bottom-right', refStyle = defaultStyle): any {
  const style = { ...refStyle };

  switch (position) {
    case 'bottom-right':
      style.right = sideOffset;
      style.left = '';
      return style;

    case 'bottom-left':
      style.right = '';
      style.left = sideOffset;
      return style;

    default:
      return refStyle;
  }
}
// #endregion

const BackToTopButton = ({
  onClick,
  position = 'bottom-right',
  children,
  motionStyle,
}: Props) => {
  const buttonStyle = setPosition(position, {
    ...motionStyle,
    ...defaultStyle,
  });

  return (
    <button
      style={buttonStyle}
      className={cx({
        btn: true,
      })}
      onClick={onClick}
    >
      {!children && (
        <WithRightMargin>
          <UpIcon color={'#F1F1F1'} />
        </WithRightMargin>
      )}
      {!!children && children}
    </button>
  );
};

BackToTopButton.displayName = 'BackToTopButton';

export default BackToTopButton;
