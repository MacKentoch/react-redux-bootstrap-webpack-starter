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
    const { steps, initialStep } = props;
    this.state = {
      steps: [...steps],
      currentStep: initialStep,
      previousStep: null,
      xAxisInial: 0,
      xAxisMovementOffset: 50
    };
    this.handlesGoNextStep = this.handlesGoNextStep.bind(this);
    this.handlesGoPrevStep = this.handlesGoPrevStep.bind(this);
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
        {
          steps.map(
            (step, stepIdx) => {
              return (
                <Motion
                  style={this.getThisStepStyle(step.id)}
                  key={stepIdx}>
                  {
                    ({x, opacity, zIndex}) => {
                      return (
                        <div
                          style={{
                            WebkitTransform: `translate3d(${x}px, 0, 0)`,
                            transform: `translate3d(${x}px, 0, 0)`,
                            opacity: `${opacity}`,
                            top: 0,
                            zIndex : `${zIndex}`
                          }}>
                          a step
                        </div>
                      );
                    }
                  }
                </Motion>
              );
            }
          )
        }
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

  handlesGoNextStep(event) {
    event.preventDefault();

    const { steps, currentStep, previousStep } = this.state;
    const nextStep = currentStep + 1 > steps.length ? currentStep : currentStep + 1;
    const prevStep = nextStep !== currentStep ? nextStep : previousStep;

    this.setState({
      currentStep: nextStep,
      previousStep: prevStep
    });
  }

  handlesGoPrevStep(event) {
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
      const stepDelta = stepId - previousStep;
      if (stepDelta < 0) {
        return {
          x: spring(backwardMove, presets.stiff),
          opacity: 0,
          zIndex: 0
        };
      } else if (stepDelta > 0) {
        return {
          x: spring(forwardMove, presets.gentle),
          opacity: 0,
          zIndex: 0
        };
      } else {
        // const opacity =
        return {
          x: spring(noMove, presets.gentle),
          opacity: 1,
          zIndex: spring(1)
        };
      }
    } else {
      // no previous step: so movement is forward
      const move =  stepId === currentStep ? noMove : forwardMove;
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
}

export default WizardMotion;
