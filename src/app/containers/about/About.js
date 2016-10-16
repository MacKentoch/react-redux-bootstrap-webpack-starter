import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import { About }              from '../../views';


const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      enterAbout: viewsActions.enterAbout,
      leaveAbout: viewsActions.leaveAbout
    },
    dispatch
  );
};

/*
  without bindActionCreators:
 */
// const mapDispatchToProps = (dispatch) => {
//   return {
//     enterAbout: () => dispatch(viewsActions.enterAbout()),
//     leaveAbout: () => dispatch(viewsActions.leaveAbout())
//   };
// };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(About);
