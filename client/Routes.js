import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route expact path="/" component={Main} />
      </Switch>
    </Router>
  );
};

export default Routes;
