import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { filtersActions } from 'features/Filters/Filters.slice';
import { ICreateFilterModel } from 'features/Filters/Filters.models';
import { filtersService } from 'features/Filters/Filters.service';

function* create() {
  yield takeEvery(
    filtersActions.create.try.type,
    function* createWorker(action: PayloadAction<ICreateFilterModel>) {
      const { payload } = action;
      try {
        yield call(filtersService.create, payload);
        yield put(filtersActions.create.success());
      } catch (e) {
        yield put(filtersActions.create.fail(e.message));
      }
    }
  );
}

export const filtersEffects = [create()];
