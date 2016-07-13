import { connect }        from 'react-redux';
import * as viewsActions  from '../../redux/actions';
import { About }           from '../../views';


const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    enterAbout: () => dispatch(viewsActions.enterAbout()),
    leaveAbout: () => dispatch(viewsActions.leaveAbout())
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(About);
