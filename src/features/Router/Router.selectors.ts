import { RouterState } from 'connected-react-router';

const getPathname = (state: { router: RouterState }): string =>
  state.router.location.pathname;

export const routerSelectors = { getPathname };
