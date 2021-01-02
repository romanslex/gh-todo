import { createAction as rtCreateAction } from '@reduxjs/toolkit';

const createAction = <Try, Success, Fail>(name: string) => {
  return {
    try: rtCreateAction<Try>(`${name}/try`),
    success: rtCreateAction<Success>(`${name}/success`),
    fail: rtCreateAction<Fail>(`${name}/fail`),
  };
};

export const ReduxHelpers = {
  createAction,
};
