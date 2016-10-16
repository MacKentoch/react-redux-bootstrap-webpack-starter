import React, {
  Component,
  PropTypes
}               from 'react';
import cx       from 'classnames';
import {
  // TransitionMotion,
  Motion,
  spring,
  presets
}               from 'react-motion';

const buttonsHeight = 50;
const containerStyle = {
  borderWith:       '1px',
  borderColor:      '#F1F1F1',
  backgroundColor:  '#3498DB',
  paddingTop:       '5px',
  paddingBottom:    '5px',
  paddingLeft:      '5px',
  paddingRight:     '5px',
  overflow:         'hidden'
};

class WizardMotion extends Component {

  state = {
    steps: [],
    currentStep: 0,
    previousStep: null,
    xAxisInial: 0,
    xAxisMovementOffset: 10
  }

  componentDidMount() {
    const { steps, initialStep } = this.props;

    initState.apply(this);

    function initState() {
      this.setState({
        steps: [...steps],
        currentStep: initialStep,
        previousStep: null,
        xAxisInial: 0,
        xAxisMovementOffset: 10
      });
    }
  }

  render() {
    const { steps } = this.state;
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
        <div style={{width: `${width * 100}`, overflow: 'hidden'}}>
        {
          steps.map(
            (step, stepIdx) => {
              return (
                <Motion
                  style={this.getThisStepStyle(stepIdx)}
                  key={stepIdx}>
                  {
                    ({x, opacity, zIndex}) => {
                      return (
                        <div
                          style={{
                            WebkitTransform: `translate3d(${x}px, 0, 0)`,
                            transform: `translate3d(${x}px, 0, 0)`,
                            opacity: `${opacity}`,
                            zIndex : `${zIndex}`,
                            float: 'left',
                            backgroundColor: `${step.backColor}`,
                            width: `${width}px`
                          }}>
                          <h3>
                            step: {step.id}
                          </h3>
                        </div>
                      );
                    }
                  }
                </Motion>
              );
            }
          )
        }
        </div>
        <div
          style={{height: `${buttonsHeight}px`}}
          className="pull-right">
          <button
            style={{marginRight: '5px'}}
            className="btn btn-warning"
            onClick={this.handlesGoPrevStep}>
            prev.
          </button>
          <button
            style={{marginLeft: '5px'}}
            className="btn btn-warning"
            onClick={this.handlesGoNextStep}>
            next
          </button>
        </div>
      </div>
    );
  }

  handlesGoNextStep = (event) => {
    event.preventDefault();

    const { steps, currentStep, previousStep } = this.state;
    const nextStep = currentStep + 1 > steps.length ? currentStep : currentStep + 1;
    const prevStep = nextStep !== currentStep ? nextStep : previousStep;

    this.setState({
      currentStep: nextStep,
      previousStep: prevStep
    });
  }

  handlesGoPrevStep = (event) => {
    event.preventDefault();

    const { currentStep, previousStep } = this.state;
    const nextStep = currentStep - 1 < 0 ? currentStep : currentStep - 1;
    const prevStep = nextStep !== currentStep ? nextStep : previousStep;

    this.setState({
      currentStep: nextStep,
      previousStep: prevStep
    });
  }

  getThisStepStyle(stepId) {
    const { currentStep, previousStep, xAxisInial, xAxisMovementOffset } = this.state;
    const { width } = this.props;

    const noMove = xAxisInial;
    const forwardMove = width + xAxisMovementOffset;
    const backwardMove = -1 * (width + xAxisMovementOffset);

    if (previousStep) {
      const stepDelta = stepId + 1 - previousStep;
      if (stepDelta < 0) {
        return {
          x: spring(backwardMove * (stepId + 1), presets.stiff),
          opacity: 0
        };
      } else if (stepDelta > 0) {
        return {
          x: spring(forwardMove, presets.gentle),
          opacity: 0
        };
      } else {
        return {
          x: spring(noMove, presets.gentle),
          opacity: 1
        };
      }
    } else {
      // no previous step: so movement is forward
      const move =  stepId + 1 === currentStep ? noMove : forwardMove;
      return {
        x: spring(move, presets.gentle),
        opacity: 0
      };
    }
  }
  // getStepStyle() {
  //   const { steps, currentStep, xAxisInial, xAxisMovementOffset } = this.state;
  //   const { width }  =this.props;
  //
  //   steps.map(
  //     step => {
  //       return {
  //         ...step,
  //         style: {
  //           x: spring(steps.id === currentStep ? xAxisInial : width + xAxisMovementOffset, presets.gentle)
  //         }
  //       };
  //     }
  //   );
  // }
  //
  // stepEnter() {
  //   const { xAxisMovementOffset } = this.state;
  //   const { width } = this.props;
  //   return {
  //     x: width + xAxisMovementOffset
  //   };
  // }
  //
  // stepLeave() {
  //   const { xAxisInial } = this.state;
  //   return {
  //     x: string(xAxisInial)
  //   };
  // }
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
};

export default WizardMotion;
