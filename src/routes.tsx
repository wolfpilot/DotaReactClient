// Libs
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Modules
import HomePage from './pages/HomePage/HomePage';
import HeroPage from './pages/HeroPage/HeroPage';

export const routes = (
  <Switch>
    <Route exact={true} path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
    <Route exact={true} path={`${process.env.PUBLIC_URL}/hero/:id`} component={HeroPage} />
  </Switch>
);
