import moment from 'moment';
const dateFormat = 'DD/MM/YYYY HH:mm';

// /////////////////////
// constants
// /////////////////////
const ENTER_HOME_VIEW  = 'ENTER_HOME_VIEW';
const LEAVE_HOME_VIEW  = 'LEAVE_HOME_VIEW';
const ENTER_COMPONENTS_VIEW = 'ENTER_COMPONENTS_VIEW';
const LEAVE_COMPONENTS_VIEW = 'LEAVE_COMPONENTS_VIEW';
const ENTER_ABOUT_VIEW = 'ENTER_ABOUT_VIEW';
const LEAVE_ABOUT_VIEW = 'LEAVE_ABOUT_VIEW';


// /////////////////////
// reducer
// /////////////////////
const initialState = {
  currentView:  'not set',
  enterTime:    null,
  leaveTime:    null
};

export default function (state = initialState, action) {
  switch (action.type) {

  case ENTER_HOME_VIEW:
  case ENTER_COMPONENTS_VIEW:
  case ENTER_ABOUT_VIEW:
    // can't enter if you are already inside
    if (state.currentView !== action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  case LEAVE_HOME_VIEW:
  case LEAVE_COMPONENTS_VIEW:
  case LEAVE_ABOUT_VIEW:
    // can't leave if you aren't already inside
    if (state.currentView === action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  default:
    return state;
  }
}


// /////////////////////
// action creators
// /////////////////////
export function enterHome(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_HOME_VIEW,
    currentView:  'home',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveHome(time = moment().format(dateFormat)) {
  return {
    type:         LEAVE_HOME_VIEW,
    currentView:  'home',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterComponents(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_COMPONENTS_VIEW,
    currentView:  'components',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveComponents(time = moment().format(dateFormat)) {
  return {
    type:         LEAVE_COMPONENTS_VIEW,
    currentView:  'components',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterAbout(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_ABOUT_VIEW,
    currentView:  'about',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveAbout(time = moment().format(dateFormat)) {
  return {
    type:         LEAVE_ABOUT_VIEW,
    currentView:  'about',
    enterTime:    null,
    leaveTime:    time
  };
}
