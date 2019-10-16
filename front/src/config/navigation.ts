export type Link = {
  label: string,
  link: string,
  view?: string,
  isRouteBtn?: boolean,
};

export type Navigation = {
  brand: string,
  leftLinks: Array<Link>,
  rightLinks: Array<Link>,
};
// #endregion

const navigation = Object.freeze({
  brand: 'React Redux Bootstrap Starter',
  leftLinks: [],
  rightLinks: [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Protected',
      link: '/protected',
      view: 'protected',
      isRouteBtn: true,
    },
    {
      label: 'About',
      link: '/about',
      view: 'about',
      isRouteBtn: true,
    },
  ],
});

export default navigation;
