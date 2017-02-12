import React, {
  PureComponent,
  PropTypes
}                     from 'react';
import AnimatedView   from '../../components/animatedView/AnimatedView';

class About extends PureComponent {
  componentDidMount() {
    const { enterAbout } = this.props;
    enterAbout();
  }

  componentWillUnmount() {
    const { leaveAbout } = this.props;
    leaveAbout();
  }

  render() {
    return(
      <AnimatedView>
        <h1>
          About
        </h1>
      </AnimatedView>
    );
  }
}

About.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterAbout:   PropTypes.func.isRequired,
  leaveAbout:   PropTypes.func.isRequired
};

export default About;
