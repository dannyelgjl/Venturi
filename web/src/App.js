import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';
import { Provider } from 'react-redux';

import store from './store';

import GlobalStyles from './styles/global';

import Routes from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
      </Router>
    </Provider>
  );
}

export default App;
