import React, {
  Component,
  PropTypes
}               from 'react';
import cx       from 'classnames';

const buttonsHeight = 50;
const containerStyle = {
  borderWith: '1px',
  borderColor: '#F1F1F1',
  backgroundColor: '#3498DB',
  paddingTop: '5px',
  paddingBottom: '5px',
  paddingLeft: '5px',
  paddingRight: '5px'
};

class WizardMotion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { width, height, horizontalCentered } = this.props;
    return (
      <div
        className={cx({
          'center-block': horizontalCentered
        })}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          ...containerStyle
        }}>
        <div style={{height: `${height - buttonsHeight}px`}}>
          a step
        </div>
        <div
          style={{height: `${buttonsHeight}px`}}
          className="pull-right">
          <button
            style={{marginRight: '5px'}}
            className="btn btn-warning">
            prev.
          </button>
          <button
            style={{marginLeft: '5px'}}
            className="btn btn-warning">
            next
          </button>
        </div>
      </div>
    );
  }
}

WizardMotion.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  horizontalCentered: PropTypes.bool,
  initialStep: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired
  )
};

WizardMotion.defaultProps = {
  horizontalCentered: false
}

export default WizardMotion;
