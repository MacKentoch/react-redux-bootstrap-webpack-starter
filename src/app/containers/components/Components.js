import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import { Components }         from '../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      enterComponents: viewsActions.enterComponents,
      leaveComponents: viewsActions.leaveComponents
    },
    dispatch
  );
};

/*
  without bindActionCreators:
 */
// const mapDispatchToProps = (dispatch) => {
//   return {
//     enterComponents: () => dispatch(viewsActions.enterComponents()),
//     leaveComponents: () => dispatch(viewsActions.leaveComponents())
//   };
// };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Components);
