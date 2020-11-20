import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Product from './pages/Product';
import Storage from './pages/Storage';

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
