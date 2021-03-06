import router from '@/router';

import SiteWrapper from '@/components/SiteWrapper';

const registerSite = (config) => {
  const {
    name,
    path: rootPath,
    routes,
    store: getSiteStore,
    wrapper,
  } = config;

  router.addRoute({
    path: rootPath,
    component: SiteWrapper,
    props: {
      moduleName: name.toLowerCase(),
      getSiteStore,
      wrapper,
    },
    children: routes.map(({ path, ...routeConfig }) => ({
      path: path.startsWith('/') ? path.slice(1) : path,
      ...routeConfig,
    })),
  });
};

export default registerSite;
