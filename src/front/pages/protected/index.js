// @flow

// #region imports
import compose from 'recompose/compose';
import Protected from './Protected';
import withEnterAnimation from '../../hoc/withEnterAnimation';
// #endregion

export default compose(withEnterAnimation(/* no option yet */))(Protected);
