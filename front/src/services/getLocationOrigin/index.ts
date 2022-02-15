export const getLocationOrigin = (): string => {
  if (!window.location.origin) {
    const windowLocationOrigin = `${window.location.protocol}//${
      window.location.hostname
    }${window.location.port ? ':' + window.location.port : ''}`;

    return windowLocationOrigin;
  }

  return window.location.origin;
};

export default getLocationOrigin;
