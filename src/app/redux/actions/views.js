import moment from 'moment';

export const ENTER_HOME_VIEW  = 'ENTER_HOME_VIEW';
export const LEAVE_HOME_VIEW  = 'LEAVE_HOME_VIEW';
export const ENTER_COMPONENTS_VIEW = 'ENTER_COMPONENTS_VIEW';
export const LEAVE_COMPONENTS_VIEW = 'LEAVE_COMPONENTS_VIEW';
export const ENTER_ABOUT_VIEW = 'ENTER_ABOUT_VIEW';
export const LEAVE_ABOUT_VIEW = 'LEAVE_ABOUT_VIEW';

const dateFormat = 'DD/MM/YYYY HH:mm';

export const enterHome = (time = moment().format(dateFormat)) => {
  return {
    type:         ENTER_HOME_VIEW,
    currentView:  'home',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveHome = (time = moment().format(dateFormat)) => {
  return {
    type:         LEAVE_HOME_VIEW,
    currentView:  'home',
    enterTime:    null,
    leaveTime:    time
  };
};

export const enterComponents = (time = moment().format(dateFormat)) => {
  return {
    type:         ENTER_COMPONENTS_VIEW,
    currentView:  'components',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveComponents = (time = moment().format(dateFormat)) => {
  return {
    type:         LEAVE_COMPONENTS_VIEW,
    currentView:  'components',
    enterTime:    null,
    leaveTime:    time
  };
};


export const enterAbout = (time = moment().format(dateFormat)) => {
  return {
    type:         ENTER_ABOUT_VIEW,
    currentView:  'about',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveAbout = (time = moment().format(dateFormat)) => {
  return {
    type:         LEAVE_ABOUT_VIEW,
    currentView:  'about',
    enterTime:    null,
    leaveTime:    time
  };
};
