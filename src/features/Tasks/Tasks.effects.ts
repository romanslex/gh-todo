import { call, put, takeEvery } from 'redux-saga/effects';
import { tasksActions } from 'features/Tasks/Tasks.slice';
import { PayloadAction } from '@reduxjs/toolkit';
import { ICreateTaskModel } from 'features/Tasks/Tasks.models';
import { tasksService } from 'features/Tasks/Tasks.service';

function* create() {
  yield takeEvery(
    tasksActions.create.try.type,
    function* worker(action: PayloadAction<ICreateTaskModel>) {
      const { payload } = action;
      try {
        yield call(tasksService.create, payload);
        yield put(tasksActions.create.success());
      } catch (e) {
        yield put(tasksActions.create.fail(e.message));
      }
    }
  );
}

export const tasksEffects = [create()];
