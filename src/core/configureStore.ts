import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { sidebarReducer } from 'features/Sidebar/Sidebar.slice';
import { projectsReducer } from 'features/Projects/Projects.slice';
import { projectsEffects } from 'features/Projects/Projects.effects';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([...projectsEffects]);
}

export const store = configureStore({
  reducer: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    router: connectRouter(history),
    sidebar: sidebarReducer,
    projects: projectsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware(history), sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
