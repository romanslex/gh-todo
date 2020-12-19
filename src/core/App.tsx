import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'core/configureStore';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>Hello</div>
    </Provider>
  );
};
