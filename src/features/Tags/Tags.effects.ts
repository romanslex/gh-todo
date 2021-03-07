import { call, put, select, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { tagsActions } from 'features/Tags/Tags.slice';
import { ITagModel } from 'features/Tags/Tags.models';
import { tagsService } from 'features/Tags/Tags.service';
import { ICreateTagParams } from 'common/models/ICreateTagParams';
import { match, matchPath } from 'react-router-dom';
import { ERoute } from 'common/const/Router.const';
import { push } from 'connected-react-router';
import { routerSelectors } from 'features/Router/Router.selectors';

function* create() {
  yield takeEvery(
    tagsActions.create.try.type,
    function* createWorker(action: PayloadAction<ICreateTagParams>) {
      const { payload } = action;
      try {
        yield call(tagsService.create, payload);
        yield put(tagsActions.create.success());
        yield put(tagsActions.getCollection.try());
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
        yield put(tagsActions.getCollection.try());
        const pathname: string = yield select(routerSelectors.getPathname);

        const matcher: match<{ id: string }> = yield call(matchPath, pathname, {
          path: ERoute.Tag,
        });
        yield matcher?.params?.id === id && put(push(ERoute.Inbox));

        yield put(tagsActions.remove.success());
      } catch (e) {
        yield put(tagsActions.remove.fail(e.message));
      }
    }
  );
}

function* update() {
  yield takeEvery(
    tagsActions.update.try.type,
    function* updateWorker({ payload }: PayloadAction<ITagModel>) {
      try {
        const tag: ITagModel = yield call(tagsService.update, payload);
        yield put(tagsActions.update.success(tag));
        yield put(tagsActions.getCollection.try());
      } catch (e) {
        yield put(tagsActions.update.fail(e.message));
      }
    }
  );
}

export const tagsEffects = [create(), getCollection(), remove(), update()];
