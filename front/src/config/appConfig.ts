export const appConfig = Object.freeze({
  DEV_MODE: true, // block fetch

  // api endpoints:
  api: {
    fakeEndPoint: 'api/somewhere',
    users: 'api/someusersapi',
  },

  // sw path
  sw: {
    path: 'public/assets/sw.js',
  },
});

export default appConfig;
