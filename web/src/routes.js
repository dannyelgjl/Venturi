import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/login';
import Product from './pages/product';
import Storage from './pages/storage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"  component={Login} />
      <Route  path="/product"  component={Product} />
      <Route  path="/storage"  component={Storage} />
    </Switch>
  );
}

export default Routes;
