// @flow

// #region imports
import compose from 'recompose/compose';
import PageNotFound from './PageNotFound';
import withEnterAnimation from '../../hoc/withEnterAnimation';
// #endregion

export default compose(withEnterAnimation(/* no option yet */))(PageNotFound);
