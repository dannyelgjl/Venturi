import React from 'react';
// redux-persist
import { PersistGate } from 'redux-persist/integration/react';
// Redux
import { Provider } from 'react-redux';
// redux store
import { store, persistor } from './store';
// react-router-dom
import { Router } from 'react-router-dom';
// routes
import Routes from './routes';
//history
import history from './services/history';
// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// GlobalStyle
import GlobalStyle from './styles/global';


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        <Router history={history}>
          <Routes />
          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
