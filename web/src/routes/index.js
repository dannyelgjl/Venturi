import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Storage from '../pages/Storage';
import CreateProduct from '../pages/CreateProduct';
import Cart from '../pages/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route  path="/storage"  component={Storage} isPrivate/>
      <Route  path="/createproduct"  component={CreateProduct} isPrivate/>
      <Route  path="/cart"  component={Cart} isPrivate/>
    </Switch>
  );
}
