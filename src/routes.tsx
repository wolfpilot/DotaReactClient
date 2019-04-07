// Libs
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Modules
import HomePage from './pages/HomePage/HomePage';

export const routes = (
  <Switch>
    <Route exact={true} path="/" component={HomePage} />
  </Switch>
);
