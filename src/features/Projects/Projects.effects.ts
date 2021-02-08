import { call, put, takeEvery } from 'redux-saga/effects';
import { projectsActions } from 'features/Projects/Projects.slice';
import { PayloadAction } from '@reduxjs/toolkit';
import { ICreateProjectModel } from 'features/Projects/Projects.models';
import { projectsService } from 'features/Projects/Projects.service';

function* create() {
  yield takeEvery(
    projectsActions.create.try.type,
    function* createWorker(action: PayloadAction<ICreateProjectModel>) {
      const { payload } = action;
      try {
        yield call(projectsService.create, payload);
        yield put(projectsActions.create.success());
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

export const projectsEffects = [create(), getCollection(), remove()];
