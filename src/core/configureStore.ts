import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { sidebarReducer } from 'features/Sidebar/Sidebar.slice';
import { projectsReducer } from 'features/Projects/Projects.slice';
import { projectsEffects } from 'features/Projects/Projects.effects';
import { tagsReducer } from 'features/Tags/Tags.slice';
import { tagsEffects } from 'features/Tags/Tags.effects';
import { tasksReducer } from 'features/Tasks/Tasks.slice';
import { tasksEffects } from 'features/Tasks/Tasks.effects';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([...projectsEffects, ...tagsEffects, ...tasksEffects]);
}

export const store = configureStore({
  reducer: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    router: connectRouter(history),
    sidebar: sidebarReducer,
    projects: projectsReducer,
    tags: tagsReducer,
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware(history), sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
