// @flow weak

export const getLocationOrigin: () => string = () => {
  if (!window.location.origin) {
    window.location.origin = `${window.location.protocol}//${window.location.hostname}${window.location.port ? ':' + window.location.port : ''}`;
  }
  return window.location.origin;
};

export default getLocationOrigin;
