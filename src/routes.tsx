// Libs
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const HomePage = () => <h1>Home page</h1>;
const TestPage = () => <h1>Test page</h1>;

export const routes = (
  <Switch>
    <Route exact={true} path="/" component={HomePage} />
    <Route exact={true} path="/test" component={TestPage} />
  </Switch>
);
