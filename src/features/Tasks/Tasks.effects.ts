import { call, put, takeEvery } from 'redux-saga/effects';
import { tasksActions } from 'features/Tasks/Tasks.slice';
import { PayloadAction } from '@reduxjs/toolkit';
import { tasksService } from 'features/Tasks/Tasks.service';
import { ITaskModel } from 'features/Tasks/Tasks.models';
import { ICreateTaskParams } from 'common/models/ICreateTaskParams';
import { IGetTaskCollectionParams } from 'common/models/IGetTaskCollectionParams';
import { IUpdateTaskParams } from 'common/models/IUpdateTaskParams';

function* create() {
  yield takeEvery(
    tasksActions.create.try.type,
    function* worker(action: PayloadAction<ICreateTaskParams>) {
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

function* getCollection() {
  yield takeEvery(
    tasksActions.getCollection.try.type,
    function* worker(action: PayloadAction<IGetTaskCollectionParams>) {
      const { payload } = action;
      try {
        const tasks: ITaskModel[] = yield call(
          tasksService.getCollection,
          payload
        );
        yield put(tasksActions.getCollection.success(tasks));
      } catch (e) {
        yield put(tasksActions.getCollection.fail(e.message));
      }
    }
  );
}

function* update() {
  yield takeEvery(
    tasksActions.update.try.type,
    function* worker(action: PayloadAction<IUpdateTaskParams>) {
      const { payload } = action;
      try {
        yield call(tasksService.update, payload);
        yield put(tasksActions.update.success());
      } catch (e) {
        yield put(tasksActions.update.fail(e.message));
      }
    }
  );
}

function* remove() {
  yield takeEvery(
    tasksActions.remove.try.type,
    function* worker({ payload }: PayloadAction<string>) {
      try {
        yield call(tasksService.remove, payload);
        yield put(tasksActions.remove.success());
      } catch (e) {
        yield put(tasksActions.remove.fail(e.message));
      }
    }
  );
}

export const tasksEffects = [create(), getCollection(), update(), remove()];
