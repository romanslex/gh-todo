import React from 'react';
import { Provider } from 'react-redux';
import { store, history } from 'core/configureStore';
import { ConnectedRouter } from 'connected-react-router';
import { Default } from 'common/Layouts/Default';
import 'core/assets/sass/index.scss';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Default />
      </ConnectedRouter>
    </Provider>
  );
};
