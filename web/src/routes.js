import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

import Login from './pages/Login';
import Product from './pages/Product';
import Storage from './pages/Storage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"  component={Login} />
        <BrowserRouter>
          <Header />
          <Route  path="/product"  component={Product} />
          <Route  path="/storage"  component={Storage} />
        </BrowserRouter>
    </Switch>
  );
}

export default Routes;
