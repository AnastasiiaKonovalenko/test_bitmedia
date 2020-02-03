import React from 'react';
import {Switch, Route } from 'react-router-dom';
import './app.scss'

import Home from './components/Home';
import Users from './components/users/Users';
import Statistic from './components/statistic/Statistic';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
    </Route>

      <Route path='/users'>
        <Users />
      </Route>

      <Route path='/statistic'>
        <Statistic />
      </Route>
    </Switch>
  );
}

export default App;
