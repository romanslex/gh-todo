import { useSelector } from 'react-redux';

const useCurrentPath = (): string => {
  const { pathname } = useSelector(
    (state: { router: { location: { pathname: string } } }) =>
      state.router.location
  );
  return pathname.split(/(^\/[a-zA-Z]*)/)[1];
};

export const RouterHooks = {
  useCurrentPath,
};
