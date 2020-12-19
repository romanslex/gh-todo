import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { sidebarReducer } from 'features/Sidebar/Sidebar.slice';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([]);
}

export const store = configureStore({
  reducer: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    router: connectRouter(history),
    sidebar: sidebarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware(history), sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
