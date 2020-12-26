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

export const projectsEffects = [create()];
