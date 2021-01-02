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

export const tagsEffects = [create()];
