import { call, put, takeEvery } from 'redux-saga/effects';
import { projectsActions } from 'features/Projects/Projects.slice';
import { PayloadAction } from '@reduxjs/toolkit';
import { IProjectModel } from 'features/Projects/Projects.models';
import { projectsService } from 'features/Projects/Projects.service';
import { ICreateProjectParams } from 'common/models/ICreateProjectParams';

function* create() {
  yield takeEvery(
    projectsActions.create.try.type,
    function* createWorker(action: PayloadAction<ICreateProjectParams>) {
      const { payload } = action;
      try {
        yield call(projectsService.create, payload);
        yield put(projectsActions.create.success());
        yield put(projectsActions.getCollection.try());
      } catch (e) {
        yield put(projectsActions.create.fail(e.message));
      }
    }
  );
}

function* getCollection() {
  yield takeEvery(
    projectsActions.getCollection.try.type,
    function* createWorker() {
      try {
        const data = yield call(projectsService.getCollection);
        yield put(projectsActions.getCollection.success(data));
      } catch (e) {
        yield put(projectsActions.getCollection.fail(e.message));
      }
    }
  );
}

function* remove() {
  yield takeEvery(
    projectsActions.remove.try.type,
    function* removeWorker({ payload: id }: PayloadAction<string>) {
      try {
        yield call(projectsService.remove, id);
        yield put(projectsActions.remove.success());
        yield put(projectsActions.getCollection.try());
      } catch (e) {
        yield put(projectsActions.remove.fail(e.message));
      }
    }
  );
}

function* update() {
  yield takeEvery(
    projectsActions.update.try,
    function* updateWorker({ payload }: PayloadAction<IProjectModel>) {
      try {
        yield call(projectsService.update, payload);
        yield put(projectsActions.update.success());
        yield put(projectsActions.getCollection.try());
      } catch (e) {
        yield put(projectsActions.update.fail(e.message));
      }
    }
  );
}

function* initInboxProject() {
  yield takeEvery(projectsActions.initInbox, function* worker() {
    yield call(projectsService.initInboxProject);
  });
}

export const projectsEffects = [
  create(),
  getCollection(),
  remove(),
  update(),
  initInboxProject(),
];
