import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Login from './pages/Login';

import Product from './pages/Product';

import Storage from './pages/Storage';
import CreateProduct from './pages/CreateProduct';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"  component={Login} />
      <Route  path="/product"  component={Product} />
      <Route  path="/storage"  component={Storage} />
      <Route  path="/createproduct"  component={CreateProduct} />
    </Switch>
  );
}

export default Routes;
