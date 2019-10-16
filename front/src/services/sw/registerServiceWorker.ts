import appConfig from '../../config/appConfig';

// #region constants
const { path: swPath } = appConfig.sw;
// #endregion

function registerServiceWorker(): void {
  if (typeof window !== undefined) {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', async () => {
        try {
          const registration = await navigator.serviceWorker.register(swPath);
          console.log('SW registered: ', registration);
        } catch (error) {
          console.log('SW registration failed: ', error);
        }
      });
    }
  }
}

export default registerServiceWorker;
