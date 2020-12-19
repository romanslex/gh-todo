import { ISidebarSlice } from 'features/Sidebar/Sidebar.models';

type State = { sidebar: ISidebarSlice };

const getIsMobileMenuOpen = (state: State): boolean =>
  state.sidebar.isMobileMenuOpen;

export const sidebarSelectors = {
  getIsMobileMenuOpen,
};
