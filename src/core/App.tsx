import React from 'react';
import { Provider } from 'react-redux';
import { store, history } from 'core/configureStore';
import { ConnectedRouter } from 'connected-react-router';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>Hello</div>
      </ConnectedRouter>
    </Provider>
  );
};
