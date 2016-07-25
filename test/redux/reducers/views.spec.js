import {expect}             from 'chai';
import views                from '../../../src/app/redux/reducers/views';
import moment               from 'moment';

const dateFormat = 'DD/MM/YYYY HH:mm';

describe('redux - reducer "views"', () => {
  it('should return an initial state', () => {
    const initialState = {
      currentView:  'not set',
      enterTime:    null,
      leaveTime:    null
    };
    /* eslint-disable no-undefined */
    expect(views(undefined, {})).to.deep.equal(initialState);
    /* eslint-enable no-undefined */
  });

  it('should set state according to ENTER_HOME_VIEW action', () => {
    const now = moment().format(dateFormat);
    const action = {
      type:         'ENTER_HOME_VIEW',
      currentView:  'home',
      enterTime:    now,
      leaveTime:    null
    };
    const expectedState = {
      currentView:  'home',
      enterTime:    now,
      leaveTime:    null
    };
    /* eslint-disable no-undefined */
    expect(views([], action)).to.deep.equal(expectedState);
    /* eslint-enable no-undefined */
  });

  // it('should set state according to LEAVE_HOME_VIEW action', () => {
  //   const now = moment().format(dateFormat);
  //   const actionLeaveHome = {
  //     type:         'LEAVE_HOME_VIEW',
  //     currentView:  'home',
  //     enterTime:    null,
  //     leaveTime:    now
  //   };
  //   const expectedState = {
  //     currentView:  'home',
  //     enterTime:    null,
  //     leaveTime:    now
  //   };
  //   /* eslint-disable no-undefined */
  //   expect(views([], actionLeaveHome)).to.deep.equal(expectedState);
  //   /* eslint-enable no-undefined */
  // });

  // it('should set state according to ENTER_COMPONENTS_VIEW action', () => {
  //   const now = moment().format(dateFormat);
  //   const actionEnterComponents = {
  //     type:         'ENTER_COMPONENTS_VIEW',
  //     currentView:  'components',
  //     enterTime:    now,
  //     leaveTime:    null
  //   };
  //   const expectedState = {
  //     currentView:  'home',
  //     enterTime:    now,
  //     leaveTime:    null
  //   };
  //   /* eslint-disable no-undefined */
  //   expect(views(undefined, actionEnterComponents)).to.deep.equal(expectedState);
  //   /* eslint-enable no-undefined */
  // });
});
