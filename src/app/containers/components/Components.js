import { connect }        from 'react-redux';
import * as viewsActions  from '../../redux/actions';
import { Components }     from '../../views';


const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    enterComponents: () => dispatch(viewsActions.enterComponents()),
    leaveComponents: () => dispatch(viewsActions.leaveComponents())
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Components);
