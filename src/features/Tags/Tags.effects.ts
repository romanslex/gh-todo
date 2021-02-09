import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { tagsActions } from 'features/Tags/Tags.slice';
import { ICreateTagModel } from 'features/Tags/Tags.models';
import { tagsService } from 'features/Tags/Tags.service';

function* create() {
  yield takeEvery(
    tagsActions.create.try.type,
    function* createWorker(action: PayloadAction<ICreateTagModel>) {
      const { payload } = action;
      try {
        yield call(tagsService.create, payload);
        yield put(tagsActions.create.success());
      } catch (e) {
        yield put(tagsActions.create.fail(e.message));
      }
    }
  );
}

function* getCollection() {
  yield takeEvery(tagsActions.getCollection.try.type, function* createWorker() {
    try {
      const data = yield call(tagsService.getCollection);
      yield put(tagsActions.getCollection.success(data));
    } catch (e) {
      yield put(tagsActions.getCollection.fail(e.message));
    }
  });
}

function* remove() {
  yield takeEvery(
    tagsActions.remove.try.type,
    function* removeWorker({ payload: id }: PayloadAction<string>) {
      try {
        yield call(tagsService.remove, id);
        yield put(tagsActions.remove.success());
        yield put(tagsActions.getCollection.try());
      } catch (e) {
        yield put(tagsActions.remove.fail(e.message));
      }
    }
  );
}

export const tagsEffects = [create(), getCollection(), remove()];
