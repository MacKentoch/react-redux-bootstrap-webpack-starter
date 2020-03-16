import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { RootState } from '../../redux/modules/types';
import Home from './Home';

// #region redux map state and dispatch to props
const mapStateToProps = (state: RootState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({}, dispatch);
};
// #endregion

// #region connector
const connector = connect(mapStateToProps, mapDispatchToProps);
// #endregion

// #region types (deduce by connector type to infer mapStateToProps)
export type MappedStateToProps = ConnectedProps<typeof connector>;
export type OwnProps = {};
export type MappedDispatchToProps = {};
// #endregion

export default compose<any>(connector)(Home);
