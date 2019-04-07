// Libs
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Utils
import { routes } from '../../routes';

// Components
import Page from '../Page/Page';

const App = () => (
  <Router>
    <Page children={routes} />
  </Router>
);

export default App;
